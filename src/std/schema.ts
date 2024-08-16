// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import * as capnp from "../serialization";

export const _capnpFileId = "d9724c6209c53fa9";

export class Node_Parameter extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Parameter",
    id: "b9521bccf10fa3b1",
    size: new capnp.ObjectSize(0, 1),
  };
  getName(): string {
    return capnp.Struct.getText(0, this);
  }
  setName(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  toString(): string {
    return "Node_Parameter_" + super.toString();
  }
}

export class Node_NestedNode extends capnp.Struct {
  static readonly _capnp = {
    displayName: "NestedNode",
    id: "debf55bbfa0fc242",
    size: new capnp.ObjectSize(8, 1),
  };
  getName(): string {
    return capnp.Struct.getText(0, this);
  }
  setName(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  getId(): bigint {
    return capnp.Struct.getUint64(0, this);
  }
  setId(value: bigint): void {
    capnp.Struct.setUint64(0, value, this);
  }
  toString(): string {
    return "Node_NestedNode_" + super.toString();
  }
}

export class Node_Struct extends capnp.Struct {
  static readonly _capnp = {
    displayName: "struct",
    id: "9ea0b19b37fb4435",
    size: new capnp.ObjectSize(40, 6),
  };
  static _Fields: capnp.ListCtor<Field>;
  getDataWordCount(): number {
    return capnp.Struct.getUint16(14, this);
  }
  setDataWordCount(value: number): void {
    capnp.Struct.setUint16(14, value, this);
  }
  getPointerCount(): number {
    return capnp.Struct.getUint16(24, this);
  }
  setPointerCount(value: number): void {
    capnp.Struct.setUint16(24, value, this);
  }
  getPreferredListEncoding(): ElementSize {
    return capnp.Struct.getUint16(26, this);
  }
  setPreferredListEncoding(value: ElementSize): void {
    capnp.Struct.setUint16(26, value, this);
  }
  getIsGroup(): boolean {
    return capnp.Struct.getBit(224, this);
  }
  setIsGroup(value: boolean): void {
    capnp.Struct.setBit(224, value, this);
  }
  getDiscriminantCount(): number {
    return capnp.Struct.getUint16(30, this);
  }
  setDiscriminantCount(value: number): void {
    capnp.Struct.setUint16(30, value, this);
  }
  getDiscriminantOffset(): number {
    return capnp.Struct.getUint32(32, this);
  }
  setDiscriminantOffset(value: number): void {
    capnp.Struct.setUint32(32, value, this);
  }
  adoptFields(value: capnp.Orphan<capnp.List<Field>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(3, this));
  }
  disownFields(): capnp.Orphan<capnp.List<Field>> {
    return capnp.Struct.disown(this.getFields());
  }
  getFields(): capnp.List<Field> {
    return capnp.Struct.getList(3, Node_Struct._Fields, this);
  }
  hasFields(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(3, this));
  }
  initFields(length: number): capnp.List<Field> {
    return capnp.Struct.initList(3, Node_Struct._Fields, length, this);
  }
  setFields(value: capnp.List<Field>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(3, this));
  }
  toString(): string {
    return "Node_Struct_" + super.toString();
  }
}

export class Node_Enum extends capnp.Struct {
  static readonly _capnp = {
    displayName: "enum",
    id: "b54ab3364333f598",
    size: new capnp.ObjectSize(40, 6),
  };
  static _Enumerants: capnp.ListCtor<Enumerant>;
  adoptEnumerants(value: capnp.Orphan<capnp.List<Enumerant>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(3, this));
  }
  disownEnumerants(): capnp.Orphan<capnp.List<Enumerant>> {
    return capnp.Struct.disown(this.getEnumerants());
  }
  getEnumerants(): capnp.List<Enumerant> {
    return capnp.Struct.getList(3, Node_Enum._Enumerants, this);
  }
  hasEnumerants(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(3, this));
  }
  initEnumerants(length: number): capnp.List<Enumerant> {
    return capnp.Struct.initList(3, Node_Enum._Enumerants, length, this);
  }
  setEnumerants(value: capnp.List<Enumerant>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(3, this));
  }
  toString(): string {
    return "Node_Enum_" + super.toString();
  }
}

export class Node_Interface extends capnp.Struct {
  static readonly _capnp = {
    displayName: "interface",
    id: "e82753cff0c2218f",
    size: new capnp.ObjectSize(40, 6),
  };
  static _Methods: capnp.ListCtor<Method>;
  static _Superclasses: capnp.ListCtor<Superclass>;
  adoptMethods(value: capnp.Orphan<capnp.List<Method>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(3, this));
  }
  disownMethods(): capnp.Orphan<capnp.List<Method>> {
    return capnp.Struct.disown(this.getMethods());
  }
  getMethods(): capnp.List<Method> {
    return capnp.Struct.getList(3, Node_Interface._Methods, this);
  }
  hasMethods(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(3, this));
  }
  initMethods(length: number): capnp.List<Method> {
    return capnp.Struct.initList(3, Node_Interface._Methods, length, this);
  }
  setMethods(value: capnp.List<Method>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(3, this));
  }
  adoptSuperclasses(value: capnp.Orphan<capnp.List<Superclass>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(4, this));
  }
  disownSuperclasses(): capnp.Orphan<capnp.List<Superclass>> {
    return capnp.Struct.disown(this.getSuperclasses());
  }
  getSuperclasses(): capnp.List<Superclass> {
    return capnp.Struct.getList(4, Node_Interface._Superclasses, this);
  }
  hasSuperclasses(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(4, this));
  }
  initSuperclasses(length: number): capnp.List<Superclass> {
    return capnp.Struct.initList(4, Node_Interface._Superclasses, length, this);
  }
  setSuperclasses(value: capnp.List<Superclass>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(4, this));
  }
  toString(): string {
    return "Node_Interface_" + super.toString();
  }
}

export class Node_Const extends capnp.Struct {
  static readonly _capnp = {
    displayName: "const",
    id: "b18aa5ac7a0d9420",
    size: new capnp.ObjectSize(40, 6),
  };
  adoptType(value: capnp.Orphan<Type>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(3, this));
  }
  disownType(): capnp.Orphan<Type> {
    return capnp.Struct.disown(this.getType());
  }
  getType(): Type {
    return capnp.Struct.getStruct(3, Type, this);
  }
  hasType(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(3, this));
  }
  initType(): Type {
    return capnp.Struct.initStructAt(3, Type, this);
  }
  setType(value: Type): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(3, this));
  }
  adoptValue(value: capnp.Orphan<Value>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(4, this));
  }
  disownValue(): capnp.Orphan<Value> {
    return capnp.Struct.disown(this.getValue());
  }
  getValue(): Value {
    return capnp.Struct.getStruct(4, Value, this);
  }
  hasValue(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(4, this));
  }
  initValue(): Value {
    return capnp.Struct.initStructAt(4, Value, this);
  }
  setValue(value: Value): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(4, this));
  }
  toString(): string {
    return "Node_Const_" + super.toString();
  }
}

export class Node_Annotation extends capnp.Struct {
  static readonly _capnp = {
    displayName: "annotation",
    id: "ec1619d4400a0290",
    size: new capnp.ObjectSize(40, 6),
  };
  adoptType(value: capnp.Orphan<Type>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(3, this));
  }
  disownType(): capnp.Orphan<Type> {
    return capnp.Struct.disown(this.getType());
  }
  getType(): Type {
    return capnp.Struct.getStruct(3, Type, this);
  }
  hasType(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(3, this));
  }
  initType(): Type {
    return capnp.Struct.initStructAt(3, Type, this);
  }
  setType(value: Type): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(3, this));
  }
  getTargetsFile(): boolean {
    return capnp.Struct.getBit(112, this);
  }
  setTargetsFile(value: boolean): void {
    capnp.Struct.setBit(112, value, this);
  }
  getTargetsConst(): boolean {
    return capnp.Struct.getBit(113, this);
  }
  setTargetsConst(value: boolean): void {
    capnp.Struct.setBit(113, value, this);
  }
  getTargetsEnum(): boolean {
    return capnp.Struct.getBit(114, this);
  }
  setTargetsEnum(value: boolean): void {
    capnp.Struct.setBit(114, value, this);
  }
  getTargetsEnumerant(): boolean {
    return capnp.Struct.getBit(115, this);
  }
  setTargetsEnumerant(value: boolean): void {
    capnp.Struct.setBit(115, value, this);
  }
  getTargetsStruct(): boolean {
    return capnp.Struct.getBit(116, this);
  }
  setTargetsStruct(value: boolean): void {
    capnp.Struct.setBit(116, value, this);
  }
  getTargetsField(): boolean {
    return capnp.Struct.getBit(117, this);
  }
  setTargetsField(value: boolean): void {
    capnp.Struct.setBit(117, value, this);
  }
  getTargetsUnion(): boolean {
    return capnp.Struct.getBit(118, this);
  }
  setTargetsUnion(value: boolean): void {
    capnp.Struct.setBit(118, value, this);
  }
  getTargetsGroup(): boolean {
    return capnp.Struct.getBit(119, this);
  }
  setTargetsGroup(value: boolean): void {
    capnp.Struct.setBit(119, value, this);
  }
  getTargetsInterface(): boolean {
    return capnp.Struct.getBit(120, this);
  }
  setTargetsInterface(value: boolean): void {
    capnp.Struct.setBit(120, value, this);
  }
  getTargetsMethod(): boolean {
    return capnp.Struct.getBit(121, this);
  }
  setTargetsMethod(value: boolean): void {
    capnp.Struct.setBit(121, value, this);
  }
  getTargetsParam(): boolean {
    return capnp.Struct.getBit(122, this);
  }
  setTargetsParam(value: boolean): void {
    capnp.Struct.setBit(122, value, this);
  }
  getTargetsAnnotation(): boolean {
    return capnp.Struct.getBit(123, this);
  }
  setTargetsAnnotation(value: boolean): void {
    capnp.Struct.setBit(123, value, this);
  }
  toString(): string {
    return "Node_Annotation_" + super.toString();
  }
}

