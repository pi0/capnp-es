// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import * as s from "../std/schema";
import { format } from "../util";

import { CodeGeneratorFileContext } from "./code-generator-file-context";
import { ConcreteListType } from "./constants";
import * as E from "./errors";
import * as util from "./util";

export function compareCodeOrder(
  a: { getCodeOrder(): number },
  b: { getCodeOrder(): number },
): number {
  return a.getCodeOrder() - b.getCodeOrder();
}

export function getConcreteListType(
  ctx: CodeGeneratorFileContext,
  type: s.Type,
): string {
  if (!type.isList()) return getJsType(ctx, type, false);

  const elementType = type.getList().getElementType();
  const elementTypeWhich = elementType.which();

  if (elementTypeWhich === s.Type.LIST) {
    return `$.PointerList(${getConcreteListType(ctx, elementType)})`;
  } else if (elementTypeWhich === s.Type.STRUCT) {
    const structNode = lookupNode(ctx, elementType.getStruct().getTypeId());

    if (
      structNode.getStruct().getPreferredListEncoding() !==
      s.ElementSize.INLINE_COMPOSITE
    ) {
      throw new Error(E.GEN_FIELD_NON_INLINE_STRUCT_LIST);
    }

    return `$.CompositeList(${getJsType(ctx, elementType, false)})`;
  }

  return ConcreteListType[elementTypeWhich];
}

export function getDisplayNamePrefix(node: s.Node): string {
  return node.getDisplayName().slice(node.getDisplayNamePrefixLength());
}

export function getFullClassName(node: s.Node): string {
  return node
    .getDisplayName()
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
      return getFullClassName(lookupNode(ctx, type.getEnum().getTypeId()));
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
      return "$.Interface";
    }

    case s.Type.LIST: {
      return `$.List${constructor ? "Ctor" : ""}<${getJsType(ctx, type.getList().getElementType(), false)}>`;
    }

    case s.Type.STRUCT: {
      const c = getFullClassName(lookupNode(ctx, type.getStruct().getTypeId()));

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

  return node
    .getStruct()
    .getFields()
    .filter((f) => f.getDiscriminantValue() !== s.Field.NO_DISCRIMINANT);
}

export function hasNode(
  ctx: CodeGeneratorFileContext,
  lookup: { getId(): bigint } | bigint,
): boolean {
  const id = typeof lookup === "bigint" ? lookup : lookup.getId();

  return ctx.nodes.some((n) => n.getId() === id);
}

export function loadRequestedFile(
  req: s.CodeGeneratorRequest,
  file: s.CodeGeneratorRequest_RequestedFile,
): CodeGeneratorFileContext {
  const ctx = new CodeGeneratorFileContext(req, file);

  const schema = lookupNode(ctx, file.getId());

  ctx.tsPath = schema.getDisplayName().replace(/\.capnp$/, "") + ".ts";

  return ctx;
}

export function lookupNode(
  ctx: CodeGeneratorFileContext,
  lookup: { getId(): bigint } | bigint,
): s.Node {
  const id = typeof lookup === "bigint" ? lookup : lookup.getId();
  const node = ctx.nodes.find((n) => n.getId() === id);

  if (node === undefined) throw new Error(format(E.GEN_NODE_LOOKUP_FAIL, id));

  return node;
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

  const slotType = field.getSlot().getType();

  if (!slotType.isList()) return false;

  const elementType = slotType.getList().getElementType();

  return elementType.isStruct() || elementType.isList();
}
