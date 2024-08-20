import * as $ from "../serialization";
export const _capnpFileId = BigInt("0xa93fc509624c72d9");
export class Node_Parameter extends $.Struct {
  static readonly _capnp = {
    displayName: "Parameter",
    id: "b9521bccf10fa3b1",
    size: new $.ObjectSize(0, 1),
  };
  get name(): string {
    return $.Struct.getText(0, this);
  }
  set name(value: string) {
    $.Struct.setText(0, value, this);
  }
  toString(): string {
    return "Node_Parameter_" + super.toString();
  }
}
export class Node_NestedNode extends $.Struct {
  static readonly _capnp = {
    displayName: "NestedNode",
    id: "debf55bbfa0fc242",
    size: new $.ObjectSize(8, 1),
  };
  get name(): string {
    return $.Struct.getText(0, this);
  }
  set name(value: string) {
    $.Struct.setText(0, value, this);
  }
  get id(): bigint {
    return $.Struct.getUint64(0, this);
  }
  set id(value: bigint) {
    $.Struct.setUint64(0, value, this);
  }
  toString(): string {
    return "Node_NestedNode_" + super.toString();
  }
}
export class Node_SourceInfo_Member extends $.Struct {
  static readonly _capnp = {
    displayName: "Member",
    id: "c2ba9038898e1fa2",
    size: new $.ObjectSize(0, 1),
  };
  get docComment(): string {
    return $.Struct.getText(0, this);
  }
  set docComment(value: string) {
    $.Struct.setText(0, value, this);
  }
  toString(): string {
    return "Node_SourceInfo_Member_" + super.toString();
  }
}
export class Node_SourceInfo extends $.Struct {
  static readonly Member = Node_SourceInfo_Member;
  static readonly _capnp = {
    displayName: "SourceInfo",
    id: "f38e1de3041357ae",
    size: new $.ObjectSize(8, 2),
  };
  static _Members: $.ListCtor<Node_SourceInfo_Member>;
  get id(): bigint {
    return $.Struct.getUint64(0, this);
  }
  set id(value: bigint) {
    $.Struct.setUint64(0, value, this);
  }
  get docComment(): string {
    return $.Struct.getText(0, this);
  }
  set docComment(value: string) {
    $.Struct.setText(0, value, this);
  }
  adoptMembers(value: $.Orphan<$.List<Node_SourceInfo_Member>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownMembers(): $.Orphan<$.List<Node_SourceInfo_Member>> {
    return $.Struct.disown(this.members);
  }
  get members(): $.List<Node_SourceInfo_Member> {
    return $.Struct.getList(1, Node_SourceInfo._Members, this);
  }
  hasMembers(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initMembers(length: number): $.List<Node_SourceInfo_Member> {
    return $.Struct.initList(1, Node_SourceInfo._Members, length, this);
  }
  set members(value: $.List<Node_SourceInfo_Member>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Node_SourceInfo_" + super.toString();
  }
}
export class Node_Struct extends $.Struct {
  static readonly _capnp = {
    displayName: "struct",
    id: "9ea0b19b37fb4435",
    size: new $.ObjectSize(40, 6),
  };
  static _Fields: $.ListCtor<Field>;
  get dataWordCount(): number {
    return $.Struct.getUint16(14, this);
  }
  set dataWordCount(value: number) {
    $.Struct.setUint16(14, value, this);
  }
  get pointerCount(): number {
    return $.Struct.getUint16(24, this);
  }
  set pointerCount(value: number) {
    $.Struct.setUint16(24, value, this);
  }
  get preferredListEncoding(): ElementSize {
    return $.Struct.getUint16(26, this) as ElementSize;
  }
  set preferredListEncoding(value: ElementSize) {
    $.Struct.setUint16(26, value, this);
  }
  get isGroup(): boolean {
    return $.Struct.getBit(224, this);
  }
  set isGroup(value: boolean) {
    $.Struct.setBit(224, value, this);
  }
  get discriminantCount(): number {
    return $.Struct.getUint16(30, this);
  }
  set discriminantCount(value: number) {
    $.Struct.setUint16(30, value, this);
  }
  get discriminantOffset(): number {
    return $.Struct.getUint32(32, this);
  }
  set discriminantOffset(value: number) {
    $.Struct.setUint32(32, value, this);
  }
  adoptFields(value: $.Orphan<$.List<Field>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(3, this));
  }
  disownFields(): $.Orphan<$.List<Field>> {
    return $.Struct.disown(this.fields);
  }
  get fields(): $.List<Field> {
    return $.Struct.getList(3, Node_Struct._Fields, this);
  }
  hasFields(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(3, this));
  }
  initFields(length: number): $.List<Field> {
    return $.Struct.initList(3, Node_Struct._Fields, length, this);
  }
  set fields(value: $.List<Field>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(3, this));
  }
  toString(): string {
    return "Node_Struct_" + super.toString();
  }
}
export class Node_Enum extends $.Struct {
  static readonly _capnp = {
    displayName: "enum",
    id: "b54ab3364333f598",
    size: new $.ObjectSize(40, 6),
  };
  static _Enumerants: $.ListCtor<Enumerant>;
  adoptEnumerants(value: $.Orphan<$.List<Enumerant>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(3, this));
  }
  disownEnumerants(): $.Orphan<$.List<Enumerant>> {
    return $.Struct.disown(this.enumerants);
  }
  get enumerants(): $.List<Enumerant> {
    return $.Struct.getList(3, Node_Enum._Enumerants, this);
  }
  hasEnumerants(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(3, this));
  }
  initEnumerants(length: number): $.List<Enumerant> {
    return $.Struct.initList(3, Node_Enum._Enumerants, length, this);
  }
  set enumerants(value: $.List<Enumerant>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(3, this));
  }
  toString(): string {
    return "Node_Enum_" + super.toString();
  }
}
export class Node_Interface extends $.Struct {
  static readonly _capnp = {
    displayName: "interface",
    id: "e82753cff0c2218f",
    size: new $.ObjectSize(40, 6),
  };
  static _Methods: $.ListCtor<Method>;
  static _Superclasses: $.ListCtor<Superclass>;
  adoptMethods(value: $.Orphan<$.List<Method>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(3, this));
  }
  disownMethods(): $.Orphan<$.List<Method>> {
    return $.Struct.disown(this.methods);
  }
  get methods(): $.List<Method> {
    return $.Struct.getList(3, Node_Interface._Methods, this);
  }
  hasMethods(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(3, this));
  }
  initMethods(length: number): $.List<Method> {
    return $.Struct.initList(3, Node_Interface._Methods, length, this);
  }
  set methods(value: $.List<Method>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(3, this));
  }
  adoptSuperclasses(value: $.Orphan<$.List<Superclass>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(4, this));
  }
  disownSuperclasses(): $.Orphan<$.List<Superclass>> {
    return $.Struct.disown(this.superclasses);
  }
  get superclasses(): $.List<Superclass> {
    return $.Struct.getList(4, Node_Interface._Superclasses, this);
  }
  hasSuperclasses(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(4, this));
  }
  initSuperclasses(length: number): $.List<Superclass> {
    return $.Struct.initList(4, Node_Interface._Superclasses, length, this);
  }
  set superclasses(value: $.List<Superclass>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(4, this));
  }
  toString(): string {
    return "Node_Interface_" + super.toString();
  }
}
export class Node_Const extends $.Struct {
  static readonly _capnp = {
    displayName: "const",
    id: "b18aa5ac7a0d9420",
    size: new $.ObjectSize(40, 6),
  };
  adoptType(value: $.Orphan<Type>): void {
    $.Struct.adopt(value, $.Struct.getPointer(3, this));
  }
  disownType(): $.Orphan<Type> {
    return $.Struct.disown(this.type);
  }
  get type(): Type {
    return $.Struct.getStruct(3, Type, this);
  }
  hasType(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(3, this));
  }
  initType(): Type {
    return $.Struct.initStructAt(3, Type, this);
  }
  set type(value: Type) {
    $.Struct.copyFrom(value, $.Struct.getPointer(3, this));
  }
  adoptValue(value: $.Orphan<Value>): void {
    $.Struct.adopt(value, $.Struct.getPointer(4, this));
  }
  disownValue(): $.Orphan<Value> {
    return $.Struct.disown(this.value);
  }
  get value(): Value {
    return $.Struct.getStruct(4, Value, this);
  }
  hasValue(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(4, this));
  }
  initValue(): Value {
    return $.Struct.initStructAt(4, Value, this);
  }
  set value(value: Value) {
    $.Struct.copyFrom(value, $.Struct.getPointer(4, this));
  }
  toString(): string {
    return "Node_Const_" + super.toString();
  }
}
export class Node_Annotation extends $.Struct {
  static readonly _capnp = {
    displayName: "annotation",
    id: "ec1619d4400a0290",
    size: new $.ObjectSize(40, 6),
  };
  adoptType(value: $.Orphan<Type>): void {
    $.Struct.adopt(value, $.Struct.getPointer(3, this));
  }
  disownType(): $.Orphan<Type> {
    return $.Struct.disown(this.type);
  }
  get type(): Type {
    return $.Struct.getStruct(3, Type, this);
  }
  hasType(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(3, this));
  }
  initType(): Type {
    return $.Struct.initStructAt(3, Type, this);
  }
  set type(value: Type) {
    $.Struct.copyFrom(value, $.Struct.getPointer(3, this));
  }
  get targetsFile(): boolean {
    return $.Struct.getBit(112, this);
  }
  set targetsFile(value: boolean) {
    $.Struct.setBit(112, value, this);
  }
  get targetsConst(): boolean {
    return $.Struct.getBit(113, this);
  }
  set targetsConst(value: boolean) {
    $.Struct.setBit(113, value, this);
  }
  get targetsEnum(): boolean {
    return $.Struct.getBit(114, this);
  }
  set targetsEnum(value: boolean) {
    $.Struct.setBit(114, value, this);
  }
  get targetsEnumerant(): boolean {
    return $.Struct.getBit(115, this);
  }
  set targetsEnumerant(value: boolean) {
    $.Struct.setBit(115, value, this);
  }
  get targetsStruct(): boolean {
    return $.Struct.getBit(116, this);
  }
  set targetsStruct(value: boolean) {
    $.Struct.setBit(116, value, this);
  }
  get targetsField(): boolean {
    return $.Struct.getBit(117, this);
  }
  set targetsField(value: boolean) {
    $.Struct.setBit(117, value, this);
  }
  get targetsUnion(): boolean {
    return $.Struct.getBit(118, this);
  }
  set targetsUnion(value: boolean) {
    $.Struct.setBit(118, value, this);
  }
  get targetsGroup(): boolean {
    return $.Struct.getBit(119, this);
  }
  set targetsGroup(value: boolean) {
    $.Struct.setBit(119, value, this);
  }
  get targetsInterface(): boolean {
    return $.Struct.getBit(120, this);
  }
  set targetsInterface(value: boolean) {
    $.Struct.setBit(120, value, this);
  }
  get targetsMethod(): boolean {
    return $.Struct.getBit(121, this);
  }
  set targetsMethod(value: boolean) {
    $.Struct.setBit(121, value, this);
  }
  get targetsParam(): boolean {
    return $.Struct.getBit(122, this);
  }
  set targetsParam(value: boolean) {
    $.Struct.setBit(122, value, this);
  }
  get targetsAnnotation(): boolean {
    return $.Struct.getBit(123, this);
  }
  set targetsAnnotation(value: boolean) {
    $.Struct.setBit(123, value, this);
  }
  toString(): string {
    return "Node_Annotation_" + super.toString();
  }
}
export const Node_Which = {
  FILE: 0,
  STRUCT: 1,
  ENUM: 2,
  INTERFACE: 3,
  CONST: 4,
  ANNOTATION: 5,
} as const;
export type Node_Which = (typeof Node_Which)[keyof typeof Node_Which];
export class Node extends $.Struct {
  static readonly FILE = Node_Which.FILE;
  static readonly STRUCT = Node_Which.STRUCT;
  static readonly ENUM = Node_Which.ENUM;
  static readonly INTERFACE = Node_Which.INTERFACE;
  static readonly CONST = Node_Which.CONST;
  static readonly ANNOTATION = Node_Which.ANNOTATION;
  static readonly Parameter = Node_Parameter;
  static readonly NestedNode = Node_NestedNode;
  static readonly SourceInfo = Node_SourceInfo;
  static readonly _capnp = {
    displayName: "Node",
    id: "e682ab4cf923a417",
    size: new $.ObjectSize(40, 6),
  };
  static _Parameters: $.ListCtor<Node_Parameter>;
  static _NestedNodes: $.ListCtor<Node_NestedNode>;
  static _Annotations: $.ListCtor<Annotation>;
  get id(): bigint {
    return $.Struct.getUint64(0, this);
  }
  set id(value: bigint) {
    $.Struct.setUint64(0, value, this);
  }
  get displayName(): string {
    return $.Struct.getText(0, this);
  }
  set displayName(value: string) {
    $.Struct.setText(0, value, this);
  }
  get displayNamePrefixLength(): number {
    return $.Struct.getUint32(8, this);
  }
  set displayNamePrefixLength(value: number) {
    $.Struct.setUint32(8, value, this);
  }
  get scopeId(): bigint {
    return $.Struct.getUint64(16, this);
  }
  set scopeId(value: bigint) {
    $.Struct.setUint64(16, value, this);
  }
  adoptParameters(value: $.Orphan<$.List<Node_Parameter>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(5, this));
  }
  disownParameters(): $.Orphan<$.List<Node_Parameter>> {
    return $.Struct.disown(this.parameters);
  }
  get parameters(): $.List<Node_Parameter> {
    return $.Struct.getList(5, Node._Parameters, this);
  }
  hasParameters(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(5, this));
  }
  initParameters(length: number): $.List<Node_Parameter> {
    return $.Struct.initList(5, Node._Parameters, length, this);
  }
  set parameters(value: $.List<Node_Parameter>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(5, this));
  }
  get isGeneric(): boolean {
    return $.Struct.getBit(288, this);
  }
  set isGeneric(value: boolean) {
    $.Struct.setBit(288, value, this);
  }
  adoptNestedNodes(value: $.Orphan<$.List<Node_NestedNode>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownNestedNodes(): $.Orphan<$.List<Node_NestedNode>> {
    return $.Struct.disown(this.nestedNodes);
  }
  get nestedNodes(): $.List<Node_NestedNode> {
    return $.Struct.getList(1, Node._NestedNodes, this);
  }
  hasNestedNodes(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initNestedNodes(length: number): $.List<Node_NestedNode> {
    return $.Struct.initList(1, Node._NestedNodes, length, this);
  }
  set nestedNodes(value: $.List<Node_NestedNode>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  adoptAnnotations(value: $.Orphan<$.List<Annotation>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(2, this));
  }
  disownAnnotations(): $.Orphan<$.List<Annotation>> {
    return $.Struct.disown(this.annotations);
  }
  get annotations(): $.List<Annotation> {
    return $.Struct.getList(2, Node._Annotations, this);
  }
  hasAnnotations(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(2, this));
  }
  initAnnotations(length: number): $.List<Annotation> {
    return $.Struct.initList(2, Node._Annotations, length, this);
  }
  set annotations(value: $.List<Annotation>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(2, this));
  }
  isFile(): boolean {
    return $.Struct.getUint16(12, this) === 0;
  }
  set file(_: true) {
    $.Struct.setUint16(12, 0, this);
  }
  get struct(): Node_Struct {
    $.Struct.testWhich("struct", $.Struct.getUint16(12, this), 1, this);
    return $.Struct.getAs(Node_Struct, this);
  }
  initStruct(): Node_Struct {
    $.Struct.setUint16(12, 1, this);
    return $.Struct.getAs(Node_Struct, this);
  }
  isStruct(): boolean {
    return $.Struct.getUint16(12, this) === 1;
  }
  set struct(_: true) {
    $.Struct.setUint16(12, 1, this);
  }
  get enum(): Node_Enum {
    $.Struct.testWhich("enum", $.Struct.getUint16(12, this), 2, this);
    return $.Struct.getAs(Node_Enum, this);
  }
  initEnum(): Node_Enum {
    $.Struct.setUint16(12, 2, this);
    return $.Struct.getAs(Node_Enum, this);
  }
  isEnum(): boolean {
    return $.Struct.getUint16(12, this) === 2;
  }
  set enum(_: true) {
    $.Struct.setUint16(12, 2, this);
  }
  get interface(): Node_Interface {
    $.Struct.testWhich("interface", $.Struct.getUint16(12, this), 3, this);
    return $.Struct.getAs(Node_Interface, this);
  }
  initInterface(): Node_Interface {
    $.Struct.setUint16(12, 3, this);
    return $.Struct.getAs(Node_Interface, this);
  }
  isInterface(): boolean {
    return $.Struct.getUint16(12, this) === 3;
  }
  set interface(_: true) {
    $.Struct.setUint16(12, 3, this);
  }
  get const(): Node_Const {
    $.Struct.testWhich("const", $.Struct.getUint16(12, this), 4, this);
    return $.Struct.getAs(Node_Const, this);
  }
  initConst(): Node_Const {
    $.Struct.setUint16(12, 4, this);
    return $.Struct.getAs(Node_Const, this);
  }
  isConst(): boolean {
    return $.Struct.getUint16(12, this) === 4;
  }
  set const(_: true) {
    $.Struct.setUint16(12, 4, this);
  }
  get annotation(): Node_Annotation {
    $.Struct.testWhich("annotation", $.Struct.getUint16(12, this), 5, this);
    return $.Struct.getAs(Node_Annotation, this);
  }
  initAnnotation(): Node_Annotation {
    $.Struct.setUint16(12, 5, this);
    return $.Struct.getAs(Node_Annotation, this);
  }
  isAnnotation(): boolean {
    return $.Struct.getUint16(12, this) === 5;
  }
  set annotation(_: true) {
    $.Struct.setUint16(12, 5, this);
  }
  toString(): string {
    return "Node_" + super.toString();
  }
  which(): Node_Which {
    return $.Struct.getUint16(12, this) as Node_Which;
  }
}
export class Field_Slot extends $.Struct {
  static readonly _capnp = {
    displayName: "slot",
    id: "c42305476bb4746f",
    size: new $.ObjectSize(24, 4),
  };
  get offset(): number {
    return $.Struct.getUint32(4, this);
  }
  set offset(value: number) {
    $.Struct.setUint32(4, value, this);
  }
  adoptType(value: $.Orphan<Type>): void {
    $.Struct.adopt(value, $.Struct.getPointer(2, this));
  }
  disownType(): $.Orphan<Type> {
    return $.Struct.disown(this.type);
  }
  get type(): Type {
    return $.Struct.getStruct(2, Type, this);
  }
  hasType(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(2, this));
  }
  initType(): Type {
    return $.Struct.initStructAt(2, Type, this);
  }
  set type(value: Type) {
    $.Struct.copyFrom(value, $.Struct.getPointer(2, this));
  }
  adoptDefaultValue(value: $.Orphan<Value>): void {
    $.Struct.adopt(value, $.Struct.getPointer(3, this));
  }
  disownDefaultValue(): $.Orphan<Value> {
    return $.Struct.disown(this.defaultValue);
  }
  get defaultValue(): Value {
    return $.Struct.getStruct(3, Value, this);
  }
  hasDefaultValue(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(3, this));
  }
  initDefaultValue(): Value {
    return $.Struct.initStructAt(3, Value, this);
  }
  set defaultValue(value: Value) {
    $.Struct.copyFrom(value, $.Struct.getPointer(3, this));
  }
  get hadExplicitDefault(): boolean {
    return $.Struct.getBit(128, this);
  }
  set hadExplicitDefault(value: boolean) {
    $.Struct.setBit(128, value, this);
  }
  toString(): string {
    return "Field_Slot_" + super.toString();
  }
}
export class Field_Group extends $.Struct {
  static readonly _capnp = {
    displayName: "group",
    id: "cafccddb68db1d11",
    size: new $.ObjectSize(24, 4),
  };
  get typeId(): bigint {
    return $.Struct.getUint64(16, this);
  }
  set typeId(value: bigint) {
    $.Struct.setUint64(16, value, this);
  }
  toString(): string {
    return "Field_Group_" + super.toString();
  }
}
export const Field_Ordinal_Which = {
  IMPLICIT: 0,
  EXPLICIT: 1,
} as const;
export type Field_Ordinal_Which =
  (typeof Field_Ordinal_Which)[keyof typeof Field_Ordinal_Which];