export enum Node_Which {
  FILE = 0,
  STRUCT = 1,
  ENUM = 2,
  INTERFACE = 3,
  CONST = 4,
  ANNOTATION = 5,
}

export class Node extends capnp.Struct {
  static readonly FILE = Node_Which.FILE;
  static readonly STRUCT = Node_Which.STRUCT;
  static readonly ENUM = Node_Which.ENUM;
  static readonly INTERFACE = Node_Which.INTERFACE;
  static readonly CONST = Node_Which.CONST;
  static readonly ANNOTATION = Node_Which.ANNOTATION;
  static readonly Parameter = Node_Parameter;
  static readonly NestedNode = Node_NestedNode;
  static readonly _capnp = {
    displayName: "Node",
    id: "e682ab4cf923a417",
    size: new capnp.ObjectSize(40, 6),
  };
  static _Parameters: capnp.ListCtor<Node_Parameter>;
  static _NestedNodes: capnp.ListCtor<Node_NestedNode>;
  static _Annotations: capnp.ListCtor<Annotation>;
  getId(): bigint {
    return capnp.Struct.getUint64(0, this);
  }
  setId(value: bigint): void {
    capnp.Struct.setUint64(0, value, this);
  }
  getDisplayName(): string {
    return capnp.Struct.getText(0, this);
  }
  setDisplayName(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  getDisplayNamePrefixLength(): number {
    return capnp.Struct.getUint32(8, this);
  }
  setDisplayNamePrefixLength(value: number): void {
    capnp.Struct.setUint32(8, value, this);
  }
  getScopeId(): bigint {
    return capnp.Struct.getUint64(16, this);
  }
  setScopeId(value: bigint): void {
    capnp.Struct.setUint64(16, value, this);
  }
  adoptParameters(value: capnp.Orphan<capnp.List<Node_Parameter>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(5, this));
  }
  disownParameters(): capnp.Orphan<capnp.List<Node_Parameter>> {
    return capnp.Struct.disown(this.getParameters());
  }
  getParameters(): capnp.List<Node_Parameter> {
    return capnp.Struct.getList(5, Node._Parameters, this);
  }
  hasParameters(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(5, this));
  }
  initParameters(length: number): capnp.List<Node_Parameter> {
    return capnp.Struct.initList(5, Node._Parameters, length, this);
  }
  setParameters(value: capnp.List<Node_Parameter>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(5, this));
  }
  getIsGeneric(): boolean {
    return capnp.Struct.getBit(288, this);
  }
  setIsGeneric(value: boolean): void {
    capnp.Struct.setBit(288, value, this);
  }
  adoptNestedNodes(value: capnp.Orphan<capnp.List<Node_NestedNode>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownNestedNodes(): capnp.Orphan<capnp.List<Node_NestedNode>> {
    return capnp.Struct.disown(this.getNestedNodes());
  }
  getNestedNodes(): capnp.List<Node_NestedNode> {
    return capnp.Struct.getList(1, Node._NestedNodes, this);
  }
  hasNestedNodes(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  initNestedNodes(length: number): capnp.List<Node_NestedNode> {
    return capnp.Struct.initList(1, Node._NestedNodes, length, this);
  }
  setNestedNodes(value: capnp.List<Node_NestedNode>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  adoptAnnotations(value: capnp.Orphan<capnp.List<Annotation>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(2, this));
  }
  disownAnnotations(): capnp.Orphan<capnp.List<Annotation>> {
    return capnp.Struct.disown(this.getAnnotations());
  }
  getAnnotations(): capnp.List<Annotation> {
    return capnp.Struct.getList(2, Node._Annotations, this);
  }
  hasAnnotations(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(2, this));
  }
  initAnnotations(length: number): capnp.List<Annotation> {
    return capnp.Struct.initList(2, Node._Annotations, length, this);
  }
  setAnnotations(value: capnp.List<Annotation>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(2, this));
  }
  isFile(): boolean {
    return capnp.Struct.getUint16(12, this) === 0;
  }
  setFile(): void {
    capnp.Struct.setUint16(12, 0, this);
  }
  getStruct(): Node_Struct {
    capnp.Struct.testWhich("struct", capnp.Struct.getUint16(12, this), 1, this);
    return capnp.Struct.getAs(Node_Struct, this);
  }
  initStruct(): Node_Struct {
    capnp.Struct.setUint16(12, 1, this);
    return capnp.Struct.getAs(Node_Struct, this);
  }
  isStruct(): boolean {
    return capnp.Struct.getUint16(12, this) === 1;
  }
  setStruct(): void {
    capnp.Struct.setUint16(12, 1, this);
  }
  getEnum(): Node_Enum {
    capnp.Struct.testWhich("enum", capnp.Struct.getUint16(12, this), 2, this);
    return capnp.Struct.getAs(Node_Enum, this);
  }
  initEnum(): Node_Enum {
    capnp.Struct.setUint16(12, 2, this);
    return capnp.Struct.getAs(Node_Enum, this);
  }
  isEnum(): boolean {
    return capnp.Struct.getUint16(12, this) === 2;
  }
  setEnum(): void {
    capnp.Struct.setUint16(12, 2, this);
  }
  getInterface(): Node_Interface {
    capnp.Struct.testWhich(
      "interface",
      capnp.Struct.getUint16(12, this),
      3,
      this,
    );
    return capnp.Struct.getAs(Node_Interface, this);
  }
  initInterface(): Node_Interface {
    capnp.Struct.setUint16(12, 3, this);
    return capnp.Struct.getAs(Node_Interface, this);
  }
  isInterface(): boolean {
    return capnp.Struct.getUint16(12, this) === 3;
  }
  setInterface(): void {
    capnp.Struct.setUint16(12, 3, this);
  }
  getConst(): Node_Const {
    capnp.Struct.testWhich("const", capnp.Struct.getUint16(12, this), 4, this);
    return capnp.Struct.getAs(Node_Const, this);
  }
  initConst(): Node_Const {
    capnp.Struct.setUint16(12, 4, this);
    return capnp.Struct.getAs(Node_Const, this);
  }
  isConst(): boolean {
    return capnp.Struct.getUint16(12, this) === 4;
  }
  setConst(): void {
    capnp.Struct.setUint16(12, 4, this);
  }
  getAnnotation(): Node_Annotation {
    capnp.Struct.testWhich(
      "annotation",
      capnp.Struct.getUint16(12, this),
      5,
      this,
    );
    return capnp.Struct.getAs(Node_Annotation, this);
  }
  initAnnotation(): Node_Annotation {
    capnp.Struct.setUint16(12, 5, this);
    return capnp.Struct.getAs(Node_Annotation, this);
  }
  isAnnotation(): boolean {
    return capnp.Struct.getUint16(12, this) === 5;
  }
  setAnnotation(): void {
    capnp.Struct.setUint16(12, 5, this);
  }
  toString(): string {
    return "Node_" + super.toString();
  }
  which(): Node_Which {
    return capnp.Struct.getUint16(12, this);
  }
}

