// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import ts, { factory as f } from "typescript";
import * as s from "../std/schema";
import { format } from "../util";

import {
  createClassExtends,
  createConcreteListProperty,
  createConstProperty,
  createMethod,
  createNestedNodeProperty,
  createUnionConstProperty,
  createValueExpression,
} from "./ast-creators";
import { CodeGeneratorFileContext } from "./code-generator-file-context";
import {
  BOOLEAN_TYPE,
  CAPNP,
  ConcreteListType,
  EXPORT,
  LENGTH,
  NUMBER_TYPE,
  Primitive,
  READONLY,
  STATIC,
  STRING_TYPE,
  STRUCT,
  THIS,
  TS_FILE_ID,
  VALUE,
  VOID_TYPE,
  OBJECT_SIZE,
  BIGINT,
} from "./constants";
import * as E from "./errors";
import {
  compareCodeOrder,
  getConcreteListType,
  getDisplayNamePrefix,
  getFullClassName,
  getJsType,
  getUnnamedUnionFields,
  hasNode,
  lookupNode,
  needsConcreteListClass,
} from "./file";
import * as util from "./util";

export function generateCapnpImport(ctx: CodeGeneratorFileContext): void {
  // Look for the special importPath annotation on the file to see if we need a different import path for capnp-es.

  const fileNode = lookupNode(ctx, ctx.file);
  const tsFileId = util.hexToBigInt(TS_FILE_ID);
  // This may be undefined if ts.capnp is not imported; fine, we'll just use the default.
  const tsAnnotationFile = ctx.nodes.find((n) => n.getId() === tsFileId);
  // We might not find the importPath annotation; that's definitely a bug but let's move on.
  const tsImportPathAnnotation =
    tsAnnotationFile &&
    tsAnnotationFile.getNestedNodes().find((n) => n.getName() === "importPath");
  // There may not necessarily be an import path annotation on the file node. That's fine.
  const importAnnotation =
    tsImportPathAnnotation &&
    fileNode
      .getAnnotations()
      .find((a) => a.getId() === tsImportPathAnnotation.getId());
  const importPath =
    importAnnotation === undefined
      ? "capnp-es"
      : importAnnotation.getValue().getText();

  // import * as capnp from '${importPath}';
  ctx.statements.push(
    f.createImportDeclaration(
      undefined,
      f.createImportClause(false, undefined, f.createNamespaceImport(CAPNP)),
      f.createStringLiteral(importPath),
    ),
  );

  // ctx.statements.push(
  //   f.createExpressionStatement(
  //     f.createIdentifier(
  //       `import { ObjectSize as __O, Struct as __S } from '${importPath}'`,
  //     ),
  //   ),
  // );
}

export function generateNestedImports(ctx: CodeGeneratorFileContext): void {
  for (const i of ctx.imports) {
    const name = i.getName();
    let importPath: string;

    if (name.startsWith("/capnp/")) {
      importPath = `capnp-es/std/${name.slice(7).replace(/\.capnp$/, "")}`;
    } else {
      importPath = name.replace(/\.capnp$/, ".js");
      if (importPath[0] !== ".") {
        importPath = `./${importPath}`;
      }
    }

    const imports = getImportNodes(ctx, lookupNode(ctx, i))
      .map((n) => getFullClassName(n))
      .join(", ");

    if (imports.length === 0) continue;

    const importStatement = `import { ${imports} } from "${importPath}"`;

    ctx.statements.push(
      f.createExpressionStatement(f.createIdentifier(importStatement)),
    );
  }
}

export function generateConcreteListInitializer(
  ctx: CodeGeneratorFileContext,
  fullClassName: string,
  field: s.Field,
): void {
  const left = f.createPropertyAccessExpression(
    f.createIdentifier(fullClassName),
    `_${util.c2t(field.getName())}`,
  );
  const right = f.createIdentifier(
    getConcreteListType(ctx, field.getSlot().getType()),
  );

  ctx.statements.push(
    f.createExpressionStatement(f.createAssignment(left, right)),
  );
}