export class Field_Ordinal extends $.Struct {
  static readonly IMPLICIT = Field_Ordinal_Which.IMPLICIT;
  static readonly EXPLICIT = Field_Ordinal_Which.EXPLICIT;
  static readonly _capnp = {
    displayName: "ordinal",
    id: "bb90d5c287870be6",
    size: new $.ObjectSize(24, 4),
  };
  isImplicit(): boolean {
    return $.Struct.getUint16(10, this) === 0;
  }
  set implicit(_: true) {
    $.Struct.setUint16(10, 0, this);
  }
  get explicit(): number {
    $.Struct.testWhich("explicit", $.Struct.getUint16(10, this), 1, this);
    return $.Struct.getUint16(12, this);
  }
  isExplicit(): boolean {
    return $.Struct.getUint16(10, this) === 1;
  }
  set explicit(value: number) {
    $.Struct.setUint16(10, 1, this);
    $.Struct.setUint16(12, value, this);
  }
  toString(): string {
    return "Field_Ordinal_" + super.toString();
  }
  which(): Field_Ordinal_Which {
    return $.Struct.getUint16(10, this) as Field_Ordinal_Which;
  }
}
export const Field_Which = {
  SLOT: 0,
  GROUP: 1,
} as const;
export type Field_Which = (typeof Field_Which)[keyof typeof Field_Which];
export class Field extends $.Struct {
  static readonly NO_DISCRIMINANT = 65_535;
  static readonly SLOT = Field_Which.SLOT;
  static readonly GROUP = Field_Which.GROUP;
  static readonly _capnp = {
    displayName: "Field",
    id: "9aad50a41f4af45f",
    size: new $.ObjectSize(24, 4),
    defaultDiscriminantValue: $.getUint16Mask(65_535),
  };
  static _Annotations: $.ListCtor<Annotation>;
  get name(): string {
    return $.Struct.getText(0, this);
  }
  set name(value: string) {
    $.Struct.setText(0, value, this);
  }
  get codeOrder(): number {
    return $.Struct.getUint16(0, this);
  }
  set codeOrder(value: number) {
    $.Struct.setUint16(0, value, this);
  }
  adoptAnnotations(value: $.Orphan<$.List<Annotation>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownAnnotations(): $.Orphan<$.List<Annotation>> {
    return $.Struct.disown(this.annotations);
  }
  get annotations(): $.List<Annotation> {
    return $.Struct.getList(1, Field._Annotations, this);
  }
  hasAnnotations(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initAnnotations(length: number): $.List<Annotation> {
    return $.Struct.initList(1, Field._Annotations, length, this);
  }
  set annotations(value: $.List<Annotation>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  get discriminantValue(): number {
    return $.Struct.getUint16(2, this, Field._capnp.defaultDiscriminantValue);
  }
  set discriminantValue(value: number) {
    $.Struct.setUint16(2, value, this, Field._capnp.defaultDiscriminantValue);
  }
  get slot(): Field_Slot {
    $.Struct.testWhich("slot", $.Struct.getUint16(8, this), 0, this);
    return $.Struct.getAs(Field_Slot, this);
  }
  initSlot(): Field_Slot {
    $.Struct.setUint16(8, 0, this);
    return $.Struct.getAs(Field_Slot, this);
  }
  isSlot(): boolean {
    return $.Struct.getUint16(8, this) === 0;
  }
  set slot(_: true) {
    $.Struct.setUint16(8, 0, this);
  }
  get group(): Field_Group {
    $.Struct.testWhich("group", $.Struct.getUint16(8, this), 1, this);
    return $.Struct.getAs(Field_Group, this);
  }
  initGroup(): Field_Group {
    $.Struct.setUint16(8, 1, this);
    return $.Struct.getAs(Field_Group, this);
  }
  isGroup(): boolean {
    return $.Struct.getUint16(8, this) === 1;
  }
  set group(_: true) {
    $.Struct.setUint16(8, 1, this);
  }
  get ordinal(): Field_Ordinal {
    return $.Struct.getAs(Field_Ordinal, this);
  }
  initOrdinal(): Field_Ordinal {
    return $.Struct.getAs(Field_Ordinal, this);
  }
  toString(): string {
    return "Field_" + super.toString();
  }
  which(): Field_Which {
    return $.Struct.getUint16(8, this) as Field_Which;
  }
}
export class Enumerant extends $.Struct {
  static readonly _capnp = {
    displayName: "Enumerant",
    id: "978a7cebdc549a4d",
    size: new $.ObjectSize(8, 2),
  };
  static _Annotations: $.ListCtor<Annotation>;
  get name(): string {
    return $.Struct.getText(0, this);
  }
  set name(value: string) {
    $.Struct.setText(0, value, this);
  }
  get codeOrder(): number {
    return $.Struct.getUint16(0, this);
  }
  set codeOrder(value: number) {
    $.Struct.setUint16(0, value, this);
  }
  adoptAnnotations(value: $.Orphan<$.List<Annotation>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownAnnotations(): $.Orphan<$.List<Annotation>> {
    return $.Struct.disown(this.annotations);
  }
  get annotations(): $.List<Annotation> {
    return $.Struct.getList(1, Enumerant._Annotations, this);
  }
  hasAnnotations(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initAnnotations(length: number): $.List<Annotation> {
    return $.Struct.initList(1, Enumerant._Annotations, length, this);
  }
  set annotations(value: $.List<Annotation>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Enumerant_" + super.toString();
  }
}
export class Superclass extends $.Struct {
  static readonly _capnp = {
    displayName: "Superclass",
    id: "a9962a9ed0a4d7f8",
    size: new $.ObjectSize(8, 1),
  };
  get id(): bigint {
    return $.Struct.getUint64(0, this);
  }
  set id(value: bigint) {
    $.Struct.setUint64(0, value, this);
  }
  adoptBrand(value: $.Orphan<Brand>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownBrand(): $.Orphan<Brand> {
    return $.Struct.disown(this.brand);
  }
  get brand(): Brand {
    return $.Struct.getStruct(0, Brand, this);
  }
  hasBrand(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initBrand(): Brand {
    return $.Struct.initStructAt(0, Brand, this);
  }
  set brand(value: Brand) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Superclass_" + super.toString();
  }
}
export class Method extends $.Struct {
  static readonly _capnp = {
    displayName: "Method",
    id: "9500cce23b334d80",
    size: new $.ObjectSize(24, 5),
  };
  static _ImplicitParameters: $.ListCtor<Node_Parameter>;
  static _Annotations: $.ListCtor<Annotation>;
  get name(): string {
    return $.Struct.getText(0, this);
  }
  set name(value: string) {
    $.Struct.setText(0, value, this);
  }
  get codeOrder(): number {
    return $.Struct.getUint16(0, this);
  }
  set codeOrder(value: number) {
    $.Struct.setUint16(0, value, this);
  }
  adoptImplicitParameters(value: $.Orphan<$.List<Node_Parameter>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(4, this));
  }
  disownImplicitParameters(): $.Orphan<$.List<Node_Parameter>> {
    return $.Struct.disown(this.implicitParameters);
  }
  get implicitParameters(): $.List<Node_Parameter> {
    return $.Struct.getList(4, Method._ImplicitParameters, this);
  }
  hasImplicitParameters(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(4, this));
  }
  initImplicitParameters(length: number): $.List<Node_Parameter> {
    return $.Struct.initList(4, Method._ImplicitParameters, length, this);
  }
  set implicitParameters(value: $.List<Node_Parameter>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(4, this));
  }
  get paramStructType(): bigint {
    return $.Struct.getUint64(8, this);
  }
  set paramStructType(value: bigint) {
    $.Struct.setUint64(8, value, this);
  }
  adoptParamBrand(value: $.Orphan<Brand>): void {
    $.Struct.adopt(value, $.Struct.getPointer(2, this));
  }
  disownParamBrand(): $.Orphan<Brand> {
    return $.Struct.disown(this.paramBrand);
  }
  get paramBrand(): Brand {
    return $.Struct.getStruct(2, Brand, this);
  }
  hasParamBrand(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(2, this));
  }
  initParamBrand(): Brand {
    return $.Struct.initStructAt(2, Brand, this);
  }
  set paramBrand(value: Brand) {
    $.Struct.copyFrom(value, $.Struct.getPointer(2, this));
  }
  get resultStructType(): bigint {
    return $.Struct.getUint64(16, this);
  }
  set resultStructType(value: bigint) {
    $.Struct.setUint64(16, value, this);
  }
  adoptResultBrand(value: $.Orphan<Brand>): void {
    $.Struct.adopt(value, $.Struct.getPointer(3, this));
  }
  disownResultBrand(): $.Orphan<Brand> {
    return $.Struct.disown(this.resultBrand);
  }
  get resultBrand(): Brand {
    return $.Struct.getStruct(3, Brand, this);
  }
  hasResultBrand(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(3, this));
  }
  initResultBrand(): Brand {
    return $.Struct.initStructAt(3, Brand, this);
  }
  set resultBrand(value: Brand) {
    $.Struct.copyFrom(value, $.Struct.getPointer(3, this));
  }
  adoptAnnotations(value: $.Orphan<$.List<Annotation>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownAnnotations(): $.Orphan<$.List<Annotation>> {
    return $.Struct.disown(this.annotations);
  }
  get annotations(): $.List<Annotation> {
    return $.Struct.getList(1, Method._Annotations, this);
  }
  hasAnnotations(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initAnnotations(length: number): $.List<Annotation> {
    return $.Struct.initList(1, Method._Annotations, length, this);
  }
  set annotations(value: $.List<Annotation>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Method_" + super.toString();
  }
}
export class Type_List extends $.Struct {
  static readonly _capnp = {
    displayName: "list",
    id: "87e739250a60ea97",
    size: new $.ObjectSize(24, 1),
  };
  adoptElementType(value: $.Orphan<Type>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownElementType(): $.Orphan<Type> {
    return $.Struct.disown(this.elementType);
  }
  get elementType(): Type {
    return $.Struct.getStruct(0, Type, this);
  }
  hasElementType(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initElementType(): Type {
    return $.Struct.initStructAt(0, Type, this);
  }
  set elementType(value: Type) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Type_List_" + super.toString();
  }
}
export class Type_Enum extends $.Struct {
  static readonly _capnp = {
    displayName: "enum",
    id: "9e0e78711a7f87a9",
    size: new $.ObjectSize(24, 1),
  };
  get typeId(): bigint {
    return $.Struct.getUint64(8, this);
  }
  set typeId(value: bigint) {
    $.Struct.setUint64(8, value, this);
  }
  adoptBrand(value: $.Orphan<Brand>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownBrand(): $.Orphan<Brand> {
    return $.Struct.disown(this.brand);
  }
  get brand(): Brand {
    return $.Struct.getStruct(0, Brand, this);
  }
  hasBrand(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initBrand(): Brand {
    return $.Struct.initStructAt(0, Brand, this);
  }
  set brand(value: Brand) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Type_Enum_" + super.toString();
  }
}
export class Type_Struct extends $.Struct {
  static readonly _capnp = {
    displayName: "struct",
    id: "ac3a6f60ef4cc6d3",
    size: new $.ObjectSize(24, 1),
  };
  get typeId(): bigint {
    return $.Struct.getUint64(8, this);
  }
  set typeId(value: bigint) {
    $.Struct.setUint64(8, value, this);
  }
  adoptBrand(value: $.Orphan<Brand>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownBrand(): $.Orphan<Brand> {
    return $.Struct.disown(this.brand);
  }
  get brand(): Brand {
    return $.Struct.getStruct(0, Brand, this);
  }
  hasBrand(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initBrand(): Brand {
    return $.Struct.initStructAt(0, Brand, this);
  }
  set brand(value: Brand) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Type_Struct_" + super.toString();
  }
}
export class Type_Interface extends $.Struct {
  static readonly _capnp = {
    displayName: "interface",
    id: "ed8bca69f7fb0cbf",
    size: new $.ObjectSize(24, 1),
  };
  get typeId(): bigint {
    return $.Struct.getUint64(8, this);
  }
  set typeId(value: bigint) {
    $.Struct.setUint64(8, value, this);
  }
  adoptBrand(value: $.Orphan<Brand>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownBrand(): $.Orphan<Brand> {
    return $.Struct.disown(this.brand);
  }
  get brand(): Brand {
    return $.Struct.getStruct(0, Brand, this);
  }
  hasBrand(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initBrand(): Brand {
    return $.Struct.initStructAt(0, Brand, this);
  }
  set brand(value: Brand) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Type_Interface_" + super.toString();
  }
}
export const Type_AnyPointer_Unconstrained_Which = {
  ANY_KIND: 0,
  STRUCT: 1,
  LIST: 2,
  CAPABILITY: 3,
} as const;
export type Type_AnyPointer_Unconstrained_Which =
  (typeof Type_AnyPointer_Unconstrained_Which)[keyof typeof Type_AnyPointer_Unconstrained_Which];
export class Type_AnyPointer_Unconstrained extends $.Struct {
  static readonly ANY_KIND = Type_AnyPointer_Unconstrained_Which.ANY_KIND;
  static readonly STRUCT = Type_AnyPointer_Unconstrained_Which.STRUCT;
  static readonly LIST = Type_AnyPointer_Unconstrained_Which.LIST;
  static readonly CAPABILITY = Type_AnyPointer_Unconstrained_Which.CAPABILITY;
  static readonly _capnp = {
    displayName: "unconstrained",
    id: "8e3b5f79fe593656",
    size: new $.ObjectSize(24, 1),
  };
  isAnyKind(): boolean {
    return $.Struct.getUint16(10, this) === 0;
  }
  set anyKind(_: true) {
    $.Struct.setUint16(10, 0, this);
  }
  isStruct(): boolean {
    return $.Struct.getUint16(10, this) === 1;
  }
  set struct(_: true) {
    $.Struct.setUint16(10, 1, this);
  }
  isList(): boolean {
    return $.Struct.getUint16(10, this) === 2;
  }
  set list(_: true) {
    $.Struct.setUint16(10, 2, this);
  }
  isCapability(): boolean {
    return $.Struct.getUint16(10, this) === 3;
  }
  set capability(_: true) {
    $.Struct.setUint16(10, 3, this);
  }
  toString(): string {
    return "Type_AnyPointer_Unconstrained_" + super.toString();
  }
  which(): Type_AnyPointer_Unconstrained_Which {
    return $.Struct.getUint16(10, this) as Type_AnyPointer_Unconstrained_Which;
  }
}
export class Type_AnyPointer_Parameter extends $.Struct {
  static readonly _capnp = {
    displayName: "parameter",
    id: "9dd1f724f4614a85",
    size: new $.ObjectSize(24, 1),
  };
  get scopeId(): bigint {
    return $.Struct.getUint64(16, this);
  }
  set scopeId(value: bigint) {
    $.Struct.setUint64(16, value, this);
  }
  get parameterIndex(): number {
    return $.Struct.getUint16(10, this);
  }
  set parameterIndex(value: number) {
    $.Struct.setUint16(10, value, this);
  }
  toString(): string {
    return "Type_AnyPointer_Parameter_" + super.toString();
  }
}
export class Type_AnyPointer_ImplicitMethodParameter extends $.Struct {
  static readonly _capnp = {
    displayName: "implicitMethodParameter",
    id: "baefc9120c56e274",
    size: new $.ObjectSize(24, 1),
  };
  get parameterIndex(): number {
    return $.Struct.getUint16(10, this);
  }
  set parameterIndex(value: number) {
    $.Struct.setUint16(10, value, this);
  }
  toString(): string {
    return "Type_AnyPointer_ImplicitMethodParameter_" + super.toString();
  }
}
export const Type_AnyPointer_Which = {
  UNCONSTRAINED: 0,
  PARAMETER: 1,
  IMPLICIT_METHOD_PARAMETER: 2,
} as const;
export type Type_AnyPointer_Which =
  (typeof Type_AnyPointer_Which)[keyof typeof Type_AnyPointer_Which];
export class Type_AnyPointer extends $.Struct {
  static readonly UNCONSTRAINED = Type_AnyPointer_Which.UNCONSTRAINED;
  static readonly PARAMETER = Type_AnyPointer_Which.PARAMETER;
  static readonly IMPLICIT_METHOD_PARAMETER =
    Type_AnyPointer_Which.IMPLICIT_METHOD_PARAMETER;
  static readonly _capnp = {
    displayName: "anyPointer",
    id: "c2573fe8a23e49f1",
    size: new $.ObjectSize(24, 1),
  };
  get unconstrained(): Type_AnyPointer_Unconstrained {
    $.Struct.testWhich("unconstrained", $.Struct.getUint16(8, this), 0, this);
    return $.Struct.getAs(Type_AnyPointer_Unconstrained, this);
  }
  initUnconstrained(): Type_AnyPointer_Unconstrained {
    $.Struct.setUint16(8, 0, this);
    return $.Struct.getAs(Type_AnyPointer_Unconstrained, this);
  }
  isUnconstrained(): boolean {
    return $.Struct.getUint16(8, this) === 0;
  }
  set unconstrained(_: true) {
    $.Struct.setUint16(8, 0, this);
  }
  get parameter(): Type_AnyPointer_Parameter {
    $.Struct.testWhich("parameter", $.Struct.getUint16(8, this), 1, this);
    return $.Struct.getAs(Type_AnyPointer_Parameter, this);
  }
  initParameter(): Type_AnyPointer_Parameter {
    $.Struct.setUint16(8, 1, this);
    return $.Struct.getAs(Type_AnyPointer_Parameter, this);
  }
  isParameter(): boolean {
    return $.Struct.getUint16(8, this) === 1;
  }
  set parameter(_: true) {
    $.Struct.setUint16(8, 1, this);
  }
  get implicitMethodParameter(): Type_AnyPointer_ImplicitMethodParameter {
    $.Struct.testWhich(
      "implicitMethodParameter",
      $.Struct.getUint16(8, this),
      2,
      this,
    );
    return $.Struct.getAs(Type_AnyPointer_ImplicitMethodParameter, this);
  }
  initImplicitMethodParameter(): Type_AnyPointer_ImplicitMethodParameter {
    $.Struct.setUint16(8, 2, this);
    return $.Struct.getAs(Type_AnyPointer_ImplicitMethodParameter, this);
  }
  isImplicitMethodParameter(): boolean {
    return $.Struct.getUint16(8, this) === 2;
  }
  set implicitMethodParameter(_: true) {
    $.Struct.setUint16(8, 2, this);
  }
  toString(): string {
    return "Type_AnyPointer_" + super.toString();
  }
  which(): Type_AnyPointer_Which {
    return $.Struct.getUint16(8, this) as Type_AnyPointer_Which;
  }
}
export const Type_Which = {
  VOID: 0,
  BOOL: 1,
  INT8: 2,
  INT16: 3,
  INT32: 4,
  INT64: 5,
  UINT8: 6,
  UINT16: 7,
  UINT32: 8,
  UINT64: 9,
  FLOAT32: 10,
  FLOAT64: 11,
  TEXT: 12,
  DATA: 13,
  LIST: 14,
  ENUM: 15,
  STRUCT: 16,
  INTERFACE: 17,
  ANY_POINTER: 18,
} as const;
export type Type_Which = (typeof Type_Which)[keyof typeof Type_Which];
export class Type extends $.Struct {
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
    size: new $.ObjectSize(24, 1),
  };
  isVoid(): boolean {
    return $.Struct.getUint16(0, this) === 0;
  }
  set void(_: true) {
    $.Struct.setUint16(0, 0, this);
  }
  isBool(): boolean {
    return $.Struct.getUint16(0, this) === 1;
  }
  set bool(_: true) {
    $.Struct.setUint16(0, 1, this);
  }
  isInt8(): boolean {
    return $.Struct.getUint16(0, this) === 2;
  }
  set int8(_: true) {
    $.Struct.setUint16(0, 2, this);
  }
  isInt16(): boolean {
    return $.Struct.getUint16(0, this) === 3;
  }
  set int16(_: true) {
    $.Struct.setUint16(0, 3, this);
  }
  isInt32(): boolean {
    return $.Struct.getUint16(0, this) === 4;
  }
  set int32(_: true) {
    $.Struct.setUint16(0, 4, this);
  }
  isInt64(): boolean {
    return $.Struct.getUint16(0, this) === 5;
  }
  set int64(_: true) {
    $.Struct.setUint16(0, 5, this);
  }
  isUint8(): boolean {
    return $.Struct.getUint16(0, this) === 6;
  }
  set uint8(_: true) {
    $.Struct.setUint16(0, 6, this);
  }
  isUint16(): boolean {
    return $.Struct.getUint16(0, this) === 7;
  }
  set uint16(_: true) {
    $.Struct.setUint16(0, 7, this);
  }
  isUint32(): boolean {
    return $.Struct.getUint16(0, this) === 8;
  }
  set uint32(_: true) {
    $.Struct.setUint16(0, 8, this);
  }
  isUint64(): boolean {
    return $.Struct.getUint16(0, this) === 9;
  }
  set uint64(_: true) {
    $.Struct.setUint16(0, 9, this);
  }
  isFloat32(): boolean {
    return $.Struct.getUint16(0, this) === 10;
  }
  set float32(_: true) {
    $.Struct.setUint16(0, 10, this);
  }
  isFloat64(): boolean {
    return $.Struct.getUint16(0, this) === 11;
  }
  set float64(_: true) {
    $.Struct.setUint16(0, 11, this);
  }
  isText(): boolean {
    return $.Struct.getUint16(0, this) === 12;
  }
  set text(_: true) {
    $.Struct.setUint16(0, 12, this);
  }
  isData(): boolean {
    return $.Struct.getUint16(0, this) === 13;
  }
  set data(_: true) {
    $.Struct.setUint16(0, 13, this);
  }
  get list(): Type_List {
    $.Struct.testWhich("list", $.Struct.getUint16(0, this), 14, this);
    return $.Struct.getAs(Type_List, this);
  }
  initList(): Type_List {
    $.Struct.setUint16(0, 14, this);
    return $.Struct.getAs(Type_List, this);
  }
  isList(): boolean {
    return $.Struct.getUint16(0, this) === 14;
  }
  set list(_: true) {
    $.Struct.setUint16(0, 14, this);
  }
  get enum(): Type_Enum {
    $.Struct.testWhich("enum", $.Struct.getUint16(0, this), 15, this);
    return $.Struct.getAs(Type_Enum, this);
  }
  initEnum(): Type_Enum {
    $.Struct.setUint16(0, 15, this);
    return $.Struct.getAs(Type_Enum, this);
  }
  isEnum(): boolean {
    return $.Struct.getUint16(0, this) === 15;
  }
  set enum(_: true) {
    $.Struct.setUint16(0, 15, this);
  }
  get struct(): Type_Struct {
    $.Struct.testWhich("struct", $.Struct.getUint16(0, this), 16, this);
    return $.Struct.getAs(Type_Struct, this);
  }
  initStruct(): Type_Struct {
    $.Struct.setUint16(0, 16, this);
    return $.Struct.getAs(Type_Struct, this);
  }
  isStruct(): boolean {
    return $.Struct.getUint16(0, this) === 16;
  }
  set struct(_: true) {
    $.Struct.setUint16(0, 16, this);
  }
  get interface(): Type_Interface {
    $.Struct.testWhich("interface", $.Struct.getUint16(0, this), 17, this);
    return $.Struct.getAs(Type_Interface, this);
  }
  initInterface(): Type_Interface {
    $.Struct.setUint16(0, 17, this);
    return $.Struct.getAs(Type_Interface, this);
  }
  isInterface(): boolean {
    return $.Struct.getUint16(0, this) === 17;
  }
  set interface(_: true) {
    $.Struct.setUint16(0, 17, this);
  }
  get anyPointer(): Type_AnyPointer {
    $.Struct.testWhich("anyPointer", $.Struct.getUint16(0, this), 18, this);
    return $.Struct.getAs(Type_AnyPointer, this);
  }
  initAnyPointer(): Type_AnyPointer {
    $.Struct.setUint16(0, 18, this);
    return $.Struct.getAs(Type_AnyPointer, this);
  }
  isAnyPointer(): boolean {
    return $.Struct.getUint16(0, this) === 18;
  }
  set anyPointer(_: true) {
    $.Struct.setUint16(0, 18, this);
  }
  toString(): string {
    return "Type_" + super.toString();
  }
  which(): Type_Which {
    return $.Struct.getUint16(0, this) as Type_Which;
  }
}
export const Brand_Scope_Which = {
  BIND: 0,
  INHERIT: 1,
} as const;
export type Brand_Scope_Which =
  (typeof Brand_Scope_Which)[keyof typeof Brand_Scope_Which];
export class Brand_Scope extends $.Struct {
  static readonly BIND = Brand_Scope_Which.BIND;
  static readonly INHERIT = Brand_Scope_Which.INHERIT;
  static readonly _capnp = {
    displayName: "Scope",
    id: "abd73485a9636bc9",
    size: new $.ObjectSize(16, 1),
  };
  static _Bind: $.ListCtor<Brand_Binding>;
  get scopeId(): bigint {
    return $.Struct.getUint64(0, this);
  }
  set scopeId(value: bigint) {
    $.Struct.setUint64(0, value, this);
  }
  adoptBind(value: $.Orphan<$.List<Brand_Binding>>): void {
    $.Struct.setUint16(8, 0, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownBind(): $.Orphan<$.List<Brand_Binding>> {
    return $.Struct.disown(this.bind);
  }
  get bind(): $.List<Brand_Binding> {
    $.Struct.testWhich("bind", $.Struct.getUint16(8, this), 0, this);
    return $.Struct.getList(0, Brand_Scope._Bind, this);
  }
  hasBind(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initBind(length: number): $.List<Brand_Binding> {
    $.Struct.setUint16(8, 0, this);
    return $.Struct.initList(0, Brand_Scope._Bind, length, this);
  }
  isBind(): boolean {
    return $.Struct.getUint16(8, this) === 0;
  }
  set bind(value: $.List<Brand_Binding>) {
    $.Struct.setUint16(8, 0, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  isInherit(): boolean {
    return $.Struct.getUint16(8, this) === 1;
  }
  set inherit(_: true) {
    $.Struct.setUint16(8, 1, this);
  }
  toString(): string {
    return "Brand_Scope_" + super.toString();
  }
  which(): Brand_Scope_Which {
    return $.Struct.getUint16(8, this) as Brand_Scope_Which;
  }
}
export const Brand_Binding_Which = {
  UNBOUND: 0,
  TYPE: 1,
} as const;
export type Brand_Binding_Which =
  (typeof Brand_Binding_Which)[keyof typeof Brand_Binding_Which];
export class Brand_Binding extends $.Struct {
  static readonly UNBOUND = Brand_Binding_Which.UNBOUND;
  static readonly TYPE = Brand_Binding_Which.TYPE;
  static readonly _capnp = {
    displayName: "Binding",
    id: "c863cd16969ee7fc",
    size: new $.ObjectSize(8, 1),
  };
  isUnbound(): boolean {
    return $.Struct.getUint16(0, this) === 0;
  }
  set unbound(_: true) {
    $.Struct.setUint16(0, 0, this);
  }
  adoptType(value: $.Orphan<Type>): void {
    $.Struct.setUint16(0, 1, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownType(): $.Orphan<Type> {
    return $.Struct.disown(this.type);
  }
  get type(): Type {
    $.Struct.testWhich("type", $.Struct.getUint16(0, this), 1, this);
    return $.Struct.getStruct(0, Type, this);
  }
  hasType(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initType(): Type {
    $.Struct.setUint16(0, 1, this);
    return $.Struct.initStructAt(0, Type, this);
  }
  isType(): boolean {
    return $.Struct.getUint16(0, this) === 1;
  }
  set type(value: Type) {
    $.Struct.setUint16(0, 1, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Brand_Binding_" + super.toString();
  }
  which(): Brand_Binding_Which {
    return $.Struct.getUint16(0, this) as Brand_Binding_Which;
  }
}
export class Brand extends $.Struct {
  static readonly Scope = Brand_Scope;
  static readonly Binding = Brand_Binding;
  static readonly _capnp = {
    displayName: "Brand",
    id: "903455f06065422b",
    size: new $.ObjectSize(0, 1),
  };
  static _Scopes: $.ListCtor<Brand_Scope>;
  adoptScopes(value: $.Orphan<$.List<Brand_Scope>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownScopes(): $.Orphan<$.List<Brand_Scope>> {
    return $.Struct.disown(this.scopes);
  }
  get scopes(): $.List<Brand_Scope> {
    return $.Struct.getList(0, Brand._Scopes, this);
  }
  hasScopes(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initScopes(length: number): $.List<Brand_Scope> {
    return $.Struct.initList(0, Brand._Scopes, length, this);
  }
  set scopes(value: $.List<Brand_Scope>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Brand_" + super.toString();
  }
}
export const Value_Which = {
  VOID: 0,
  BOOL: 1,
  INT8: 2,
  INT16: 3,
  INT32: 4,
  INT64: 5,
  UINT8: 6,
  UINT16: 7,
  UINT32: 8,
  UINT64: 9,
  FLOAT32: 10,
  FLOAT64: 11,
  TEXT: 12,
  DATA: 13,
  LIST: 14,
  ENUM: 15,
  STRUCT: 16,
  INTERFACE: 17,
  ANY_POINTER: 18,
} as const;
export type Value_Which = (typeof Value_Which)[keyof typeof Value_Which];
export class Value extends $.Struct {
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
    size: new $.ObjectSize(16, 1),
  };
  isVoid(): boolean {
    return $.Struct.getUint16(0, this) === 0;
  }
  set void(_: true) {
    $.Struct.setUint16(0, 0, this);
  }
  get bool(): boolean {
    $.Struct.testWhich("bool", $.Struct.getUint16(0, this), 1, this);
    return $.Struct.getBit(16, this);
  }
  isBool(): boolean {
    return $.Struct.getUint16(0, this) === 1;
  }
  set bool(value: boolean) {
    $.Struct.setUint16(0, 1, this);
    $.Struct.setBit(16, value, this);
  }
  get int8(): number {
    $.Struct.testWhich("int8", $.Struct.getUint16(0, this), 2, this);
    return $.Struct.getInt8(2, this);
  }
  isInt8(): boolean {
    return $.Struct.getUint16(0, this) === 2;
  }
  set int8(value: number) {
    $.Struct.setUint16(0, 2, this);
    $.Struct.setInt8(2, value, this);
  }
  get int16(): number {
    $.Struct.testWhich("int16", $.Struct.getUint16(0, this), 3, this);
    return $.Struct.getInt16(2, this);
  }
  isInt16(): boolean {
    return $.Struct.getUint16(0, this) === 3;
  }
  set int16(value: number) {
    $.Struct.setUint16(0, 3, this);
    $.Struct.setInt16(2, value, this);
  }
  get int32(): number {
    $.Struct.testWhich("int32", $.Struct.getUint16(0, this), 4, this);
    return $.Struct.getInt32(4, this);
  }
  isInt32(): boolean {
    return $.Struct.getUint16(0, this) === 4;
  }
  set int32(value: number) {
    $.Struct.setUint16(0, 4, this);
    $.Struct.setInt32(4, value, this);
  }
  get int64(): bigint {
    $.Struct.testWhich("int64", $.Struct.getUint16(0, this), 5, this);
    return $.Struct.getInt64(8, this);
  }
  isInt64(): boolean {
    return $.Struct.getUint16(0, this) === 5;
  }
  set int64(value: bigint) {
    $.Struct.setUint16(0, 5, this);
    $.Struct.setInt64(8, value, this);
  }
  get uint8(): number {
    $.Struct.testWhich("uint8", $.Struct.getUint16(0, this), 6, this);
    return $.Struct.getUint8(2, this);
  }
  isUint8(): boolean {
    return $.Struct.getUint16(0, this) === 6;
  }
  set uint8(value: number) {
    $.Struct.setUint16(0, 6, this);
    $.Struct.setUint8(2, value, this);
  }
  get uint16(): number {
    $.Struct.testWhich("uint16", $.Struct.getUint16(0, this), 7, this);
    return $.Struct.getUint16(2, this);
  }
  isUint16(): boolean {
    return $.Struct.getUint16(0, this) === 7;
  }
  set uint16(value: number) {
    $.Struct.setUint16(0, 7, this);
    $.Struct.setUint16(2, value, this);
  }
  get uint32(): number {
    $.Struct.testWhich("uint32", $.Struct.getUint16(0, this), 8, this);
    return $.Struct.getUint32(4, this);
  }
  isUint32(): boolean {
    return $.Struct.getUint16(0, this) === 8;
  }
  set uint32(value: number) {
    $.Struct.setUint16(0, 8, this);
    $.Struct.setUint32(4, value, this);
  }
  get uint64(): bigint {
    $.Struct.testWhich("uint64", $.Struct.getUint16(0, this), 9, this);
    return $.Struct.getUint64(8, this);
  }
  isUint64(): boolean {
    return $.Struct.getUint16(0, this) === 9;
  }
  set uint64(value: bigint) {
    $.Struct.setUint16(0, 9, this);
    $.Struct.setUint64(8, value, this);
  }
  get float32(): number {
    $.Struct.testWhich("float32", $.Struct.getUint16(0, this), 10, this);
    return $.Struct.getFloat32(4, this);
  }
  isFloat32(): boolean {
    return $.Struct.getUint16(0, this) === 10;
  }
  set float32(value: number) {
    $.Struct.setUint16(0, 10, this);
    $.Struct.setFloat32(4, value, this);
  }
  get float64(): number {
    $.Struct.testWhich("float64", $.Struct.getUint16(0, this), 11, this);
    return $.Struct.getFloat64(8, this);
  }
  isFloat64(): boolean {
    return $.Struct.getUint16(0, this) === 11;
  }
  set float64(value: number) {
    $.Struct.setUint16(0, 11, this);
    $.Struct.setFloat64(8, value, this);
  }
  get text(): string {
    $.Struct.testWhich("text", $.Struct.getUint16(0, this), 12, this);
    return $.Struct.getText(0, this);
  }
  isText(): boolean {
    return $.Struct.getUint16(0, this) === 12;
  }
  set text(value: string) {
    $.Struct.setUint16(0, 12, this);
    $.Struct.setText(0, value, this);
  }
  adoptData(value: $.Orphan<$.Data>): void {
    $.Struct.setUint16(0, 13, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownData(): $.Orphan<$.Data> {
    return $.Struct.disown(this.data);
  }
  get data(): $.Data {
    $.Struct.testWhich("data", $.Struct.getUint16(0, this), 13, this);
    return $.Struct.getData(0, this);
  }
  hasData(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initData(length: number): $.Data {
    $.Struct.setUint16(0, 13, this);
    return $.Struct.initData(0, length, this);
  }
  isData(): boolean {
    return $.Struct.getUint16(0, this) === 13;
  }
  set data(value: $.Data) {
    $.Struct.setUint16(0, 13, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptList(value: $.Orphan<$.Pointer>): void {
    $.Struct.setUint16(0, 14, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownList(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.list);
  }
  get list(): $.Pointer {
    $.Struct.testWhich("list", $.Struct.getUint16(0, this), 14, this);
    return $.Struct.getPointer(0, this);
  }
  hasList(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  isList(): boolean {
    return $.Struct.getUint16(0, this) === 14;
  }
  set list(value: $.Pointer) {
    $.Struct.setUint16(0, 14, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  get enum(): number {
    $.Struct.testWhich("enum", $.Struct.getUint16(0, this), 15, this);
    return $.Struct.getUint16(2, this);
  }
  isEnum(): boolean {
    return $.Struct.getUint16(0, this) === 15;
  }
  set enum(value: number) {
    $.Struct.setUint16(0, 15, this);
    $.Struct.setUint16(2, value, this);
  }
  adoptStruct(value: $.Orphan<$.Pointer>): void {
    $.Struct.setUint16(0, 16, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownStruct(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.struct);
  }
  get struct(): $.Pointer {
    $.Struct.testWhich("struct", $.Struct.getUint16(0, this), 16, this);
    return $.Struct.getPointer(0, this);
  }
  hasStruct(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  isStruct(): boolean {
    return $.Struct.getUint16(0, this) === 16;
  }
  set struct(value: $.Pointer) {
    $.Struct.setUint16(0, 16, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  isInterface(): boolean {
    return $.Struct.getUint16(0, this) === 17;
  }
  set interface(_: true) {
    $.Struct.setUint16(0, 17, this);
  }
  adoptAnyPointer(value: $.Orphan<$.Pointer>): void {
    $.Struct.setUint16(0, 18, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownAnyPointer(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.anyPointer);
  }
  get anyPointer(): $.Pointer {
    $.Struct.testWhich("anyPointer", $.Struct.getUint16(0, this), 18, this);
    return $.Struct.getPointer(0, this);
  }
  hasAnyPointer(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  isAnyPointer(): boolean {
    return $.Struct.getUint16(0, this) === 18;
  }
  set anyPointer(value: $.Pointer) {
    $.Struct.setUint16(0, 18, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Value_" + super.toString();
  }
  which(): Value_Which {
    return $.Struct.getUint16(0, this) as Value_Which;
  }
}
export class Annotation extends $.Struct {
  static readonly _capnp = {
    displayName: "Annotation",
    id: "f1c8950dab257542",
    size: new $.ObjectSize(8, 2),
  };
  get id(): bigint {
    return $.Struct.getUint64(0, this);
  }
  set id(value: bigint) {
    $.Struct.setUint64(0, value, this);
  }
  adoptBrand(value: $.Orphan<Brand>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownBrand(): $.Orphan<Brand> {
    return $.Struct.disown(this.brand);
  }
  get brand(): Brand {
    return $.Struct.getStruct(1, Brand, this);
  }
  hasBrand(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initBrand(): Brand {
    return $.Struct.initStructAt(1, Brand, this);
  }
  set brand(value: Brand) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  adoptValue(value: $.Orphan<Value>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownValue(): $.Orphan<Value> {
    return $.Struct.disown(this.value);
  }
  get value(): Value {
    return $.Struct.getStruct(0, Value, this);
  }
  hasValue(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initValue(): Value {
    return $.Struct.initStructAt(0, Value, this);
  }
  set value(value: Value) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Annotation_" + super.toString();
  }
}
export const ElementSize = {
  EMPTY: 0,
  BIT: 1,
  BYTE: 2,
  TWO_BYTES: 3,
  FOUR_BYTES: 4,
  EIGHT_BYTES: 5,
  POINTER: 6,
  INLINE_COMPOSITE: 7,
} as const;
export type ElementSize = (typeof ElementSize)[keyof typeof ElementSize];
export class CapnpVersion extends $.Struct {
  static readonly _capnp = {
    displayName: "CapnpVersion",
    id: "d85d305b7d839963",
    size: new $.ObjectSize(8, 0),
  };
  get major(): number {
    return $.Struct.getUint16(0, this);
  }
  set major(value: number) {
    $.Struct.setUint16(0, value, this);
  }
  get minor(): number {
    return $.Struct.getUint8(2, this);
  }
  set minor(value: number) {
    $.Struct.setUint8(2, value, this);
  }
  get micro(): number {
    return $.Struct.getUint8(3, this);
  }
  set micro(value: number) {
    $.Struct.setUint8(3, value, this);
  }
  toString(): string {
    return "CapnpVersion_" + super.toString();
  }
}
export class CodeGeneratorRequest_RequestedFile_Import extends $.Struct {
  static readonly _capnp = {
    displayName: "Import",
    id: "ae504193122357e5",
    size: new $.ObjectSize(8, 1),
  };
  get id(): bigint {
    return $.Struct.getUint64(0, this);
  }
  set id(value: bigint) {
    $.Struct.setUint64(0, value, this);
  }
  get name(): string {
    return $.Struct.getText(0, this);
  }
  set name(value: string) {
    $.Struct.setText(0, value, this);
  }
  toString(): string {
    return "CodeGeneratorRequest_RequestedFile_Import_" + super.toString();
  }
}
export class CodeGeneratorRequest_RequestedFile extends $.Struct {
  static readonly Import = CodeGeneratorRequest_RequestedFile_Import;
  static readonly _capnp = {
    displayName: "RequestedFile",
    id: "cfea0eb02e810062",
    size: new $.ObjectSize(8, 2),
  };
  static _Imports: $.ListCtor<CodeGeneratorRequest_RequestedFile_Import>;
  get id(): bigint {
    return $.Struct.getUint64(0, this);
  }
  set id(value: bigint) {
    $.Struct.setUint64(0, value, this);
  }
  get filename(): string {
    return $.Struct.getText(0, this);
  }
  set filename(value: string) {
    $.Struct.setText(0, value, this);
  }
  adoptImports(
    value: $.Orphan<$.List<CodeGeneratorRequest_RequestedFile_Import>>,
  ): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownImports(): $.Orphan<$.List<CodeGeneratorRequest_RequestedFile_Import>> {
    return $.Struct.disown(this.imports);
  }
  get imports(): $.List<CodeGeneratorRequest_RequestedFile_Import> {
    return $.Struct.getList(
      1,
      CodeGeneratorRequest_RequestedFile._Imports,
      this,
    );
  }
  hasImports(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initImports(
    length: number,
  ): $.List<CodeGeneratorRequest_RequestedFile_Import> {
    return $.Struct.initList(
      1,
      CodeGeneratorRequest_RequestedFile._Imports,
      length,
      this,
    );
  }
  set imports(value: $.List<CodeGeneratorRequest_RequestedFile_Import>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  toString(): string {
    return "CodeGeneratorRequest_RequestedFile_" + super.toString();
  }
}
export class CodeGeneratorRequest extends $.Struct {
  static readonly RequestedFile = CodeGeneratorRequest_RequestedFile;
  static readonly _capnp = {
    displayName: "CodeGeneratorRequest",
    id: "bfc546f6210ad7ce",
    size: new $.ObjectSize(0, 4),
  };
  static _Nodes: $.ListCtor<Node>;
  static _SourceInfo: $.ListCtor<Node_SourceInfo>;
  static _RequestedFiles: $.ListCtor<CodeGeneratorRequest_RequestedFile>;
  adoptCapnpVersion(value: $.Orphan<CapnpVersion>): void {
    $.Struct.adopt(value, $.Struct.getPointer(2, this));
  }
  disownCapnpVersion(): $.Orphan<CapnpVersion> {
    return $.Struct.disown(this.capnpVersion);
  }
  get capnpVersion(): CapnpVersion {
    return $.Struct.getStruct(2, CapnpVersion, this);
  }
  hasCapnpVersion(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(2, this));
  }
  initCapnpVersion(): CapnpVersion {
    return $.Struct.initStructAt(2, CapnpVersion, this);
  }
  set capnpVersion(value: CapnpVersion) {
    $.Struct.copyFrom(value, $.Struct.getPointer(2, this));
  }
  adoptNodes(value: $.Orphan<$.List<Node>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownNodes(): $.Orphan<$.List<Node>> {
    return $.Struct.disown(this.nodes);
  }
  get nodes(): $.List<Node> {
    return $.Struct.getList(0, CodeGeneratorRequest._Nodes, this);
  }
  hasNodes(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initNodes(length: number): $.List<Node> {
    return $.Struct.initList(0, CodeGeneratorRequest._Nodes, length, this);
  }
  set nodes(value: $.List<Node>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptSourceInfo(value: $.Orphan<$.List<Node_SourceInfo>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(3, this));
  }
  disownSourceInfo(): $.Orphan<$.List<Node_SourceInfo>> {
    return $.Struct.disown(this.sourceInfo);
  }
  get sourceInfo(): $.List<Node_SourceInfo> {
    return $.Struct.getList(3, CodeGeneratorRequest._SourceInfo, this);
  }
  hasSourceInfo(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(3, this));
  }
  initSourceInfo(length: number): $.List<Node_SourceInfo> {
    return $.Struct.initList(3, CodeGeneratorRequest._SourceInfo, length, this);
  }
  set sourceInfo(value: $.List<Node_SourceInfo>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(3, this));
  }
  adoptRequestedFiles(
    value: $.Orphan<$.List<CodeGeneratorRequest_RequestedFile>>,
  ): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownRequestedFiles(): $.Orphan<$.List<CodeGeneratorRequest_RequestedFile>> {
    return $.Struct.disown(this.requestedFiles);
  }
  get requestedFiles(): $.List<CodeGeneratorRequest_RequestedFile> {
    return $.Struct.getList(1, CodeGeneratorRequest._RequestedFiles, this);
  }
  hasRequestedFiles(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initRequestedFiles(
    length: number,
  ): $.List<CodeGeneratorRequest_RequestedFile> {
    return $.Struct.initList(
      1,
      CodeGeneratorRequest._RequestedFiles,
      length,
      this,
    );
  }
  set requestedFiles(value: $.List<CodeGeneratorRequest_RequestedFile>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  toString(): string {
    return "CodeGeneratorRequest_" + super.toString();
  }
}
Node_SourceInfo._Members = $.CompositeList(Node_SourceInfo_Member);
Node_Struct._Fields = $.CompositeList(Field);
Node_Enum._Enumerants = $.CompositeList(Enumerant);
Node_Interface._Methods = $.CompositeList(Method);
Node_Interface._Superclasses = $.CompositeList(Superclass);
Node._Parameters = $.CompositeList(Node_Parameter);
Node._NestedNodes = $.CompositeList(Node_NestedNode);
Node._Annotations = $.CompositeList(Annotation);
Field._Annotations = $.CompositeList(Annotation);
Enumerant._Annotations = $.CompositeList(Annotation);
Method._ImplicitParameters = $.CompositeList(Node_Parameter);
Method._Annotations = $.CompositeList(Annotation);
Brand_Scope._Bind = $.CompositeList(Brand_Binding);
Brand._Scopes = $.CompositeList(Brand_Scope);
CodeGeneratorRequest_RequestedFile._Imports = $.CompositeList(
  CodeGeneratorRequest_RequestedFile_Import,
);
CodeGeneratorRequest._Nodes = $.CompositeList(Node);
CodeGeneratorRequest._SourceInfo = $.CompositeList(Node_SourceInfo);
CodeGeneratorRequest._RequestedFiles = $.CompositeList(
  CodeGeneratorRequest_RequestedFile,
);
