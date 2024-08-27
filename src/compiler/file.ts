// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import * as s from "../capnp/schema";
import { format } from "../util";

import { CodeGeneratorFileContext } from "./code-generator-file-context";
import { ConcreteListType } from "./constants";
import * as E from "./errors";
import * as util from "./util";

export function compareCodeOrder(
  a: { readonly codeOrder: number },
  b: { readonly codeOrder: number },
): number {
  return a.codeOrder - b.codeOrder;
}

export function getConcreteListType(
  ctx: CodeGeneratorFileContext,
  type: s.Type,
): string {
  if (!type.isList()) return getJsType(ctx, type, false);

  const elementType = type.list.elementType;
  const elementTypeWhich = elementType.which();

  if (elementTypeWhich === s.Type.LIST) {
    return `$.PointerList(${getConcreteListType(ctx, elementType)})`;
  } else if (elementTypeWhich === s.Type.STRUCT) {
    const structNode = lookupNode(ctx, elementType.struct.typeId);

    if (
      structNode.struct.preferredListEncoding !== s.ElementSize.INLINE_COMPOSITE
    ) {
      throw new Error(E.GEN_FIELD_NON_INLINE_STRUCT_LIST);
    }

    return `$.CompositeList(${getJsType(ctx, elementType, false)})`;
  }

  return ConcreteListType[elementTypeWhich];
}

export function getDisplayNamePrefix(node: s.Node): string {
  return node.displayName.slice(node.displayNamePrefixLength);
}

export function getFullClassName(node: s.Node): string {
  return node.displayName
    .split(":")[1]
    .split(".")
    .map((s) => util.c2t(s))
    .join("_");
}

export function getJsType(
  ctx: CodeGeneratorFileContext,
  type: s.Type,
  constructor: boolean,
): string {
  const whichType = type.which();

  switch (whichType) {
    case s.Type.ANY_POINTER: {
      return "$.Pointer";
    }

    case s.Type.BOOL: {
      return "boolean";
    }

    case s.Type.DATA: {
      return "$.Data";
    }

    case s.Type.ENUM: {
      return getFullClassName(lookupNode(ctx, type.enum.typeId));
    }

    case s.Type.FLOAT32:
    case s.Type.FLOAT64:
    case s.Type.INT16:
    case s.Type.INT32:
    case s.Type.INT8:
    case s.Type.UINT16:
    case s.Type.UINT32:
    case s.Type.UINT8: {
      return "number";
    }

    case s.Type.UINT64:
    case s.Type.INT64: {
      return "bigint";
    }

    case s.Type.INTERFACE: {
      return getFullClassName(lookupNode(ctx, type.interface.typeId));
    }

    case s.Type.LIST: {
      return `$.List${constructor ? "Ctor" : ""}<${getJsType(ctx, type.list.elementType, false)}>`;
    }

    case s.Type.STRUCT: {
      const c = getFullClassName(lookupNode(ctx, type.struct.typeId));

      return constructor ? `$.StructCtor<${c}>` : c;
    }

    case s.Type.TEXT: {
      return "string";
    }

    case s.Type.VOID: {
      return "$.Void";
    }

    default: {
      throw new Error(format(E.GEN_UNKNOWN_TYPE, whichType));
    }
  }
}

export function getUnnamedUnionFields(node: s.Node): s.Field[] {
  if (!node.isStruct()) return [];

  return node.struct.fields.filter(
    (f) => f.discriminantValue !== s.Field.NO_DISCRIMINANT,
  );
}

export function hasNode(
  ctx: CodeGeneratorFileContext,
  lookup: { readonly id: bigint } | bigint,
): boolean {
  const id = typeof lookup === "bigint" ? lookup : lookup.id;

  return ctx.nodes.some((n) => n.id === id);
}

export function loadRequestedFile(
  req: s.CodeGeneratorRequest,
  file: s.CodeGeneratorRequest_RequestedFile,
): CodeGeneratorFileContext {
  const ctx = new CodeGeneratorFileContext(req, file);

  const schema = lookupNode(ctx, file.id);

  ctx.tsPath = schema.displayName.replace(/\.capnp$/, "") + ".ts";

  return ctx;
}

export function lookupNode(
  ctx: CodeGeneratorFileContext,
  lookup: { readonly id: bigint } | bigint,
): s.Node {
  const id = typeof lookup === "bigint" ? lookup : lookup.id;
  const node = ctx.nodes.find((n) => n.id === id);

  if (node === undefined) throw new Error(format(E.GEN_NODE_LOOKUP_FAIL, id));

  return node;
}

export function lookupNodeSourceInfo(
  ctx: CodeGeneratorFileContext,
  lookup: { readonly id: bigint } | bigint,
): s.Node_SourceInfo | undefined {
  const id = typeof lookup === "bigint" ? lookup : lookup.id;
  const sourceInfo = ctx.req.sourceInfo.find((s) => s.id === id);
  if (!sourceInfo) throw new Error(format(E.GEN_NODE_LOOKUP_FAIL, id));
  return sourceInfo;
}

/**
 * Determine whether the given field needs a concrete list class: this is currently the case for composite lists
 * (`$.CompositeList`) and lists of lists (`capnp.PointerList`).
 *
 * @param {s.Field} field The field to check.
 * @returns {boolean} Returns `true` if the field requires a concrete list class initializer.
 */

export function needsConcreteListClass(field: s.Field): boolean {
  if (!field.isSlot()) return false;

  const slotType = field.slot.type;

  if (!slotType.isList()) return false;

  const elementType = slotType.list.elementType;

  return elementType.isStruct() || elementType.isList();
}