export function generateDefaultValue(field: s.Field): ts.PropertyAssignment {
  const name = field.getName();
  const slot = field.getSlot();
  const whichSlotType = slot.getType().which();
  const p = Primitive[whichSlotType];
  let initializer;

  switch (whichSlotType) {
    case s.Type_Which.ANY_POINTER:
    case s.Type_Which.DATA:
    case s.Type_Which.LIST:
    case s.Type_Which.STRUCT: {
      initializer = createValueExpression(slot.getDefaultValue());

      break;
    }

    case s.Type_Which.TEXT: {
      initializer = f.createStringLiteral(slot.getDefaultValue().getText());

      break;
    }

    case s.Type_Which.BOOL: {
      initializer = f.createCallExpression(
        f.createPropertyAccessExpression(CAPNP, p.mask),
        undefined,
        [
          createValueExpression(slot.getDefaultValue()),
          f.createNumericLiteral((slot.getOffset() % 8).toString()),
        ],
      );

      break;
    }

    case s.Type_Which.ENUM:
    case s.Type_Which.FLOAT32:
    case s.Type_Which.FLOAT64:
    case s.Type_Which.INT16:
    case s.Type_Which.INT32:
    case s.Type_Which.INT64:
    case s.Type_Which.INT8:
    case s.Type_Which.UINT16:
    case s.Type_Which.UINT32:
    case s.Type_Which.UINT64:
    case s.Type_Which.UINT8: {
      initializer = f.createCallExpression(
        f.createPropertyAccessExpression(CAPNP, p.mask),
        undefined,
        [createValueExpression(slot.getDefaultValue())],
      );

      break;
    }

    default: {
      throw new Error(
        format(E.GEN_UNKNOWN_DEFAULT, s.Type_Which[whichSlotType]),
      );
    }
  }

  return f.createPropertyAssignment(`default${util.c2t(name)}`, initializer);
}

export function generateFileId(ctx: CodeGeneratorFileContext): void {
  // export const _capnpFileId = BigInt('0xabcdef');
  const fileId = f.createCallExpression(BIGINT, undefined, [
    f.createStringLiteral(`0x${ctx.file.getId().toString(16)}`),
  ]);
  ctx.statements.push(
    f.createVariableStatement(
      [EXPORT],
      f.createVariableDeclarationList(
        [
          f.createVariableDeclaration(
            "_capnpFileId",
            undefined,
            undefined,
            fileId,
          ),
        ],
        ts.NodeFlags.Const,
      ),
    ),
  );
}

export function generateInterfaceClasses(
  _ctx: CodeGeneratorFileContext,
  node: s.Node,
): void {
  console.error(
    `CAPNP-TS: Warning! Interface generation (${node.getDisplayName()}) is not yet implemented.`,
  );
}

export function generateNode(
  ctx: CodeGeneratorFileContext,
  node: s.Node,
): void {
  const nodeId = node.getId();
  const nodeIdHex = nodeId.toString(16);

  if (ctx.generatedNodeIds.includes(nodeIdHex)) return;

  ctx.generatedNodeIds.push(nodeIdHex);

  /** An array of group structs formed as children of this struct. They appear before the struct node in the file. */
  const groupNodes = ctx.nodes.filter(
    (n) =>
      n.getScopeId() === nodeId && n.isStruct() && n.getStruct().getIsGroup(),
  );
  /**
   * An array of nodes that are nested within this node; these must appear first since those symbols will be
   * referenced in the node's class definition.
   */
  const nestedNodes = node.getNestedNodes().map((n) => lookupNode(ctx, n));

  for (const n of nestedNodes) generateNode(ctx, n);
  for (const n of groupNodes) generateNode(ctx, n);

  const whichNode = node.which();

  switch (whichNode) {
    case s.Node.STRUCT: {
      generateStructNode(ctx, node, false);

      break;
    }

    case s.Node.CONST: {
      // Const nodes are generated along with the containing class, ignore these.

      break;
    }

    case s.Node.ENUM: {
      generateEnumNode(
        ctx,
        getFullClassName(node),
        node.getEnum().getEnumerants().toArray(),
      );

      break;
    }

    case s.Node.INTERFACE: {
      generateStructNode(ctx, node, true);

      break;
    }

    case s.Node.ANNOTATION: {
      break;
    }

    // case s.Node.FILE:
    default: {
      throw new Error(format(E.GEN_NODE_UNKNOWN_TYPE, s.Node_Which[whichNode]));
    }
  }
}