export class Field_Slot extends capnp.Struct {
  static readonly _capnp = {
    displayName: "slot",
    id: "c42305476bb4746f",
    size: new capnp.ObjectSize(24, 4),
  };
  getOffset(): number {
    return capnp.Struct.getUint32(4, this);
  }
  setOffset(value: number): void {
    capnp.Struct.setUint32(4, value, this);
  }
  adoptType(value: capnp.Orphan<Type>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(2, this));
  }
  disownType(): capnp.Orphan<Type> {
    return capnp.Struct.disown(this.getType());
  }
  getType(): Type {
    return capnp.Struct.getStruct(2, Type, this);
  }
  hasType(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(2, this));
  }
  initType(): Type {
    return capnp.Struct.initStructAt(2, Type, this);
  }
  setType(value: Type): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(2, this));
  }
  adoptDefaultValue(value: capnp.Orphan<Value>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(3, this));
  }
  disownDefaultValue(): capnp.Orphan<Value> {
    return capnp.Struct.disown(this.getDefaultValue());
  }
  getDefaultValue(): Value {
    return capnp.Struct.getStruct(3, Value, this);
  }
  hasDefaultValue(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(3, this));
  }
  initDefaultValue(): Value {
    return capnp.Struct.initStructAt(3, Value, this);
  }
  setDefaultValue(value: Value): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(3, this));
  }
  getHadExplicitDefault(): boolean {
    return capnp.Struct.getBit(128, this);
  }
  setHadExplicitDefault(value: boolean): void {
    capnp.Struct.setBit(128, value, this);
  }
  toString(): string {
    return "Field_Slot_" + super.toString();
  }
}

export class Field_Group extends capnp.Struct {
  static readonly _capnp = {
    displayName: "group",
    id: "cafccddb68db1d11",
    size: new capnp.ObjectSize(24, 4),
  };
  getTypeId(): bigint {
    return capnp.Struct.getUint64(16, this);
  }
  setTypeId(value: bigint): void {
    capnp.Struct.setUint64(16, value, this);
  }
  toString(): string {
    return "Field_Group_" + super.toString();
  }
}

export enum Field_Ordinal_Which {
  IMPLICIT = 0,
  EXPLICIT = 1,
}

export class Field_Ordinal extends capnp.Struct {
  static readonly IMPLICIT = Field_Ordinal_Which.IMPLICIT;
  static readonly EXPLICIT = Field_Ordinal_Which.EXPLICIT;
  static readonly _capnp = {
    displayName: "ordinal",
    id: "bb90d5c287870be6",
    size: new capnp.ObjectSize(24, 4),
  };
  isImplicit(): boolean {
    return capnp.Struct.getUint16(10, this) === 0;
  }
  setImplicit(): void {
    capnp.Struct.setUint16(10, 0, this);
  }
  getExplicit(): number {
    capnp.Struct.testWhich(
      "explicit",
      capnp.Struct.getUint16(10, this),
      1,
      this,
    );
    return capnp.Struct.getUint16(12, this);
  }
  isExplicit(): boolean {
    return capnp.Struct.getUint16(10, this) === 1;
  }
  setExplicit(value: number): void {
    capnp.Struct.setUint16(10, 1, this);
    capnp.Struct.setUint16(12, value, this);
  }
  toString(): string {
    return "Field_Ordinal_" + super.toString();
  }
  which(): Field_Ordinal_Which {
    return capnp.Struct.getUint16(10, this);
  }
}

export enum Field_Which {
  SLOT = 0,
  GROUP = 1,
}

