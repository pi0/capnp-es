// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import ts, { factory as f } from "typescript";
import * as s from "../capnp/schema";
import * as capnp from "..";
import { format, pad } from "../util";
import { CodeGeneratorFileContext } from "./code-generator-file-context";
import { READONLY, STATIC, VOID_TYPE, CAPNP } from "./constants";
import * as E from "./errors";
import { getDisplayNamePrefix, getFullClassName, getJsType } from "./file";
import * as util from "./util";

export function createClassExtends(identifierText: string): ts.HeritageClause {
  const types = [
    f.createExpressionWithTypeArguments(f.createIdentifier(identifierText), []),
  ];
  return f.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, types);
}

export function createConcreteListProperty(
  ctx: CodeGeneratorFileContext,
  field: s.Field,
): ts.PropertyDeclaration {
  const name = `_${util.c2t(field.name)}`;
  const type = f.createTypeReferenceNode(getJsType(ctx, field.slot.type, true));
  let u: ts.Expression | undefined;
  return f.createPropertyDeclaration(
    [STATIC],
    name,
    undefined,
    type,
    u as ts.Expression,
  );
}

export function createConstProperty(node: s.Node): ts.PropertyDeclaration {
  const name = util.c2s(getDisplayNamePrefix(node));
  const initializer = createValueExpression(node.const.value);

  return f.createPropertyDeclaration(
    [STATIC, READONLY],
    name,
    undefined,
    undefined,
    initializer,
  );
}

export function createExpressionBlock(
  expressions: ts.Expression[],
  returns: boolean,
  allowSingleLine?: boolean,
): ts.Block {
  const statements = expressions.map((e, i) =>
    i === expressions.length - 1 && returns
      ? f.createReturnStatement(e)
      : f.createExpressionStatement(e),
  );

  return f.createBlock(
    statements,
    !(allowSingleLine && expressions.length < 2),
  );
}

export function createMethod(
  name: string,
  parameters: ts.ParameterDeclaration[],
  type: ts.TypeNode | undefined,
  expressions: ts.Expression[],
  allowSingleLine?: boolean,
): ts.MethodDeclaration {
  return f.createMethodDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    undefined,
    parameters,
    type,
    createExpressionBlock(expressions, type !== VOID_TYPE, allowSingleLine),
  );
}

export function createNestedNodeProperty(node: s.Node): ts.PropertyDeclaration {
  const name = getDisplayNamePrefix(node);
  const initializer = f.createIdentifier(getFullClassName(node));
  return f.createPropertyDeclaration(
    [STATIC, READONLY],
    name,
    undefined,
    undefined,
    initializer,
  );
}

export function createUnionConstProperty(
  fullClassName: string,
  field: s.Field,
): ts.PropertyDeclaration {
  const name = util.c2s(field.name);
  const initializer = f.createPropertyAccessExpression(
    f.createIdentifier(`${fullClassName}_Which`),
    name,
  );

  return f.createPropertyDeclaration(
    [STATIC, READONLY],
    name,
    undefined,
    undefined,
    initializer,
  );
}

export function createValueExpression(value: s.Value): ts.Expression {
  let p: capnp.Pointer;

  switch (value.which()) {
    case s.Value.BOOL: {
      return value.bool ? f.createTrue() : f.createFalse();
    }

    case s.Value.ENUM: {
      return f.createNumericLiteral(value.enum.toString());
    }

    case s.Value.FLOAT32: {
      return numericExpression(value.float32);
    }

    case s.Value.FLOAT64: {
      return numericExpression(value.float64);
    }

    case s.Value.INT8: {
      return numericExpression(value.int8);
    }

    case s.Value.INT16: {
      return numericExpression(value.int16);
    }

    case s.Value.INT32: {
      return numericExpression(value.int32);
    }

    case s.Value.INT64: {
      return createBigIntExpression(value.int64);
    }

    case s.Value.TEXT: {
      return f.createStringLiteral(value.text);
    }

    case s.Value.UINT16: {
      return f.createNumericLiteral(value.uint16.toString());
    }

    case s.Value.UINT32: {
      return f.createNumericLiteral(value.uint32.toString());
    }

    case s.Value.UINT64: {
      return createBigIntExpression(value.uint64);
    }
    case s.Value.UINT8: {
      return f.createNumericLiteral(value.uint8.toString());
    }

    case s.Value.VOID: {
      return f.createIdentifier("undefined");
    }

    case s.Value.ANY_POINTER: {
      p = value.anyPointer;

      break;
    }

    case s.Value.DATA: {
      p = value.data;

      break;
    }

    case s.Value.LIST: {
      p = value.list;

      break;
    }

    case s.Value.STRUCT: {
      p = value.struct;

      break;
    }

    case s.Value.INTERFACE: {
      capnp.Struct.testWhich(
        "interface",
        capnp.Struct.getUint16(0, value),
        17,
        value,
      );
      p = capnp.Struct.getPointer(0, value);

      break;
    }
    default: {
      throw new Error(
        format(
          E.GEN_SERIALIZE_UNKNOWN_VALUE,
          value.which() /* s.Value_Which[value.which()] */,
        ), // TODO
      );
    }
  }

  const m = new capnp.Message();
  m.setRoot(p);

  const buf = new Uint8Array(m.toPackedArrayBuffer());
  const bytes = Array.from({
    length: buf.byteLength,
  }) as Array<ts.NumericLiteral>;

  for (let i = 0; i < buf.byteLength; i++) {
    bytes[i] = f.createNumericLiteral(`0x${pad(buf[i].toString(16), 2)}`);
  }

  return f.createCallExpression(
    f.createPropertyAccessExpression(CAPNP, "readRawPointer"),
    undefined,
    [
      f.createPropertyAccessExpression(
        f.createNewExpression(f.createIdentifier("Uint8Array"), undefined, [
          f.createArrayLiteralExpression(bytes, false),
        ]),
        "buffer",
      ),
    ],
  );
}

export function createBigIntExpression(value: bigint): ts.Expression {
  let v = value.toString(16);
  let neg = "";
  if (v[0] === "-") {
    v = v.slice(1);
    neg = "-";
  }
  return f.createCallExpression(f.createIdentifier(`${neg}BigInt`), undefined, [
    f.createStringLiteral(`0x${v}`),
  ]);
}

function numericExpression(
  value: number,
): ts.NumericLiteral | ts.PrefixUnaryExpression {
  return value < 0
    ? f.createPrefixUnaryExpression(
        ts.SyntaxKind.MinusToken,
        f.createNumericLiteral(-1 * value),
      )
    : f.createNumericLiteral(value);
}