const listLengthParameterName = "length";

export function generateStructFieldMethods(
  ctx: CodeGeneratorFileContext,
  members: ts.ClassElement[],
  node: s.Node,
  field: s.Field,
): void {
  let jsType: string;
  let whichType: s.Type_Which | string;

  if (field.isSlot()) {
    const slotType = field.getSlot().getType();
    jsType = getJsType(ctx, slotType, false);
    whichType = slotType.which();
  } else if (field.isGroup()) {
    jsType = getFullClassName(lookupNode(ctx, field.getGroup().getTypeId()));
    whichType = "group";
  } else {
    throw new Error(format(E.GEN_UNKNOWN_STRUCT_FIELD, field.which()));
  }

  const jsTypeReference = f.createTypeReferenceNode(jsType, undefined);
  const discriminantOffset = node.getStruct().getDiscriminantOffset();
  const name = field.getName();
  const properName = util.c2t(name);
  const hadExplicitDefault =
    field.isSlot() && field.getSlot().getHadExplicitDefault();
  const discriminantValue = field.getDiscriminantValue();
  const fullClassName = getFullClassName(node);
  const union = discriminantValue !== s.Field.NO_DISCRIMINANT;
  const offset = (field.isSlot() && field.getSlot().getOffset()) || 0;
  const offsetLiteral = f.createNumericLiteral(offset.toString());
  /** __S.getPointer(0, this) */
  const getPointer = f.createCallExpression(
    f.createPropertyAccessExpression(STRUCT, "getPointer"),
    undefined,
    [offsetLiteral, THIS],
  );
  /** __S.copyFrom(value, __S.getPointer(0, this)) */
  const copyFromValue = f.createCallExpression(
    f.createPropertyAccessExpression(STRUCT, "copyFrom"),
    undefined,
    [VALUE, getPointer],
  );
  /** capnp.Orphan<Foo> */
  const orphanType = f.createTypeReferenceNode("$.Orphan", [jsTypeReference]);
  const discriminantOffsetLiteral = f.createNumericLiteral(
    (discriminantOffset * 2).toString(),
  );
  const discriminantValueLiteral = f.createNumericLiteral(
    discriminantValue.toString(),
  );
  /** __S.getUint16(0, this) */
  const getDiscriminant = f.createCallExpression(
    f.createPropertyAccessExpression(STRUCT, "getUint16"),
    undefined,
    [discriminantOffsetLiteral, THIS],
  );
  /** __S.setUint16(0, this) */
  const setDiscriminant = f.createCallExpression(
    f.createPropertyAccessExpression(STRUCT, "setUint16"),
    undefined,
    [discriminantOffsetLiteral, discriminantValueLiteral, THIS],
  );
  const defaultValue = hadExplicitDefault
    ? f.createIdentifier(`${fullClassName}._capnp.default${properName}`)
    : undefined;

  let adopt = false;
  let disown = false;
  let init;
  let has = false;
  let get;
  let set;
  let getArgs: ts.Expression[];
  let setArgs: ts.Expression[];

  switch (whichType) {
    case s.Type.ANY_POINTER: {
      getArgs = [offsetLiteral, THIS];

      if (defaultValue) {
        getArgs.push(defaultValue);
      }

      adopt = true;
      disown = true;
      /** __S.getPointer(0, this) */
      get = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "getPointer"),
        undefined,
        getArgs,
      );
      has = true;
      /** __S.copyFrom(value, __S.getPointer(0, this)) */
      set = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "copyFrom"),
        undefined,
        [VALUE, get],
      );

      break;
    }

    case s.Type.BOOL:
    case s.Type.ENUM:
    case s.Type.FLOAT32:
    case s.Type.FLOAT64:
    case s.Type.INT16:
    case s.Type.INT32:
    case s.Type.INT64:
    case s.Type.INT8:
    case s.Type.UINT16:
    case s.Type.UINT32:
    case s.Type.UINT64:
    case s.Type.UINT8: {
      const { byteLength, getter, setter } = Primitive[whichType as number];
      // NOTE: For a BOOL type this is actually a bit offset; `byteLength` will be `1` in that case.
      const byteOffset = f.createNumericLiteral(
        (offset * byteLength).toString(),
      );
      getArgs = [byteOffset, THIS];
      setArgs = [byteOffset, VALUE, THIS];

      if (defaultValue) {
        getArgs.push(defaultValue);
        setArgs.push(defaultValue);
      }

      /** __S.getXYZ(0, this) */
      get = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, getter),
        undefined,
        getArgs,
      );
      /** __S.setXYZ(0, value, this) */
      set = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, setter),
        undefined,
        setArgs,
      );

      if (whichType === s.Type.ENUM) {
        get = f.createAsExpression(get, jsTypeReference);
      }

      break;
    }
    case s.Type.DATA: {
      getArgs = [offsetLiteral, THIS];

      if (defaultValue) getArgs.push(defaultValue);

      adopt = true;
      disown = true;
      /** __S.getData(0, this) */
      get = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "getData"),
        undefined,
        getArgs,
      );
      has = true;
      /** __S.initData(0, length, this) */
      init = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "initData"),
        undefined,
        [offsetLiteral, LENGTH, THIS],
      );
      set = copyFromValue;

      break;
    }

    case s.Type.INTERFACE: {
      if (hadExplicitDefault) {
        throw new Error(
          format(E.GEN_EXPLICIT_DEFAULT_NON_PRIMITIVE, "INTERFACE"),
        );
      }

      /** __S.getPointerAs(0, Foo, this) */
      get = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "getPointerAs"),
        undefined,
        [offsetLiteral, f.createIdentifier(jsType), THIS],
      );
      set = copyFromValue;

      break;
    }

    case s.Type.LIST: {
      const whichElementType = field
        .getSlot()
        .getType()
        .getList()
        .getElementType()
        .which();
      let listClass = ConcreteListType[whichElementType];

      if (
        whichElementType === s.Type.LIST ||
        whichElementType === s.Type.STRUCT
      ) {
        listClass = `${fullClassName}._${properName}`;
      } else if (listClass === void 0) {
        /* istanbul ignore next */
        throw new Error(
          format(E.GEN_UNSUPPORTED_LIST_ELEMENT_TYPE, whichElementType),
        );
      }

      const listClassIdentifier = f.createIdentifier(listClass);

      getArgs = [offsetLiteral, listClassIdentifier, THIS];

      if (defaultValue) getArgs.push(defaultValue);

      adopt = true;
      disown = true;
      /** __S.getList(0, MyStruct._Foo, this) */
      get = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "getList"),
        undefined,
        getArgs,
      );
      if (whichElementType === s.Type.ENUM) {
        get = f.createAsExpression(get, jsTypeReference);
      }
      has = true;
      /** __S.initList(0, MyStruct._Foo, length, this) */
      init = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "initList"),
        undefined,
        [
          offsetLiteral,
          listClassIdentifier,
          f.createIdentifier(listLengthParameterName),
          THIS,
        ],
      );
      if (whichElementType === s.Type.ENUM) {
        init = f.createAsExpression(init, jsTypeReference);
      }
      set = copyFromValue;

      break;
    }
    case s.Type.STRUCT: {
      const structType = f.createIdentifier(
        getJsType(ctx, field.getSlot().getType(), false),
      );

      getArgs = [offsetLiteral, structType, THIS];

      if (defaultValue) getArgs.push(defaultValue);

      adopt = true;
      disown = true;
      /** __S.getStruct(0, Foo, this) */
      get = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "getStruct"),
        undefined,
        getArgs,
      );
      has = true;
      /** __S.initStruct(0, Foo, this) */
      init = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "initStructAt"),
        undefined,
        [offsetLiteral, structType, THIS],
      );
      set = copyFromValue;

      break;
    }
    case s.Type.TEXT: {
      getArgs = [offsetLiteral, THIS];

      if (defaultValue) getArgs.push(defaultValue);

      /** __S.getText(0, this) */
      get = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "getText"),
        undefined,
        getArgs,
      );
      /** __S.setText(0, value, this) */
      set = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "setText"),
        undefined,
        [offsetLiteral, VALUE, THIS],
      );

      break;
    }

    case s.Type.VOID: {
      break;
    }

    case "group": {
      if (hadExplicitDefault) {
        throw new Error(format(E.GEN_EXPLICIT_DEFAULT_NON_PRIMITIVE, "group"));
      }

      const groupType = f.createIdentifier(jsType);

      /** __S.getAs(Foo, this); */
      get = f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "getAs"),
        undefined,
        [groupType, THIS],
      );
      init = get;

      break;
    }
    default: {
      // TODO Maybe this should be an error?

      break;
    }
  }

  // adoptFoo(value: capnp.Orphan<Foo>): void { __S.adopt(value, this._getPointer(3)); }}
  if (adopt) {
    const parameters = [
      f.createParameterDeclaration(
        undefined,
        undefined,
        VALUE,
        undefined,
        orphanType,
        undefined,
      ),
    ];
    const expressions = [
      f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "adopt"),
        undefined,
        [VALUE, getPointer],
      ),
    ];

    if (union) expressions.unshift(setDiscriminant);

    members.push(
      createMethod(`adopt${properName}`, parameters, VOID_TYPE, expressions),
    );
  }

  // disownFoo(): capnp.Orphan<Foo> { return __S.disown(this.getFoo()); }
  if (disown) {
    const getter = f.createCallExpression(
      f.createPropertyAccessExpression(THIS, `get${properName}`),
      undefined,
      [],
    );
    const expressions = [
      f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "disown"),
        undefined,
        [getter],
      ),
    ];

    members.push(
      createMethod(`disown${properName}`, [], orphanType, expressions),
    );
  }

  // getFoo(): FooType { ... }
  if (get) {
    const expressions = [get];

    if (union) {
      expressions.unshift(
        f.createCallExpression(
          f.createPropertyAccessExpression(STRUCT, "testWhich"),
          undefined,
          [
            f.createStringLiteral(name),
            getDiscriminant,
            discriminantValueLiteral,
            THIS,
          ],
        ),
      );
    }

    members.push(
      createMethod(`get${properName}`, [], jsTypeReference, expressions),
    );
  }

  // hasFoo(): boolean { ... }
  if (has) {
    // !__S.isNull(this._getPointer(8));
    const expressions = [
      f.createLogicalNot(
        f.createCallExpression(
          f.createPropertyAccessExpression(STRUCT, "isNull"),
          undefined,
          [getPointer],
        ),
      ),
    ];

    members.push(
      createMethod(`has${properName}`, [], BOOLEAN_TYPE, expressions),
    );
  }

  // initFoo(): FooType { ... } / initFoo(length: number): $.List<FooElementType> { ... }
  if (init) {
    const parameters =
      whichType === s.Type.DATA || whichType === s.Type.LIST
        ? [
            f.createParameterDeclaration(
              undefined,
              undefined,
              listLengthParameterName,
              undefined,
              NUMBER_TYPE,
              undefined,
            ),
          ]
        : [];
    const expressions = [init];

    if (union) expressions.unshift(setDiscriminant);

    members.push(
      createMethod(
        `init${properName}`,
        parameters,
        jsTypeReference,
        expressions,
      ),
    );
  }

  // isFoo(): boolean { ... }
  if (union) {
    const left = f.createCallExpression(
      f.createPropertyAccessExpression(STRUCT, "getUint16"),
      undefined,
      [discriminantOffsetLiteral, THIS],
    );
    const right = discriminantValueLiteral;
    const expressions = [
      f.createBinaryExpression(
        left,
        ts.SyntaxKind.EqualsEqualsEqualsToken,
        right,
      ),
    ];

    members.push(
      createMethod(`is${properName}`, [], BOOLEAN_TYPE, expressions),
    );
  }

  // setFoo(value: FooType): void { ... }
  if (set || union) {
    const expressions = [];
    const parameters = [];

    if (set) {
      expressions.unshift(set);

      parameters.unshift(
        f.createParameterDeclaration(
          undefined,
          undefined,
          VALUE,
          undefined,
          jsTypeReference,
          undefined,
        ),
      );
    }

    if (union) {
      expressions.unshift(setDiscriminant);
    }

    members.push(
      createMethod(`set${properName}`, parameters, VOID_TYPE, expressions),
    );
  }
}