export class Field extends capnp.Struct {
  static readonly NO_DISCRIMINANT = 65_535;
  static readonly SLOT = Field_Which.SLOT;
  static readonly GROUP = Field_Which.GROUP;
  static readonly _capnp = {
    displayName: "Field",
    id: "9aad50a41f4af45f",
    size: new capnp.ObjectSize(24, 4),
    defaultDiscriminantValue: capnp.getUint16Mask(65_535),
  };
  static _Annotations: capnp.ListCtor<Annotation>;
  getName(): string {
    return capnp.Struct.getText(0, this);
  }
  setName(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  getCodeOrder(): number {
    return capnp.Struct.getUint16(0, this);
  }
  setCodeOrder(value: number): void {
    capnp.Struct.setUint16(0, value, this);
  }
  adoptAnnotations(value: capnp.Orphan<capnp.List<Annotation>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownAnnotations(): capnp.Orphan<capnp.List<Annotation>> {
    return capnp.Struct.disown(this.getAnnotations());
  }
  getAnnotations(): capnp.List<Annotation> {
    return capnp.Struct.getList(1, Field._Annotations, this);
  }
  hasAnnotations(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  initAnnotations(length: number): capnp.List<Annotation> {
    return capnp.Struct.initList(1, Field._Annotations, length, this);
  }
  setAnnotations(value: capnp.List<Annotation>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  getDiscriminantValue(): number {
    return capnp.Struct.getUint16(
      2,
      this,
      Field._capnp.defaultDiscriminantValue,
    );
  }
  setDiscriminantValue(value: number): void {
    capnp.Struct.setUint16(2, value, this);
  }
  getSlot(): Field_Slot {
    capnp.Struct.testWhich("slot", capnp.Struct.getUint16(8, this), 0, this);
    return capnp.Struct.getAs(Field_Slot, this);
  }
  initSlot(): Field_Slot {
    capnp.Struct.setUint16(8, 0, this);
    return capnp.Struct.getAs(Field_Slot, this);
  }
  isSlot(): boolean {
    return capnp.Struct.getUint16(8, this) === 0;
  }
  setSlot(): void {
    capnp.Struct.setUint16(8, 0, this);
  }
  getGroup(): Field_Group {
    capnp.Struct.testWhich("group", capnp.Struct.getUint16(8, this), 1, this);
    return capnp.Struct.getAs(Field_Group, this);
  }
  initGroup(): Field_Group {
    capnp.Struct.setUint16(8, 1, this);
    return capnp.Struct.getAs(Field_Group, this);
  }
  isGroup(): boolean {
    return capnp.Struct.getUint16(8, this) === 1;
  }
  setGroup(): void {
    capnp.Struct.setUint16(8, 1, this);
  }
  getOrdinal(): Field_Ordinal {
    return capnp.Struct.getAs(Field_Ordinal, this);
  }
  initOrdinal(): Field_Ordinal {
    return capnp.Struct.getAs(Field_Ordinal, this);
  }
  toString(): string {
    return "Field_" + super.toString();
  }
  which(): Field_Which {
    return capnp.Struct.getUint16(8, this);
  }
}

export class Enumerant extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Enumerant",
    id: "978a7cebdc549a4d",
    size: new capnp.ObjectSize(8, 2),
  };
  static _Annotations: capnp.ListCtor<Annotation>;
  getName(): string {
    return capnp.Struct.getText(0, this);
  }
  setName(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  getCodeOrder(): number {
    return capnp.Struct.getUint16(0, this);
  }
  setCodeOrder(value: number): void {
    capnp.Struct.setUint16(0, value, this);
  }
  adoptAnnotations(value: capnp.Orphan<capnp.List<Annotation>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownAnnotations(): capnp.Orphan<capnp.List<Annotation>> {
    return capnp.Struct.disown(this.getAnnotations());
  }
  getAnnotations(): capnp.List<Annotation> {
    return capnp.Struct.getList(1, Enumerant._Annotations, this);
  }
  hasAnnotations(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  initAnnotations(length: number): capnp.List<Annotation> {
    return capnp.Struct.initList(1, Enumerant._Annotations, length, this);
  }
  setAnnotations(value: capnp.List<Annotation>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Enumerant_" + super.toString();
  }
}

export class Superclass extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Superclass",
    id: "a9962a9ed0a4d7f8",
    size: new capnp.ObjectSize(8, 1),
  };
  getId(): bigint {
    return capnp.Struct.getUint64(0, this);
  }
  setId(value: bigint): void {
    capnp.Struct.setUint64(0, value, this);
  }
  adoptBrand(value: capnp.Orphan<Brand>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownBrand(): capnp.Orphan<Brand> {
    return capnp.Struct.disown(this.getBrand());
  }
  getBrand(): Brand {
    return capnp.Struct.getStruct(0, Brand, this);
  }
  hasBrand(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initBrand(): Brand {
    return capnp.Struct.initStructAt(0, Brand, this);
  }
  setBrand(value: Brand): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Superclass_" + super.toString();
  }
}

export class Method extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Method",
    id: "9500cce23b334d80",
    size: new capnp.ObjectSize(24, 5),
  };
  static _ImplicitParameters: capnp.ListCtor<Node_Parameter>;
  static _Annotations: capnp.ListCtor<Annotation>;
  getName(): string {
    return capnp.Struct.getText(0, this);
  }
  setName(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  getCodeOrder(): number {
    return capnp.Struct.getUint16(0, this);
  }
  setCodeOrder(value: number): void {
    capnp.Struct.setUint16(0, value, this);
  }
  adoptImplicitParameters(
    value: capnp.Orphan<capnp.List<Node_Parameter>>,
  ): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(4, this));
  }
  disownImplicitParameters(): capnp.Orphan<capnp.List<Node_Parameter>> {
    return capnp.Struct.disown(this.getImplicitParameters());
  }
  getImplicitParameters(): capnp.List<Node_Parameter> {
    return capnp.Struct.getList(4, Method._ImplicitParameters, this);
  }
  hasImplicitParameters(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(4, this));
  }
  initImplicitParameters(length: number): capnp.List<Node_Parameter> {
    return capnp.Struct.initList(4, Method._ImplicitParameters, length, this);
  }
  setImplicitParameters(value: capnp.List<Node_Parameter>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(4, this));
  }
  getParamStructType(): bigint {
    return capnp.Struct.getUint64(8, this);
  }
  setParamStructType(value: bigint): void {
    capnp.Struct.setUint64(8, value, this);
  }
  adoptParamBrand(value: capnp.Orphan<Brand>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(2, this));
  }
  disownParamBrand(): capnp.Orphan<Brand> {
    return capnp.Struct.disown(this.getParamBrand());
  }
  getParamBrand(): Brand {
    return capnp.Struct.getStruct(2, Brand, this);
  }
  hasParamBrand(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(2, this));
  }
  initParamBrand(): Brand {
    return capnp.Struct.initStructAt(2, Brand, this);
  }
  setParamBrand(value: Brand): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(2, this));
  }
  getResultStructType(): bigint {
    return capnp.Struct.getUint64(16, this);
  }
  setResultStructType(value: bigint): void {
    capnp.Struct.setUint64(16, value, this);
  }
  adoptResultBrand(value: capnp.Orphan<Brand>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(3, this));
  }
  disownResultBrand(): capnp.Orphan<Brand> {
    return capnp.Struct.disown(this.getResultBrand());
  }
  getResultBrand(): Brand {
    return capnp.Struct.getStruct(3, Brand, this);
  }
  hasResultBrand(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(3, this));
  }
  initResultBrand(): Brand {
    return capnp.Struct.initStructAt(3, Brand, this);
  }
  setResultBrand(value: Brand): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(3, this));
  }
  adoptAnnotations(value: capnp.Orphan<capnp.List<Annotation>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownAnnotations(): capnp.Orphan<capnp.List<Annotation>> {
    return capnp.Struct.disown(this.getAnnotations());
  }
  getAnnotations(): capnp.List<Annotation> {
    return capnp.Struct.getList(1, Method._Annotations, this);
  }
  hasAnnotations(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  initAnnotations(length: number): capnp.List<Annotation> {
    return capnp.Struct.initList(1, Method._Annotations, length, this);
  }
  setAnnotations(value: capnp.List<Annotation>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Method_" + super.toString();
  }
}

export class Type_List extends capnp.Struct {
  static readonly _capnp = {
    displayName: "list",
    id: "87e739250a60ea97",
    size: new capnp.ObjectSize(24, 1),
  };
  adoptElementType(value: capnp.Orphan<Type>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownElementType(): capnp.Orphan<Type> {
    return capnp.Struct.disown(this.getElementType());
  }
  getElementType(): Type {
    return capnp.Struct.getStruct(0, Type, this);
  }
  hasElementType(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initElementType(): Type {
    return capnp.Struct.initStructAt(0, Type, this);
  }
  setElementType(value: Type): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Type_List_" + super.toString();
  }
}

export class Type_Enum extends capnp.Struct {
  static readonly _capnp = {
    displayName: "enum",
    id: "9e0e78711a7f87a9",
    size: new capnp.ObjectSize(24, 1),
  };
  getTypeId(): bigint {
    return capnp.Struct.getUint64(8, this);
  }
  setTypeId(value: bigint): void {
    capnp.Struct.setUint64(8, value, this);
  }
  adoptBrand(value: capnp.Orphan<Brand>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownBrand(): capnp.Orphan<Brand> {
    return capnp.Struct.disown(this.getBrand());
  }
  getBrand(): Brand {
    return capnp.Struct.getStruct(0, Brand, this);
  }
  hasBrand(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initBrand(): Brand {
    return capnp.Struct.initStructAt(0, Brand, this);
  }
  setBrand(value: Brand): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Type_Enum_" + super.toString();
  }
}

export class Type_Struct extends capnp.Struct {
  static readonly _capnp = {
    displayName: "struct",
    id: "ac3a6f60ef4cc6d3",
    size: new capnp.ObjectSize(24, 1),
  };
  getTypeId(): bigint {
    return capnp.Struct.getUint64(8, this);
  }
  setTypeId(value: bigint): void {
    capnp.Struct.setUint64(8, value, this);
  }
  adoptBrand(value: capnp.Orphan<Brand>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownBrand(): capnp.Orphan<Brand> {
    return capnp.Struct.disown(this.getBrand());
  }
  getBrand(): Brand {
    return capnp.Struct.getStruct(0, Brand, this);
  }
  hasBrand(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initBrand(): Brand {
    return capnp.Struct.initStructAt(0, Brand, this);
  }
  setBrand(value: Brand): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Type_Struct_" + super.toString();
  }
}

export class Type_Interface extends capnp.Struct {
  static readonly _capnp = {
    displayName: "interface",
    id: "ed8bca69f7fb0cbf",
    size: new capnp.ObjectSize(24, 1),
  };
  getTypeId(): bigint {
    return capnp.Struct.getUint64(8, this);
  }
  setTypeId(value: bigint): void {
    capnp.Struct.setUint64(8, value, this);
  }
  adoptBrand(value: capnp.Orphan<Brand>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownBrand(): capnp.Orphan<Brand> {
    return capnp.Struct.disown(this.getBrand());
  }
  getBrand(): Brand {
    return capnp.Struct.getStruct(0, Brand, this);
  }
  hasBrand(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initBrand(): Brand {
    return capnp.Struct.initStructAt(0, Brand, this);
  }
  setBrand(value: Brand): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Type_Interface_" + super.toString();
  }
}

export enum Type_AnyPointer_Unconstrained_Which {
  ANY_KIND = 0,
  STRUCT = 1,
  LIST = 2,
  CAPABILITY = 3,
}

export class Type_AnyPointer_Unconstrained extends capnp.Struct {
  static readonly ANY_KIND = Type_AnyPointer_Unconstrained_Which.ANY_KIND;
  static readonly STRUCT = Type_AnyPointer_Unconstrained_Which.STRUCT;
  static readonly LIST = Type_AnyPointer_Unconstrained_Which.LIST;
  static readonly CAPABILITY = Type_AnyPointer_Unconstrained_Which.CAPABILITY;
  static readonly _capnp = {
    displayName: "unconstrained",
    id: "8e3b5f79fe593656",
    size: new capnp.ObjectSize(24, 1),
  };
  isAnyKind(): boolean {
    return capnp.Struct.getUint16(10, this) === 0;
  }
  setAnyKind(): void {
    capnp.Struct.setUint16(10, 0, this);
  }
  isStruct(): boolean {
    return capnp.Struct.getUint16(10, this) === 1;
  }
  setStruct(): void {
    capnp.Struct.setUint16(10, 1, this);
  }
  isList(): boolean {
    return capnp.Struct.getUint16(10, this) === 2;
  }
  setList(): void {
    capnp.Struct.setUint16(10, 2, this);
  }
  isCapability(): boolean {
    return capnp.Struct.getUint16(10, this) === 3;
  }
  setCapability(): void {
    capnp.Struct.setUint16(10, 3, this);
  }
  toString(): string {
    return "Type_AnyPointer_Unconstrained_" + super.toString();
  }
  which(): Type_AnyPointer_Unconstrained_Which {
    return capnp.Struct.getUint16(10, this);
  }
}

export class Type_AnyPointer_Parameter extends capnp.Struct {
  static readonly _capnp = {
    displayName: "parameter",
    id: "9dd1f724f4614a85",
    size: new capnp.ObjectSize(24, 1),
  };
  getScopeId(): bigint {
    return capnp.Struct.getUint64(16, this);
  }
  setScopeId(value: bigint): void {
    capnp.Struct.setUint64(16, value, this);
  }
  getParameterIndex(): number {
    return capnp.Struct.getUint16(10, this);
  }
  setParameterIndex(value: number): void {
    capnp.Struct.setUint16(10, value, this);
  }
  toString(): string {
    return "Type_AnyPointer_Parameter_" + super.toString();
  }
}

export class Type_AnyPointer_ImplicitMethodParameter extends capnp.Struct {
  static readonly _capnp = {
    displayName: "implicitMethodParameter",
    id: "baefc9120c56e274",
    size: new capnp.ObjectSize(24, 1),
  };
  getParameterIndex(): number {
    return capnp.Struct.getUint16(10, this);
  }
  setParameterIndex(value: number): void {
    capnp.Struct.setUint16(10, value, this);
  }
  toString(): string {
    return "Type_AnyPointer_ImplicitMethodParameter_" + super.toString();
  }
}

export enum Type_AnyPointer_Which {
  UNCONSTRAINED = 0,
  PARAMETER = 1,
  IMPLICIT_METHOD_PARAMETER = 2,
}

export class Type_AnyPointer extends capnp.Struct {
  static readonly UNCONSTRAINED = Type_AnyPointer_Which.UNCONSTRAINED;
  static readonly PARAMETER = Type_AnyPointer_Which.PARAMETER;
  static readonly IMPLICIT_METHOD_PARAMETER =
    Type_AnyPointer_Which.IMPLICIT_METHOD_PARAMETER;
  static readonly _capnp = {
    displayName: "anyPointer",
    id: "c2573fe8a23e49f1",
    size: new capnp.ObjectSize(24, 1),
  };
  getUnconstrained(): Type_AnyPointer_Unconstrained {
    capnp.Struct.testWhich(
      "unconstrained",
      capnp.Struct.getUint16(8, this),
      0,
      this,
    );
    return capnp.Struct.getAs(Type_AnyPointer_Unconstrained, this);
  }
  initUnconstrained(): Type_AnyPointer_Unconstrained {
    capnp.Struct.setUint16(8, 0, this);
    return capnp.Struct.getAs(Type_AnyPointer_Unconstrained, this);
  }
  isUnconstrained(): boolean {
    return capnp.Struct.getUint16(8, this) === 0;
  }
  setUnconstrained(): void {
    capnp.Struct.setUint16(8, 0, this);
  }
  getParameter(): Type_AnyPointer_Parameter {
    capnp.Struct.testWhich(
      "parameter",
      capnp.Struct.getUint16(8, this),
      1,
      this,
    );
    return capnp.Struct.getAs(Type_AnyPointer_Parameter, this);
  }
  initParameter(): Type_AnyPointer_Parameter {
    capnp.Struct.setUint16(8, 1, this);
    return capnp.Struct.getAs(Type_AnyPointer_Parameter, this);
  }
  isParameter(): boolean {
    return capnp.Struct.getUint16(8, this) === 1;
  }
  setParameter(): void {
    capnp.Struct.setUint16(8, 1, this);
  }
  getImplicitMethodParameter(): Type_AnyPointer_ImplicitMethodParameter {
    capnp.Struct.testWhich(
      "implicitMethodParameter",
      capnp.Struct.getUint16(8, this),
      2,
      this,
    );
    return capnp.Struct.getAs(Type_AnyPointer_ImplicitMethodParameter, this);
  }
  initImplicitMethodParameter(): Type_AnyPointer_ImplicitMethodParameter {
    capnp.Struct.setUint16(8, 2, this);
    return capnp.Struct.getAs(Type_AnyPointer_ImplicitMethodParameter, this);
  }
  isImplicitMethodParameter(): boolean {
    return capnp.Struct.getUint16(8, this) === 2;
  }
  setImplicitMethodParameter(): void {
    capnp.Struct.setUint16(8, 2, this);
  }
  toString(): string {
    return "Type_AnyPointer_" + super.toString();
  }
  which(): Type_AnyPointer_Which {
    return capnp.Struct.getUint16(8, this);
  }
}

export enum Type_Which {
  VOID = 0,
  BOOL = 1,
  INT8 = 2,
  INT16 = 3,
  INT32 = 4,
  INT64 = 5,
  UINT8 = 6,
  UINT16 = 7,
  UINT32 = 8,
  UINT64 = 9,
  FLOAT32 = 10,
  FLOAT64 = 11,
  TEXT = 12,
  DATA = 13,
  LIST = 14,
  ENUM = 15,
  STRUCT = 16,
  INTERFACE = 17,
  ANY_POINTER = 18,
}

export class Type extends capnp.Struct {
  static readonly VOID = Type_Which.VOID;
  static readonly BOOL = Type_Which.BOOL;
  static readonly INT8 = Type_Which.INT8;
  static readonly INT16 = Type_Which.INT16;
  static readonly INT32 = Type_Which.INT32;
  static readonly INT64 = Type_Which.INT64;
  static readonly UINT8 = Type_Which.UINT8;
  static readonly UINT16 = Type_Which.UINT16;
  static readonly UINT32 = Type_Which.UINT32;
  static readonly UINT64 = Type_Which.UINT64;
  static readonly FLOAT32 = Type_Which.FLOAT32;
  static readonly FLOAT64 = Type_Which.FLOAT64;
  static readonly TEXT = Type_Which.TEXT;
  static readonly DATA = Type_Which.DATA;
  static readonly LIST = Type_Which.LIST;
  static readonly ENUM = Type_Which.ENUM;
  static readonly STRUCT = Type_Which.STRUCT;
  static readonly INTERFACE = Type_Which.INTERFACE;
  static readonly ANY_POINTER = Type_Which.ANY_POINTER;
  static readonly _capnp = {
    displayName: "Type",
    id: "d07378ede1f9cc60",
    size: new capnp.ObjectSize(24, 1),
  };
  isVoid(): boolean {
    return capnp.Struct.getUint16(0, this) === 0;
  }
  setVoid(): void {
    capnp.Struct.setUint16(0, 0, this);
  }
  isBool(): boolean {
    return capnp.Struct.getUint16(0, this) === 1;
  }
  setBool(): void {
    capnp.Struct.setUint16(0, 1, this);
  }
  isInt8(): boolean {
    return capnp.Struct.getUint16(0, this) === 2;
  }
  setInt8(): void {
    capnp.Struct.setUint16(0, 2, this);
  }
  isInt16(): boolean {
    return capnp.Struct.getUint16(0, this) === 3;
  }
  setInt16(): void {
    capnp.Struct.setUint16(0, 3, this);
  }
  isInt32(): boolean {
    return capnp.Struct.getUint16(0, this) === 4;
  }
  setInt32(): void {
    capnp.Struct.setUint16(0, 4, this);
  }
  isInt64(): boolean {
    return capnp.Struct.getUint16(0, this) === 5;
  }
  setInt64(): void {
    capnp.Struct.setUint16(0, 5, this);
  }
  isUint8(): boolean {
    return capnp.Struct.getUint16(0, this) === 6;
  }
  setUint8(): void {
    capnp.Struct.setUint16(0, 6, this);
  }
  isUint16(): boolean {
    return capnp.Struct.getUint16(0, this) === 7;
  }
  setUint16(): void {
    capnp.Struct.setUint16(0, 7, this);
  }
  isUint32(): boolean {
    return capnp.Struct.getUint16(0, this) === 8;
  }
  setUint32(): void {
    capnp.Struct.setUint16(0, 8, this);
  }
  isUint64(): boolean {
    return capnp.Struct.getUint16(0, this) === 9;
  }
  setUint64(): void {
    capnp.Struct.setUint16(0, 9, this);
  }
  isFloat32(): boolean {
    return capnp.Struct.getUint16(0, this) === 10;
  }
  setFloat32(): void {
    capnp.Struct.setUint16(0, 10, this);
  }
  isFloat64(): boolean {
    return capnp.Struct.getUint16(0, this) === 11;
  }
  setFloat64(): void {
    capnp.Struct.setUint16(0, 11, this);
  }
  isText(): boolean {
    return capnp.Struct.getUint16(0, this) === 12;
  }
  setText(): void {
    capnp.Struct.setUint16(0, 12, this);
  }
  isData(): boolean {
    return capnp.Struct.getUint16(0, this) === 13;
  }
  setData(): void {
    capnp.Struct.setUint16(0, 13, this);
  }
  getList(): Type_List {
    capnp.Struct.testWhich("list", capnp.Struct.getUint16(0, this), 14, this);
    return capnp.Struct.getAs(Type_List, this);
  }
  initList(): Type_List {
    capnp.Struct.setUint16(0, 14, this);
    return capnp.Struct.getAs(Type_List, this);
  }
  isList(): boolean {
    return capnp.Struct.getUint16(0, this) === 14;
  }
  setList(): void {
    capnp.Struct.setUint16(0, 14, this);
  }
  getEnum(): Type_Enum {
    capnp.Struct.testWhich("enum", capnp.Struct.getUint16(0, this), 15, this);
    return capnp.Struct.getAs(Type_Enum, this);
  }
  initEnum(): Type_Enum {
    capnp.Struct.setUint16(0, 15, this);
    return capnp.Struct.getAs(Type_Enum, this);
  }
  isEnum(): boolean {
    return capnp.Struct.getUint16(0, this) === 15;
  }
  setEnum(): void {
    capnp.Struct.setUint16(0, 15, this);
  }
  getStruct(): Type_Struct {
    capnp.Struct.testWhich("struct", capnp.Struct.getUint16(0, this), 16, this);
    return capnp.Struct.getAs(Type_Struct, this);
  }
  initStruct(): Type_Struct {
    capnp.Struct.setUint16(0, 16, this);
    return capnp.Struct.getAs(Type_Struct, this);
  }
  isStruct(): boolean {
    return capnp.Struct.getUint16(0, this) === 16;
  }
  setStruct(): void {
    capnp.Struct.setUint16(0, 16, this);
  }
  getInterface(): Type_Interface {
    capnp.Struct.testWhich(
      "interface",
      capnp.Struct.getUint16(0, this),
      17,
      this,
    );
    return capnp.Struct.getAs(Type_Interface, this);
  }
  initInterface(): Type_Interface {
    capnp.Struct.setUint16(0, 17, this);
    return capnp.Struct.getAs(Type_Interface, this);
  }
  isInterface(): boolean {
    return capnp.Struct.getUint16(0, this) === 17;
  }
  setInterface(): void {
    capnp.Struct.setUint16(0, 17, this);
  }
  getAnyPointer(): Type_AnyPointer {
    capnp.Struct.testWhich(
      "anyPointer",
      capnp.Struct.getUint16(0, this),
      18,
      this,
    );
    return capnp.Struct.getAs(Type_AnyPointer, this);
  }
  initAnyPointer(): Type_AnyPointer {
    capnp.Struct.setUint16(0, 18, this);
    return capnp.Struct.getAs(Type_AnyPointer, this);
  }
  isAnyPointer(): boolean {
    return capnp.Struct.getUint16(0, this) === 18;
  }
  setAnyPointer(): void {
    capnp.Struct.setUint16(0, 18, this);
  }
  toString(): string {
    return "Type_" + super.toString();
  }
  which(): Type_Which {
    return capnp.Struct.getUint16(0, this);
  }
}

export enum Brand_Scope_Which {
  BIND = 0,
  INHERIT = 1,
}

export class Brand_Scope extends capnp.Struct {
  static readonly BIND = Brand_Scope_Which.BIND;
  static readonly INHERIT = Brand_Scope_Which.INHERIT;
  static readonly _capnp = {
    displayName: "Scope",
    id: "abd73485a9636bc9",
    size: new capnp.ObjectSize(16, 1),
  };
  static _Bind: capnp.ListCtor<Brand_Binding>;
  getScopeId(): bigint {
    return capnp.Struct.getUint64(0, this);
  }
  setScopeId(value: bigint): void {
    capnp.Struct.setUint64(0, value, this);
  }
  adoptBind(value: capnp.Orphan<capnp.List<Brand_Binding>>): void {
    capnp.Struct.setUint16(8, 0, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownBind(): capnp.Orphan<capnp.List<Brand_Binding>> {
    return capnp.Struct.disown(this.getBind());
  }
  getBind(): capnp.List<Brand_Binding> {
    capnp.Struct.testWhich("bind", capnp.Struct.getUint16(8, this), 0, this);
    return capnp.Struct.getList(0, Brand_Scope._Bind, this);
  }
  hasBind(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initBind(length: number): capnp.List<Brand_Binding> {
    capnp.Struct.setUint16(8, 0, this);
    return capnp.Struct.initList(0, Brand_Scope._Bind, length, this);
  }
  isBind(): boolean {
    return capnp.Struct.getUint16(8, this) === 0;
  }
  setBind(value: capnp.List<Brand_Binding>): void {
    capnp.Struct.setUint16(8, 0, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  isInherit(): boolean {
    return capnp.Struct.getUint16(8, this) === 1;
  }
  setInherit(): void {
    capnp.Struct.setUint16(8, 1, this);
  }
  toString(): string {
    return "Brand_Scope_" + super.toString();
  }
  which(): Brand_Scope_Which {
    return capnp.Struct.getUint16(8, this);
  }
}

export enum Brand_Binding_Which {
  UNBOUND = 0,
  TYPE = 1,
}

export class Brand_Binding extends capnp.Struct {
  static readonly UNBOUND = Brand_Binding_Which.UNBOUND;
  static readonly TYPE = Brand_Binding_Which.TYPE;
  static readonly _capnp = {
    displayName: "Binding",
    id: "c863cd16969ee7fc",
    size: new capnp.ObjectSize(8, 1),
  };
  isUnbound(): boolean {
    return capnp.Struct.getUint16(0, this) === 0;
  }
  setUnbound(): void {
    capnp.Struct.setUint16(0, 0, this);
  }
  adoptType(value: capnp.Orphan<Type>): void {
    capnp.Struct.setUint16(0, 1, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownType(): capnp.Orphan<Type> {
    return capnp.Struct.disown(this.getType());
  }
  getType(): Type {
    capnp.Struct.testWhich("type", capnp.Struct.getUint16(0, this), 1, this);
    return capnp.Struct.getStruct(0, Type, this);
  }
  hasType(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initType(): Type {
    capnp.Struct.setUint16(0, 1, this);
    return capnp.Struct.initStructAt(0, Type, this);
  }
  isType(): boolean {
    return capnp.Struct.getUint16(0, this) === 1;
  }
  setType(value: Type): void {
    capnp.Struct.setUint16(0, 1, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Brand_Binding_" + super.toString();
  }
  which(): Brand_Binding_Which {
    return capnp.Struct.getUint16(0, this);
  }
}

export class Brand extends capnp.Struct {
  static readonly Scope = Brand_Scope;
  static readonly Binding = Brand_Binding;
  static readonly _capnp = {
    displayName: "Brand",
    id: "903455f06065422b",
    size: new capnp.ObjectSize(0, 1),
  };
  static _Scopes: capnp.ListCtor<Brand_Scope>;
  adoptScopes(value: capnp.Orphan<capnp.List<Brand_Scope>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownScopes(): capnp.Orphan<capnp.List<Brand_Scope>> {
    return capnp.Struct.disown(this.getScopes());
  }
  getScopes(): capnp.List<Brand_Scope> {
    return capnp.Struct.getList(0, Brand._Scopes, this);
  }
  hasScopes(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initScopes(length: number): capnp.List<Brand_Scope> {
    return capnp.Struct.initList(0, Brand._Scopes, length, this);
  }
  setScopes(value: capnp.List<Brand_Scope>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Brand_" + super.toString();
  }
}

export enum Value_Which {
  VOID = 0,
  BOOL = 1,
  INT8 = 2,
  INT16 = 3,
  INT32 = 4,
  INT64 = 5,
  UINT8 = 6,
  UINT16 = 7,
  UINT32 = 8,
  UINT64 = 9,
  FLOAT32 = 10,
  FLOAT64 = 11,
  TEXT = 12,
  DATA = 13,
  LIST = 14,
  ENUM = 15,
  STRUCT = 16,
  INTERFACE = 17,
  ANY_POINTER = 18,
}

export class Value extends capnp.Struct {
  static readonly VOID = Value_Which.VOID;
  static readonly BOOL = Value_Which.BOOL;
  static readonly INT8 = Value_Which.INT8;
  static readonly INT16 = Value_Which.INT16;
  static readonly INT32 = Value_Which.INT32;
  static readonly INT64 = Value_Which.INT64;
  static readonly UINT8 = Value_Which.UINT8;
  static readonly UINT16 = Value_Which.UINT16;
  static readonly UINT32 = Value_Which.UINT32;
  static readonly UINT64 = Value_Which.UINT64;
  static readonly FLOAT32 = Value_Which.FLOAT32;
  static readonly FLOAT64 = Value_Which.FLOAT64;
  static readonly TEXT = Value_Which.TEXT;
  static readonly DATA = Value_Which.DATA;
  static readonly LIST = Value_Which.LIST;
  static readonly ENUM = Value_Which.ENUM;
  static readonly STRUCT = Value_Which.STRUCT;
  static readonly INTERFACE = Value_Which.INTERFACE;
  static readonly ANY_POINTER = Value_Which.ANY_POINTER;
  static readonly _capnp = {
    displayName: "Value",
    id: "ce23dcd2d7b00c9b",
    size: new capnp.ObjectSize(16, 1),
  };
  isVoid(): boolean {
    return capnp.Struct.getUint16(0, this) === 0;
  }
  setVoid(): void {
    capnp.Struct.setUint16(0, 0, this);
  }
  getBool(): boolean {
    capnp.Struct.testWhich("bool", capnp.Struct.getUint16(0, this), 1, this);
    return capnp.Struct.getBit(16, this);
  }
  isBool(): boolean {
    return capnp.Struct.getUint16(0, this) === 1;
  }
  setBool(value: boolean): void {
    capnp.Struct.setUint16(0, 1, this);
    capnp.Struct.setBit(16, value, this);
  }
  getInt8(): number {
    capnp.Struct.testWhich("int8", capnp.Struct.getUint16(0, this), 2, this);
    return capnp.Struct.getInt8(2, this);
  }
  isInt8(): boolean {
    return capnp.Struct.getUint16(0, this) === 2;
  }
  setInt8(value: number): void {
    capnp.Struct.setUint16(0, 2, this);
    capnp.Struct.setInt8(2, value, this);
  }
  getInt16(): number {
    capnp.Struct.testWhich("int16", capnp.Struct.getUint16(0, this), 3, this);
    return capnp.Struct.getInt16(2, this);
  }
  isInt16(): boolean {
    return capnp.Struct.getUint16(0, this) === 3;
  }
  setInt16(value: number): void {
    capnp.Struct.setUint16(0, 3, this);
    capnp.Struct.setInt16(2, value, this);
  }
  getInt32(): number {
    capnp.Struct.testWhich("int32", capnp.Struct.getUint16(0, this), 4, this);
    return capnp.Struct.getInt32(4, this);
  }
  isInt32(): boolean {
    return capnp.Struct.getUint16(0, this) === 4;
  }
  setInt32(value: number): void {
    capnp.Struct.setUint16(0, 4, this);
    capnp.Struct.setInt32(4, value, this);
  }
  getInt64(): bigint {
    capnp.Struct.testWhich("int64", capnp.Struct.getUint16(0, this), 5, this);
    return capnp.Struct.getInt64(8, this);
  }
  isInt64(): boolean {
    return capnp.Struct.getUint16(0, this) === 5;
  }
  setInt64(value: bigint): void {
    capnp.Struct.setUint16(0, 5, this);
    capnp.Struct.setInt64(8, value, this);
  }
  getUint8(): number {
    capnp.Struct.testWhich("uint8", capnp.Struct.getUint16(0, this), 6, this);
    return capnp.Struct.getUint8(2, this);
  }
  isUint8(): boolean {
    return capnp.Struct.getUint16(0, this) === 6;
  }
  setUint8(value: number): void {
    capnp.Struct.setUint16(0, 6, this);
    capnp.Struct.setUint8(2, value, this);
  }
  getUint16(): number {
    capnp.Struct.testWhich("uint16", capnp.Struct.getUint16(0, this), 7, this);
    return capnp.Struct.getUint16(2, this);
  }
  isUint16(): boolean {
    return capnp.Struct.getUint16(0, this) === 7;
  }
  setUint16(value: number): void {
    capnp.Struct.setUint16(0, 7, this);
    capnp.Struct.setUint16(2, value, this);
  }
  getUint32(): number {
    capnp.Struct.testWhich("uint32", capnp.Struct.getUint16(0, this), 8, this);
    return capnp.Struct.getUint32(4, this);
  }
  isUint32(): boolean {
    return capnp.Struct.getUint16(0, this) === 8;
  }
  setUint32(value: number): void {
    capnp.Struct.setUint16(0, 8, this);
    capnp.Struct.setUint32(4, value, this);
  }
  getUint64(): bigint {
    capnp.Struct.testWhich("uint64", capnp.Struct.getUint16(0, this), 9, this);
    return capnp.Struct.getUint64(8, this);
  }
  isUint64(): boolean {
    return capnp.Struct.getUint16(0, this) === 9;
  }
  setUint64(value: bigint): void {
    capnp.Struct.setUint16(0, 9, this);
    capnp.Struct.setUint64(8, value, this);
  }
  getFloat32(): number {
    capnp.Struct.testWhich(
      "float32",
      capnp.Struct.getUint16(0, this),
      10,
      this,
    );
    return capnp.Struct.getFloat32(4, this);
  }
  isFloat32(): boolean {
    return capnp.Struct.getUint16(0, this) === 10;
  }
  setFloat32(value: number): void {
    capnp.Struct.setUint16(0, 10, this);
    capnp.Struct.setFloat32(4, value, this);
  }
  getFloat64(): number {
    capnp.Struct.testWhich(
      "float64",
      capnp.Struct.getUint16(0, this),
      11,
      this,
    );
    return capnp.Struct.getFloat64(8, this);
  }
  isFloat64(): boolean {
    return capnp.Struct.getUint16(0, this) === 11;
  }
  setFloat64(value: number): void {
    capnp.Struct.setUint16(0, 11, this);
    capnp.Struct.setFloat64(8, value, this);
  }
  getText(): string {
    capnp.Struct.testWhich("text", capnp.Struct.getUint16(0, this), 12, this);
    return capnp.Struct.getText(0, this);
  }
  isText(): boolean {
    return capnp.Struct.getUint16(0, this) === 12;
  }
  setText(value: string): void {
    capnp.Struct.setUint16(0, 12, this);
    capnp.Struct.setText(0, value, this);
  }
  adoptData(value: capnp.Orphan<capnp.Data>): void {
    capnp.Struct.setUint16(0, 13, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownData(): capnp.Orphan<capnp.Data> {
    return capnp.Struct.disown(this.getData());
  }
  getData(): capnp.Data {
    capnp.Struct.testWhich("data", capnp.Struct.getUint16(0, this), 13, this);
    return capnp.Struct.getData(0, this);
  }
  hasData(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initData(length: number): capnp.Data {
    capnp.Struct.setUint16(0, 13, this);
    return capnp.Struct.initData(0, length, this);
  }
  isData(): boolean {
    return capnp.Struct.getUint16(0, this) === 13;
  }
  setData(value: capnp.Data): void {
    capnp.Struct.setUint16(0, 13, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptList(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.setUint16(0, 14, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownList(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getList());
  }
  getList(): capnp.Pointer {
    capnp.Struct.testWhich("list", capnp.Struct.getUint16(0, this), 14, this);
    return capnp.Struct.getPointer(0, this);
  }
  hasList(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  isList(): boolean {
    return capnp.Struct.getUint16(0, this) === 14;
  }
  setList(value: capnp.Pointer): void {
    capnp.Struct.setUint16(0, 14, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  getEnum(): number {
    capnp.Struct.testWhich("enum", capnp.Struct.getUint16(0, this), 15, this);
    return capnp.Struct.getUint16(2, this);
  }
  isEnum(): boolean {
    return capnp.Struct.getUint16(0, this) === 15;
  }
  setEnum(value: number): void {
    capnp.Struct.setUint16(0, 15, this);
    capnp.Struct.setUint16(2, value, this);
  }
  adoptStruct(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.setUint16(0, 16, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownStruct(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getStruct());
  }
  getStruct(): capnp.Pointer {
    capnp.Struct.testWhich("struct", capnp.Struct.getUint16(0, this), 16, this);
    return capnp.Struct.getPointer(0, this);
  }
  hasStruct(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  isStruct(): boolean {
    return capnp.Struct.getUint16(0, this) === 16;
  }
  setStruct(value: capnp.Pointer): void {
    capnp.Struct.setUint16(0, 16, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  isInterface(): boolean {
    return capnp.Struct.getUint16(0, this) === 17;
  }
  setInterface(): void {
    capnp.Struct.setUint16(0, 17, this);
  }
  adoptAnyPointer(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.setUint16(0, 18, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownAnyPointer(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getAnyPointer());
  }
  getAnyPointer(): capnp.Pointer {
    capnp.Struct.testWhich(
      "anyPointer",
      capnp.Struct.getUint16(0, this),
      18,
      this,
    );
    return capnp.Struct.getPointer(0, this);
  }
  hasAnyPointer(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  isAnyPointer(): boolean {
    return capnp.Struct.getUint16(0, this) === 18;
  }
  setAnyPointer(value: capnp.Pointer): void {
    capnp.Struct.setUint16(0, 18, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Value_" + super.toString();
  }
  which(): Value_Which {
    return capnp.Struct.getUint16(0, this);
  }
}

export class Annotation extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Annotation",
    id: "f1c8950dab257542",
    size: new capnp.ObjectSize(8, 2),
  };
  getId(): bigint {
    return capnp.Struct.getUint64(0, this);
  }
  setId(value: bigint): void {
    capnp.Struct.setUint64(0, value, this);
  }
  adoptBrand(value: capnp.Orphan<Brand>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownBrand(): capnp.Orphan<Brand> {
    return capnp.Struct.disown(this.getBrand());
  }
  getBrand(): Brand {
    return capnp.Struct.getStruct(1, Brand, this);
  }
  hasBrand(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  initBrand(): Brand {
    return capnp.Struct.initStructAt(1, Brand, this);
  }
  setBrand(value: Brand): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  adoptValue(value: capnp.Orphan<Value>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownValue(): capnp.Orphan<Value> {
    return capnp.Struct.disown(this.getValue());
  }
  getValue(): Value {
    return capnp.Struct.getStruct(0, Value, this);
  }
  hasValue(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initValue(): Value {
    return capnp.Struct.initStructAt(0, Value, this);
  }
  setValue(value: Value): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Annotation_" + super.toString();
  }
}

export enum ElementSize {
  EMPTY,
  BIT,
  BYTE,
  TWO_BYTES,
  FOUR_BYTES,
  EIGHT_BYTES,
  POINTER,
  INLINE_COMPOSITE,
}

export class CapnpVersion extends capnp.Struct {
  static readonly _capnp = {
    displayName: "CapnpVersion",
    id: "d85d305b7d839963",
    size: new capnp.ObjectSize(8, 0),
  };
  getMajor(): number {
    return capnp.Struct.getUint16(0, this);
  }
  setMajor(value: number): void {
    capnp.Struct.setUint16(0, value, this);
  }
  getMinor(): number {
    return capnp.Struct.getUint8(2, this);
  }
  setMinor(value: number): void {
    capnp.Struct.setUint8(2, value, this);
  }
  getMicro(): number {
    return capnp.Struct.getUint8(3, this);
  }
  setMicro(value: number): void {
    capnp.Struct.setUint8(3, value, this);
  }
  toString(): string {
    return "CapnpVersion_" + super.toString();
  }
}

export class CodeGeneratorRequest_RequestedFile_Import extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Import",
    id: "ae504193122357e5",
    size: new capnp.ObjectSize(8, 1),
  };
  getId(): bigint {
    return capnp.Struct.getUint64(0, this);
  }
  setId(value: bigint): void {
    capnp.Struct.setUint64(0, value, this);
  }
  getName(): string {
    return capnp.Struct.getText(0, this);
  }
  setName(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  toString(): string {
    return "CodeGeneratorRequest_RequestedFile_Import_" + super.toString();
  }
}

export class CodeGeneratorRequest_RequestedFile extends capnp.Struct {
  static readonly Import = CodeGeneratorRequest_RequestedFile_Import;
  static readonly _capnp = {
    displayName: "RequestedFile",
    id: "cfea0eb02e810062",
    size: new capnp.ObjectSize(8, 2),
  };
  static _Imports: capnp.ListCtor<CodeGeneratorRequest_RequestedFile_Import>;
  getId(): bigint {
    return capnp.Struct.getUint64(0, this);
  }
  setId(value: bigint): void {
    capnp.Struct.setUint64(0, value, this);
  }
  getFilename(): string {
    return capnp.Struct.getText(0, this);
  }
  setFilename(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  adoptImports(
    value: capnp.Orphan<capnp.List<CodeGeneratorRequest_RequestedFile_Import>>,
  ): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownImports(): capnp.Orphan<
    capnp.List<CodeGeneratorRequest_RequestedFile_Import>
  > {
    return capnp.Struct.disown(this.getImports());
  }
  getImports(): capnp.List<CodeGeneratorRequest_RequestedFile_Import> {
    return capnp.Struct.getList(
      1,
      CodeGeneratorRequest_RequestedFile._Imports,
      this,
    );
  }
  hasImports(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  initImports(
    length: number,
  ): capnp.List<CodeGeneratorRequest_RequestedFile_Import> {
    return capnp.Struct.initList(
      1,
      CodeGeneratorRequest_RequestedFile._Imports,
      length,
      this,
    );
  }
  setImports(
    value: capnp.List<CodeGeneratorRequest_RequestedFile_Import>,
  ): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  toString(): string {
    return "CodeGeneratorRequest_RequestedFile_" + super.toString();
  }
}

export class CodeGeneratorRequest extends capnp.Struct {
  static readonly RequestedFile = CodeGeneratorRequest_RequestedFile;
  static readonly _capnp = {
    displayName: "CodeGeneratorRequest",
    id: "bfc546f6210ad7ce",
    size: new capnp.ObjectSize(0, 3),
  };
  static _Nodes: capnp.ListCtor<Node>;
  static _RequestedFiles: capnp.ListCtor<CodeGeneratorRequest_RequestedFile>;
  adoptCapnpVersion(value: capnp.Orphan<CapnpVersion>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(2, this));
  }
  disownCapnpVersion(): capnp.Orphan<CapnpVersion> {
    return capnp.Struct.disown(this.getCapnpVersion());
  }
  getCapnpVersion(): CapnpVersion {
    return capnp.Struct.getStruct(2, CapnpVersion, this);
  }
  hasCapnpVersion(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(2, this));
  }
  initCapnpVersion(): CapnpVersion {
    return capnp.Struct.initStructAt(2, CapnpVersion, this);
  }
  setCapnpVersion(value: CapnpVersion): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(2, this));
  }
  adoptNodes(value: capnp.Orphan<capnp.List<Node>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownNodes(): capnp.Orphan<capnp.List<Node>> {
    return capnp.Struct.disown(this.getNodes());
  }
  getNodes(): capnp.List<Node> {
    return capnp.Struct.getList(0, CodeGeneratorRequest._Nodes, this);
  }
  hasNodes(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initNodes(length: number): capnp.List<Node> {
    return capnp.Struct.initList(0, CodeGeneratorRequest._Nodes, length, this);
  }
  setNodes(value: capnp.List<Node>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptRequestedFiles(
    value: capnp.Orphan<capnp.List<CodeGeneratorRequest_RequestedFile>>,
  ): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownRequestedFiles(): capnp.Orphan<
    capnp.List<CodeGeneratorRequest_RequestedFile>
  > {
    return capnp.Struct.disown(this.getRequestedFiles());
  }
  getRequestedFiles(): capnp.List<CodeGeneratorRequest_RequestedFile> {
    return capnp.Struct.getList(1, CodeGeneratorRequest._RequestedFiles, this);
  }
  hasRequestedFiles(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  initRequestedFiles(
    length: number,
  ): capnp.List<CodeGeneratorRequest_RequestedFile> {
    return capnp.Struct.initList(
      1,
      CodeGeneratorRequest._RequestedFiles,
      length,
      this,
    );
  }
  setRequestedFiles(
    value: capnp.List<CodeGeneratorRequest_RequestedFile>,
  ): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  toString(): string {
    return "CodeGeneratorRequest_" + super.toString();
  }
}

Node_Struct._Fields = capnp.CompositeList(Field);
Node_Enum._Enumerants = capnp.CompositeList(Enumerant);
Node_Interface._Methods = capnp.CompositeList(Method);
Node_Interface._Superclasses = capnp.CompositeList(Superclass);
Node._Parameters = capnp.CompositeList(Node_Parameter);
Node._NestedNodes = capnp.CompositeList(Node_NestedNode);
Node._Annotations = capnp.CompositeList(Annotation);
Field._Annotations = capnp.CompositeList(Annotation);
Enumerant._Annotations = capnp.CompositeList(Annotation);
Method._ImplicitParameters = capnp.CompositeList(Node_Parameter);
Method._Annotations = capnp.CompositeList(Annotation);
Brand_Scope._Bind = capnp.CompositeList(Brand_Binding);
Brand._Scopes = capnp.CompositeList(Brand_Scope);
CodeGeneratorRequest_RequestedFile._Imports = capnp.CompositeList(
  CodeGeneratorRequest_RequestedFile_Import,
);
CodeGeneratorRequest._Nodes = capnp.CompositeList(Node);
CodeGeneratorRequest._RequestedFiles = capnp.CompositeList(
  CodeGeneratorRequest_RequestedFile,
);