export function generateStructNode(
  ctx: CodeGeneratorFileContext,
  node: s.Node,
  interfaceNode: boolean,
): void {
  const displayNamePrefix = getDisplayNamePrefix(node);
  const fullClassName = getFullClassName(node);
  const nestedNodes = node
    .getNestedNodes()
    .map((n) => lookupNode(ctx, n))
    .filter((n) => !n.isConst() && !n.isAnnotation());
  const nodeId = node.getId();
  const nodeIdHex = nodeId.toString(16);
  const struct = node.which() === s.Node.STRUCT ? node.getStruct() : undefined;
  const unionFields = getUnnamedUnionFields(node).sort(compareCodeOrder);

  const dataWordCount = struct ? struct.getDataWordCount() : 0;
  const dataByteLength = struct ? dataWordCount * 8 : 0;
  const discriminantCount = struct ? struct.getDiscriminantCount() : 0;
  const discriminantOffset = struct ? struct.getDiscriminantOffset() : 0;
  const fields = struct
    ? struct.getFields().toArray().sort(compareCodeOrder)
    : [];
  const pointerCount = struct ? struct.getPointerCount() : 0;

  const concreteLists = fields
    .filter((f) => needsConcreteListClass(f))
    .sort(compareCodeOrder);
  const consts = ctx.nodes.filter(
    (n) => n.getScopeId() === nodeId && n.isConst(),
  );
  // const groups = ctx.nodes.filter(
  //   (n) => n.getScopeId().equals(nodeId) && n.isStruct() && n.getStruct().getIsGroup());
  const hasUnnamedUnion = discriminantCount !== 0;

  if (hasUnnamedUnion) {
    generateEnumNode(ctx, fullClassName + "_Which", unionFields);
  }

  const members: ts.ClassElement[] = [];

  // static readonly CONSTANT = 'foo';
  members.push(...consts.map((n) => createConstProperty(n)));

  // static readonly WHICH = MyStruct_Which.WHICH;
  members.push(
    ...unionFields.map((f) => createUnionConstProperty(fullClassName, f)),
  );

  // static readonly NestedStruct = MyStruct_NestedStruct;
  members.push(...nestedNodes.map((n) => createNestedNodeProperty(n)));

  // static readonly Client = MyInterface_Client;
  // static readonly Server = MyInterface_Server;
  // if (interfaceNode) {

  //   members.push(
  //     f.createPropertyDeclaration(undefined, [STATIC, READONLY], 'Client', undefined, undefined, f.createStringLiteral(`${fullClassName}_Client`)));
  //   members.push(
  //     f.createPropertyDeclaration(undefined, [STATIC, READONLY], 'Server', undefined, undefined, f.createStringLiteral(`${fullClassName}_Server`)));

  // }

  // eslint-disable-next-line unicorn/no-array-reduce
  const defaultValues = fields.reduce(
    (acc, f) =>
      f.isSlot() &&
      f.getSlot().getHadExplicitDefault() &&
      f.getSlot().getType().which() !== s.Type.VOID
        ? [...acc, generateDefaultValue(f)]
        : acc,
    [] as ts.PropertyAssignment[],
  );

  // static reaodnly _capnp = { displayName: 'MyStruct', id: '4732bab4310f81', size = new undefinedO(8, 8) };
  members.push(
    f.createPropertyDeclaration(
      [STATIC, READONLY],
      "_capnp",
      undefined,
      undefined,
      f.createObjectLiteralExpression(
        [
          f.createPropertyAssignment(
            "displayName",
            f.createStringLiteral(displayNamePrefix),
          ),
          f.createPropertyAssignment("id", f.createStringLiteral(nodeIdHex)),
          f.createPropertyAssignment(
            "size",
            f.createNewExpression(OBJECT_SIZE, undefined, [
              f.createNumericLiteral(dataByteLength.toString()),
              f.createNumericLiteral(pointerCount.toString()),
            ]),
          ),
          ...defaultValues,
        ],
        true,
      ),
    ),
  );

  // private static _ConcreteListClass: MyStruct_ConcreteListClass;
  members.push(...concreteLists.map((f) => createConcreteListProperty(ctx, f)));

  // getFoo() { ... } initFoo() { ... } setFoo() { ... }
  for (const f of fields) {
    generateStructFieldMethods(ctx, members, node, f);
  }

  // toString(): string { return 'MyStruct_' + super.toString(); }
  const toStringExpression = f.createBinaryExpression(
    f.createStringLiteral(`${fullClassName}_`),
    ts.SyntaxKind.PlusToken,
    f.createCallExpression(f.createIdentifier("super.toString"), undefined, []),
  );
  members.push(createMethod("toString", [], STRING_TYPE, [toStringExpression]));

  if (hasUnnamedUnion) {
    // which(): MyStruct_Which { return __S.getUint16(12, this); }
    const whichExpression = f.createAsExpression(
      f.createCallExpression(
        f.createPropertyAccessExpression(STRUCT, "getUint16"),
        undefined,
        [f.createNumericLiteral((discriminantOffset * 2).toString()), THIS],
      ),
      f.createTypeReferenceNode(`${fullClassName}_Which`, undefined),
    );
    members.push(
      createMethod(
        "which",
        [],
        f.createTypeReferenceNode(`${fullClassName}_Which`, undefined),
        [whichExpression],
      ),
    );
  }

  const c = f.createClassDeclaration(
    [EXPORT],
    fullClassName,
    undefined,
    [createClassExtends(STRUCT.escapedText!)],
    members,
  );

  // Make sure the interface classes are generated first.

  if (interfaceNode) {
    generateInterfaceClasses(ctx, node);
  }

  ctx.statements.push(c);

  // Write out the concrete list type initializer after all the class definitions. It can't be initialized within the
  // class's static initializer because the nested type might not be defined yet.
  // FIXME: This might be solvable with topological sorting?

  ctx.concreteLists.push(
    ...concreteLists.map<[string, s.Field]>((f) => [fullClassName, f]),
  );
}

export function generateEnumNode(
  ctx: CodeGeneratorFileContext,
  className: string,
  fields: s.Enumerant[] | s.Field[],
): void {
  const members = fields.sort(compareCodeOrder).map((e, index) => {
    const key = f.createIdentifier(util.c2s(e.getName()));
    const val = f.createNumericLiteral(index.toString());
    return f.createPropertyAssignment(key, val);
  });

  // export const MyEnum = { FOO: 1, BAR: 2 } as const
  const d = f.createVariableStatement(
    [EXPORT],
    f.createVariableDeclarationList(
      [
        f.createVariableDeclaration(
          className,
          undefined,
          undefined,
          f.createAsExpression(
            f.createObjectLiteralExpression(members, true),
            f.createTypeReferenceNode("const", undefined),
          ),
        ),
      ],
      ts.NodeFlags.Const,
    ),
  );

  // export type MyEnum = (typeof MyEnum)[keyof typeof MyEnum]
  const t = f.createTypeAliasDeclaration(
    [EXPORT],
    className,
    undefined,
    f.createIndexedAccessTypeNode(
      f.createTypeQueryNode(f.createIdentifier(className)),
      f.createTypeOperatorNode(
        ts.SyntaxKind.KeyOfKeyword,
        f.createTypeQueryNode(f.createIdentifier(className)),
      ),
    ),
  );

  ctx.statements.push(d, t);
}

export function getImportNodes(
  ctx: CodeGeneratorFileContext,
  node: s.Node,
): s.Node[] {
  return (
    lookupNode(ctx, node)
      .getNestedNodes()
      .filter((n) => hasNode(ctx, n))
      .map((n) => lookupNode(ctx, n))
      // eslint-disable-next-line unicorn/no-array-reduce
      .reduce(
        (a, n) => [...a, n, ...getImportNodes(ctx, n)],
        new Array<s.Node>(),
      )
      .filter(
        (n) => lookupNode(ctx, n).isStruct() || lookupNode(ctx, n).isEnum(),
      )
  );
}
