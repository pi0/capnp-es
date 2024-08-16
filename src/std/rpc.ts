// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import * as capnp from "../serialization";

export const _capnpFileId = "b312981b2552a250";

export enum Message_Which {
  UNIMPLEMENTED = 0,
  ABORT = 1,
  BOOTSTRAP = 8,
  CALL = 2,
  RETURN = 3,
  FINISH = 4,
  RESOLVE = 5,
  RELEASE = 6,
  DISEMBARGO = 13,
  OBSOLETE_SAVE = 7,
  OBSOLETE_DELETE = 9,
  PROVIDE = 10,
  ACCEPT = 11,
  JOIN = 12,
}

export class Message extends capnp.Struct {
  static readonly UNIMPLEMENTED = Message_Which.UNIMPLEMENTED;
  static readonly ABORT = Message_Which.ABORT;
  static readonly BOOTSTRAP = Message_Which.BOOTSTRAP;
  static readonly CALL = Message_Which.CALL;
  static readonly RETURN = Message_Which.RETURN;
  static readonly FINISH = Message_Which.FINISH;
  static readonly RESOLVE = Message_Which.RESOLVE;
  static readonly RELEASE = Message_Which.RELEASE;
  static readonly DISEMBARGO = Message_Which.DISEMBARGO;
  static readonly OBSOLETE_SAVE = Message_Which.OBSOLETE_SAVE;
  static readonly OBSOLETE_DELETE = Message_Which.OBSOLETE_DELETE;
  static readonly PROVIDE = Message_Which.PROVIDE;
  static readonly ACCEPT = Message_Which.ACCEPT;
  static readonly JOIN = Message_Which.JOIN;
  static readonly _capnp = {
    displayName: "Message",
    id: "91b79f1f808db032",
    size: new capnp.ObjectSize(8, 1),
  };
  adoptUnimplemented(value: capnp.Orphan<Message>): void {
    capnp.Struct.setUint16(0, 0, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownUnimplemented(): capnp.Orphan<Message> {
    return capnp.Struct.disown(this.getUnimplemented());
  }
  getUnimplemented(): Message {
    capnp.Struct.testWhich(
      "unimplemented",
      capnp.Struct.getUint16(0, this),
      0,
      this,
    );
    return capnp.Struct.getStruct(0, Message, this);
  }
  hasUnimplemented(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initUnimplemented(): Message {
    capnp.Struct.setUint16(0, 0, this);
    return capnp.Struct.initStructAt(0, Message, this);
  }
  isUnimplemented(): boolean {
    return capnp.Struct.getUint16(0, this) === 0;
  }
  setUnimplemented(value: Message): void {
    capnp.Struct.setUint16(0, 0, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptAbort(value: capnp.Orphan<Exception>): void {
    capnp.Struct.setUint16(0, 1, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownAbort(): capnp.Orphan<Exception> {
    return capnp.Struct.disown(this.getAbort());
  }
  getAbort(): Exception {
    capnp.Struct.testWhich("abort", capnp.Struct.getUint16(0, this), 1, this);
    return capnp.Struct.getStruct(0, Exception, this);
  }
  hasAbort(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initAbort(): Exception {
    capnp.Struct.setUint16(0, 1, this);
    return capnp.Struct.initStructAt(0, Exception, this);
  }
  isAbort(): boolean {
    return capnp.Struct.getUint16(0, this) === 1;
  }
  setAbort(value: Exception): void {
    capnp.Struct.setUint16(0, 1, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptBootstrap(value: capnp.Orphan<Bootstrap>): void {
    capnp.Struct.setUint16(0, 8, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownBootstrap(): capnp.Orphan<Bootstrap> {
    return capnp.Struct.disown(this.getBootstrap());
  }
  getBootstrap(): Bootstrap {
    capnp.Struct.testWhich(
      "bootstrap",
      capnp.Struct.getUint16(0, this),
      8,
      this,
    );
    return capnp.Struct.getStruct(0, Bootstrap, this);
  }
  hasBootstrap(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initBootstrap(): Bootstrap {
    capnp.Struct.setUint16(0, 8, this);
    return capnp.Struct.initStructAt(0, Bootstrap, this);
  }
  isBootstrap(): boolean {
    return capnp.Struct.getUint16(0, this) === 8;
  }
  setBootstrap(value: Bootstrap): void {
    capnp.Struct.setUint16(0, 8, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptCall(value: capnp.Orphan<Call>): void {
    capnp.Struct.setUint16(0, 2, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownCall(): capnp.Orphan<Call> {
    return capnp.Struct.disown(this.getCall());
  }
  getCall(): Call {
    capnp.Struct.testWhich("call", capnp.Struct.getUint16(0, this), 2, this);
    return capnp.Struct.getStruct(0, Call, this);
  }
  hasCall(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initCall(): Call {
    capnp.Struct.setUint16(0, 2, this);
    return capnp.Struct.initStructAt(0, Call, this);
  }
  isCall(): boolean {
    return capnp.Struct.getUint16(0, this) === 2;
  }
  setCall(value: Call): void {
    capnp.Struct.setUint16(0, 2, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptReturn(value: capnp.Orphan<Return>): void {
    capnp.Struct.setUint16(0, 3, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownReturn(): capnp.Orphan<Return> {
    return capnp.Struct.disown(this.getReturn());
  }
  getReturn(): Return {
    capnp.Struct.testWhich("return", capnp.Struct.getUint16(0, this), 3, this);
    return capnp.Struct.getStruct(0, Return, this);
  }
  hasReturn(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initReturn(): Return {
    capnp.Struct.setUint16(0, 3, this);
    return capnp.Struct.initStructAt(0, Return, this);
  }
  isReturn(): boolean {
    return capnp.Struct.getUint16(0, this) === 3;
  }
  setReturn(value: Return): void {
    capnp.Struct.setUint16(0, 3, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptFinish(value: capnp.Orphan<Finish>): void {
    capnp.Struct.setUint16(0, 4, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownFinish(): capnp.Orphan<Finish> {
    return capnp.Struct.disown(this.getFinish());
  }
  getFinish(): Finish {
    capnp.Struct.testWhich("finish", capnp.Struct.getUint16(0, this), 4, this);
    return capnp.Struct.getStruct(0, Finish, this);
  }
  hasFinish(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initFinish(): Finish {
    capnp.Struct.setUint16(0, 4, this);
    return capnp.Struct.initStructAt(0, Finish, this);
  }
  isFinish(): boolean {
    return capnp.Struct.getUint16(0, this) === 4;
  }
  setFinish(value: Finish): void {
    capnp.Struct.setUint16(0, 4, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptResolve(value: capnp.Orphan<Resolve>): void {
    capnp.Struct.setUint16(0, 5, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownResolve(): capnp.Orphan<Resolve> {
    return capnp.Struct.disown(this.getResolve());
  }
  getResolve(): Resolve {
    capnp.Struct.testWhich("resolve", capnp.Struct.getUint16(0, this), 5, this);
    return capnp.Struct.getStruct(0, Resolve, this);
  }
  hasResolve(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initResolve(): Resolve {
    capnp.Struct.setUint16(0, 5, this);
    return capnp.Struct.initStructAt(0, Resolve, this);
  }
  isResolve(): boolean {
    return capnp.Struct.getUint16(0, this) === 5;
  }
  setResolve(value: Resolve): void {
    capnp.Struct.setUint16(0, 5, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptRelease(value: capnp.Orphan<Release>): void {
    capnp.Struct.setUint16(0, 6, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownRelease(): capnp.Orphan<Release> {
    return capnp.Struct.disown(this.getRelease());
  }
  getRelease(): Release {
    capnp.Struct.testWhich("release", capnp.Struct.getUint16(0, this), 6, this);
    return capnp.Struct.getStruct(0, Release, this);
  }
  hasRelease(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initRelease(): Release {
    capnp.Struct.setUint16(0, 6, this);
    return capnp.Struct.initStructAt(0, Release, this);
  }
  isRelease(): boolean {
    return capnp.Struct.getUint16(0, this) === 6;
  }
  setRelease(value: Release): void {
    capnp.Struct.setUint16(0, 6, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptDisembargo(value: capnp.Orphan<Disembargo>): void {
    capnp.Struct.setUint16(0, 13, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownDisembargo(): capnp.Orphan<Disembargo> {
    return capnp.Struct.disown(this.getDisembargo());
  }
  getDisembargo(): Disembargo {
    capnp.Struct.testWhich(
      "disembargo",
      capnp.Struct.getUint16(0, this),
      13,
      this,
    );
    return capnp.Struct.getStruct(0, Disembargo, this);
  }
  hasDisembargo(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initDisembargo(): Disembargo {
    capnp.Struct.setUint16(0, 13, this);
    return capnp.Struct.initStructAt(0, Disembargo, this);
  }
  isDisembargo(): boolean {
    return capnp.Struct.getUint16(0, this) === 13;
  }
  setDisembargo(value: Disembargo): void {
    capnp.Struct.setUint16(0, 13, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptObsoleteSave(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.setUint16(0, 7, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownObsoleteSave(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getObsoleteSave());
  }
  getObsoleteSave(): capnp.Pointer {
    capnp.Struct.testWhich(
      "obsoleteSave",
      capnp.Struct.getUint16(0, this),
      7,
      this,
    );
    return capnp.Struct.getPointer(0, this);
  }
  hasObsoleteSave(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  isObsoleteSave(): boolean {
    return capnp.Struct.getUint16(0, this) === 7;
  }
  setObsoleteSave(value: capnp.Pointer): void {
    capnp.Struct.setUint16(0, 7, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptObsoleteDelete(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.setUint16(0, 9, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownObsoleteDelete(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getObsoleteDelete());
  }
  getObsoleteDelete(): capnp.Pointer {
    capnp.Struct.testWhich(
      "obsoleteDelete",
      capnp.Struct.getUint16(0, this),
      9,
      this,
    );
    return capnp.Struct.getPointer(0, this);
  }
  hasObsoleteDelete(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  isObsoleteDelete(): boolean {
    return capnp.Struct.getUint16(0, this) === 9;
  }
  setObsoleteDelete(value: capnp.Pointer): void {
    capnp.Struct.setUint16(0, 9, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptProvide(value: capnp.Orphan<Provide>): void {
    capnp.Struct.setUint16(0, 10, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownProvide(): capnp.Orphan<Provide> {
    return capnp.Struct.disown(this.getProvide());
  }
  getProvide(): Provide {
    capnp.Struct.testWhich(
      "provide",
      capnp.Struct.getUint16(0, this),
      10,
      this,
    );
    return capnp.Struct.getStruct(0, Provide, this);
  }
  hasProvide(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initProvide(): Provide {
    capnp.Struct.setUint16(0, 10, this);
    return capnp.Struct.initStructAt(0, Provide, this);
  }
  isProvide(): boolean {
    return capnp.Struct.getUint16(0, this) === 10;
  }
  setProvide(value: Provide): void {
    capnp.Struct.setUint16(0, 10, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptAccept(value: capnp.Orphan<Accept>): void {
    capnp.Struct.setUint16(0, 11, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownAccept(): capnp.Orphan<Accept> {
    return capnp.Struct.disown(this.getAccept());
  }
  getAccept(): Accept {
    capnp.Struct.testWhich("accept", capnp.Struct.getUint16(0, this), 11, this);
    return capnp.Struct.getStruct(0, Accept, this);
  }
  hasAccept(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initAccept(): Accept {
    capnp.Struct.setUint16(0, 11, this);
    return capnp.Struct.initStructAt(0, Accept, this);
  }
  isAccept(): boolean {
    return capnp.Struct.getUint16(0, this) === 11;
  }
  setAccept(value: Accept): void {
    capnp.Struct.setUint16(0, 11, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptJoin(value: capnp.Orphan<Join>): void {
    capnp.Struct.setUint16(0, 12, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownJoin(): capnp.Orphan<Join> {
    return capnp.Struct.disown(this.getJoin());
  }
  getJoin(): Join {
    capnp.Struct.testWhich("join", capnp.Struct.getUint16(0, this), 12, this);
    return capnp.Struct.getStruct(0, Join, this);
  }
  hasJoin(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initJoin(): Join {
    capnp.Struct.setUint16(0, 12, this);
    return capnp.Struct.initStructAt(0, Join, this);
  }
  isJoin(): boolean {
    return capnp.Struct.getUint16(0, this) === 12;
  }
  setJoin(value: Join): void {
    capnp.Struct.setUint16(0, 12, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Message_" + super.toString();
  }
  which(): Message_Which {
    return capnp.Struct.getUint16(0, this);
  }
}

export class Bootstrap extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Bootstrap",
    id: "e94ccf8031176ec4",
    size: new capnp.ObjectSize(8, 1),
  };
  getQuestionId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setQuestionId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  adoptDeprecatedObjectId(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownDeprecatedObjectId(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getDeprecatedObjectId());
  }
  getDeprecatedObjectId(): capnp.Pointer {
    return capnp.Struct.getPointer(0, this);
  }
  hasDeprecatedObjectId(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  setDeprecatedObjectId(value: capnp.Pointer): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Bootstrap_" + super.toString();
  }
}

export enum Call_SendResultsTo_Which {
  CALLER = 0,
  YOURSELF = 1,
  THIRD_PARTY = 2,
}

export class Call_SendResultsTo extends capnp.Struct {
  static readonly CALLER = Call_SendResultsTo_Which.CALLER;
  static readonly YOURSELF = Call_SendResultsTo_Which.YOURSELF;
  static readonly THIRD_PARTY = Call_SendResultsTo_Which.THIRD_PARTY;
  static readonly _capnp = {
    displayName: "sendResultsTo",
    id: "dae8b0f61aab5f99",
    size: new capnp.ObjectSize(24, 3),
  };
  isCaller(): boolean {
    return capnp.Struct.getUint16(6, this) === 0;
  }
  setCaller(): void {
    capnp.Struct.setUint16(6, 0, this);
  }
  isYourself(): boolean {
    return capnp.Struct.getUint16(6, this) === 1;
  }
  setYourself(): void {
    capnp.Struct.setUint16(6, 1, this);
  }
  adoptThirdParty(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.setUint16(6, 2, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(2, this));
  }
  disownThirdParty(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getThirdParty());
  }
  getThirdParty(): capnp.Pointer {
    capnp.Struct.testWhich(
      "thirdParty",
      capnp.Struct.getUint16(6, this),
      2,
      this,
    );
    return capnp.Struct.getPointer(2, this);
  }
  hasThirdParty(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(2, this));
  }
  isThirdParty(): boolean {
    return capnp.Struct.getUint16(6, this) === 2;
  }
  setThirdParty(value: capnp.Pointer): void {
    capnp.Struct.setUint16(6, 2, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(2, this));
  }
  toString(): string {
    return "Call_SendResultsTo_" + super.toString();
  }
  which(): Call_SendResultsTo_Which {
    return capnp.Struct.getUint16(6, this);
  }
}

export class Call extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Call",
    id: "836a53ce789d4cd4",
    size: new capnp.ObjectSize(24, 3),
    defaultAllowThirdPartyTailCall: capnp.getBitMask(false, 0),
  };
  getQuestionId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setQuestionId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  adoptTarget(value: capnp.Orphan<MessageTarget>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownTarget(): capnp.Orphan<MessageTarget> {
    return capnp.Struct.disown(this.getTarget());
  }
  getTarget(): MessageTarget {
    return capnp.Struct.getStruct(0, MessageTarget, this);
  }
  hasTarget(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initTarget(): MessageTarget {
    return capnp.Struct.initStructAt(0, MessageTarget, this);
  }
  setTarget(value: MessageTarget): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  getInterfaceId(): bigint {
    return capnp.Struct.getUint64(8, this);
  }
  setInterfaceId(value: bigint): void {
    capnp.Struct.setUint64(8, value, this);
  }
  getMethodId(): number {
    return capnp.Struct.getUint16(4, this);
  }
  setMethodId(value: number): void {
    capnp.Struct.setUint16(4, value, this);
  }
  getAllowThirdPartyTailCall(): boolean {
    return capnp.Struct.getBit(
      128,
      this,
      Call._capnp.defaultAllowThirdPartyTailCall,
    );
  }
  setAllowThirdPartyTailCall(value: boolean): void {
    capnp.Struct.setBit(128, value, this);
  }
  adoptParams(value: capnp.Orphan<Payload>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownParams(): capnp.Orphan<Payload> {
    return capnp.Struct.disown(this.getParams());
  }
  getParams(): Payload {
    return capnp.Struct.getStruct(1, Payload, this);
  }
  hasParams(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  initParams(): Payload {
    return capnp.Struct.initStructAt(1, Payload, this);
  }
  setParams(value: Payload): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  getSendResultsTo(): Call_SendResultsTo {
    return capnp.Struct.getAs(Call_SendResultsTo, this);
  }
  initSendResultsTo(): Call_SendResultsTo {
    return capnp.Struct.getAs(Call_SendResultsTo, this);
  }
  toString(): string {
    return "Call_" + super.toString();
  }
}

export enum Return_Which {
  RESULTS = 0,
  EXCEPTION = 1,
  CANCELED = 2,
  RESULTS_SENT_ELSEWHERE = 3,
  TAKE_FROM_OTHER_QUESTION = 4,
  ACCEPT_FROM_THIRD_PARTY = 5,
}

export class Return extends capnp.Struct {
  static readonly RESULTS = Return_Which.RESULTS;
  static readonly EXCEPTION = Return_Which.EXCEPTION;
  static readonly CANCELED = Return_Which.CANCELED;
  static readonly RESULTS_SENT_ELSEWHERE = Return_Which.RESULTS_SENT_ELSEWHERE;
  static readonly TAKE_FROM_OTHER_QUESTION =
    Return_Which.TAKE_FROM_OTHER_QUESTION;
  static readonly ACCEPT_FROM_THIRD_PARTY =
    Return_Which.ACCEPT_FROM_THIRD_PARTY;
  static readonly _capnp = {
    displayName: "Return",
    id: "9e19b28d3db3573a",
    size: new capnp.ObjectSize(16, 1),
    defaultReleaseParamCaps: capnp.getBitMask(true, 0),
  };
  getAnswerId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setAnswerId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  getReleaseParamCaps(): boolean {
    return capnp.Struct.getBit(32, this, Return._capnp.defaultReleaseParamCaps);
  }
  setReleaseParamCaps(value: boolean): void {
    capnp.Struct.setBit(32, value, this);
  }
  adoptResults(value: capnp.Orphan<Payload>): void {
    capnp.Struct.setUint16(6, 0, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownResults(): capnp.Orphan<Payload> {
    return capnp.Struct.disown(this.getResults());
  }
  getResults(): Payload {
    capnp.Struct.testWhich("results", capnp.Struct.getUint16(6, this), 0, this);
    return capnp.Struct.getStruct(0, Payload, this);
  }
  hasResults(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initResults(): Payload {
    capnp.Struct.setUint16(6, 0, this);
    return capnp.Struct.initStructAt(0, Payload, this);
  }
  isResults(): boolean {
    return capnp.Struct.getUint16(6, this) === 0;
  }
  setResults(value: Payload): void {
    capnp.Struct.setUint16(6, 0, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptException(value: capnp.Orphan<Exception>): void {
    capnp.Struct.setUint16(6, 1, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownException(): capnp.Orphan<Exception> {
    return capnp.Struct.disown(this.getException());
  }
  getException(): Exception {
    capnp.Struct.testWhich(
      "exception",
      capnp.Struct.getUint16(6, this),
      1,
      this,
    );
    return capnp.Struct.getStruct(0, Exception, this);
  }
  hasException(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initException(): Exception {
    capnp.Struct.setUint16(6, 1, this);
    return capnp.Struct.initStructAt(0, Exception, this);
  }
  isException(): boolean {
    return capnp.Struct.getUint16(6, this) === 1;
  }
  setException(value: Exception): void {
    capnp.Struct.setUint16(6, 1, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  isCanceled(): boolean {
    return capnp.Struct.getUint16(6, this) === 2;
  }
  setCanceled(): void {
    capnp.Struct.setUint16(6, 2, this);
  }
  isResultsSentElsewhere(): boolean {
    return capnp.Struct.getUint16(6, this) === 3;
  }
  setResultsSentElsewhere(): void {
    capnp.Struct.setUint16(6, 3, this);
  }
  getTakeFromOtherQuestion(): number {
    capnp.Struct.testWhich(
      "takeFromOtherQuestion",
      capnp.Struct.getUint16(6, this),
      4,
      this,
    );
    return capnp.Struct.getUint32(8, this);
  }
  isTakeFromOtherQuestion(): boolean {
    return capnp.Struct.getUint16(6, this) === 4;
  }
  setTakeFromOtherQuestion(value: number): void {
    capnp.Struct.setUint16(6, 4, this);
    capnp.Struct.setUint32(8, value, this);
  }
  adoptAcceptFromThirdParty(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.setUint16(6, 5, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownAcceptFromThirdParty(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getAcceptFromThirdParty());
  }
  getAcceptFromThirdParty(): capnp.Pointer {
    capnp.Struct.testWhich(
      "acceptFromThirdParty",
      capnp.Struct.getUint16(6, this),
      5,
      this,
    );
    return capnp.Struct.getPointer(0, this);
  }
  hasAcceptFromThirdParty(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  isAcceptFromThirdParty(): boolean {
    return capnp.Struct.getUint16(6, this) === 5;
  }
  setAcceptFromThirdParty(value: capnp.Pointer): void {
    capnp.Struct.setUint16(6, 5, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Return_" + super.toString();
  }
  which(): Return_Which {
    return capnp.Struct.getUint16(6, this);
  }
}

export class Finish extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Finish",
    id: "d37d2eb2c2f80e63",
    size: new capnp.ObjectSize(8, 0),
    defaultReleaseResultCaps: capnp.getBitMask(true, 0),
  };
  getQuestionId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setQuestionId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  getReleaseResultCaps(): boolean {
    return capnp.Struct.getBit(
      32,
      this,
      Finish._capnp.defaultReleaseResultCaps,
    );
  }
  setReleaseResultCaps(value: boolean): void {
    capnp.Struct.setBit(32, value, this);
  }
  toString(): string {
    return "Finish_" + super.toString();
  }
}

export enum Resolve_Which {
  CAP = 0,
  EXCEPTION = 1,
}

export class Resolve extends capnp.Struct {
  static readonly CAP = Resolve_Which.CAP;
  static readonly EXCEPTION = Resolve_Which.EXCEPTION;
  static readonly _capnp = {
    displayName: "Resolve",
    id: "bbc29655fa89086e",
    size: new capnp.ObjectSize(8, 1),
  };
  getPromiseId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setPromiseId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  adoptCap(value: capnp.Orphan<CapDescriptor>): void {
    capnp.Struct.setUint16(4, 0, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownCap(): capnp.Orphan<CapDescriptor> {
    return capnp.Struct.disown(this.getCap());
  }
  getCap(): CapDescriptor {
    capnp.Struct.testWhich("cap", capnp.Struct.getUint16(4, this), 0, this);
    return capnp.Struct.getStruct(0, CapDescriptor, this);
  }
  hasCap(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initCap(): CapDescriptor {
    capnp.Struct.setUint16(4, 0, this);
    return capnp.Struct.initStructAt(0, CapDescriptor, this);
  }
  isCap(): boolean {
    return capnp.Struct.getUint16(4, this) === 0;
  }
  setCap(value: CapDescriptor): void {
    capnp.Struct.setUint16(4, 0, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptException(value: capnp.Orphan<Exception>): void {
    capnp.Struct.setUint16(4, 1, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownException(): capnp.Orphan<Exception> {
    return capnp.Struct.disown(this.getException());
  }
  getException(): Exception {
    capnp.Struct.testWhich(
      "exception",
      capnp.Struct.getUint16(4, this),
      1,
      this,
    );
    return capnp.Struct.getStruct(0, Exception, this);
  }
  hasException(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initException(): Exception {
    capnp.Struct.setUint16(4, 1, this);
    return capnp.Struct.initStructAt(0, Exception, this);
  }
  isException(): boolean {
    return capnp.Struct.getUint16(4, this) === 1;
  }
  setException(value: Exception): void {
    capnp.Struct.setUint16(4, 1, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Resolve_" + super.toString();
  }
  which(): Resolve_Which {
    return capnp.Struct.getUint16(4, this);
  }
}

export class Release extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Release",
    id: "ad1a6c0d7dd07497",
    size: new capnp.ObjectSize(8, 0),
  };
  getId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  getReferenceCount(): number {
    return capnp.Struct.getUint32(4, this);
  }
  setReferenceCount(value: number): void {
    capnp.Struct.setUint32(4, value, this);
  }
  toString(): string {
    return "Release_" + super.toString();
  }
}

export enum Disembargo_Context_Which {
  SENDER_LOOPBACK = 0,
  RECEIVER_LOOPBACK = 1,
  ACCEPT = 2,
  PROVIDE = 3,
}

export class Disembargo_Context extends capnp.Struct {
  static readonly SENDER_LOOPBACK = Disembargo_Context_Which.SENDER_LOOPBACK;
  static readonly RECEIVER_LOOPBACK =
    Disembargo_Context_Which.RECEIVER_LOOPBACK;
  static readonly ACCEPT = Disembargo_Context_Which.ACCEPT;
  static readonly PROVIDE = Disembargo_Context_Which.PROVIDE;
  static readonly _capnp = {
    displayName: "context",
    id: "d562b4df655bdd4d",
    size: new capnp.ObjectSize(8, 1),
  };
  getSenderLoopback(): number {
    capnp.Struct.testWhich(
      "senderLoopback",
      capnp.Struct.getUint16(4, this),
      0,
      this,
    );
    return capnp.Struct.getUint32(0, this);
  }
  isSenderLoopback(): boolean {
    return capnp.Struct.getUint16(4, this) === 0;
  }
  setSenderLoopback(value: number): void {
    capnp.Struct.setUint16(4, 0, this);
    capnp.Struct.setUint32(0, value, this);
  }
  getReceiverLoopback(): number {
    capnp.Struct.testWhich(
      "receiverLoopback",
      capnp.Struct.getUint16(4, this),
      1,
      this,
    );
    return capnp.Struct.getUint32(0, this);
  }
  isReceiverLoopback(): boolean {
    return capnp.Struct.getUint16(4, this) === 1;
  }
  setReceiverLoopback(value: number): void {
    capnp.Struct.setUint16(4, 1, this);
    capnp.Struct.setUint32(0, value, this);
  }
  isAccept(): boolean {
    return capnp.Struct.getUint16(4, this) === 2;
  }
  setAccept(): void {
    capnp.Struct.setUint16(4, 2, this);
  }
  getProvide(): number {
    capnp.Struct.testWhich("provide", capnp.Struct.getUint16(4, this), 3, this);
    return capnp.Struct.getUint32(0, this);
  }
  isProvide(): boolean {
    return capnp.Struct.getUint16(4, this) === 3;
  }
  setProvide(value: number): void {
    capnp.Struct.setUint16(4, 3, this);
    capnp.Struct.setUint32(0, value, this);
  }
  toString(): string {
    return "Disembargo_Context_" + super.toString();
  }
  which(): Disembargo_Context_Which {
    return capnp.Struct.getUint16(4, this);
  }
}

export class Disembargo extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Disembargo",
    id: "f964368b0fbd3711",
    size: new capnp.ObjectSize(8, 1),
  };
  adoptTarget(value: capnp.Orphan<MessageTarget>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownTarget(): capnp.Orphan<MessageTarget> {
    return capnp.Struct.disown(this.getTarget());
  }
  getTarget(): MessageTarget {
    return capnp.Struct.getStruct(0, MessageTarget, this);
  }
  hasTarget(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initTarget(): MessageTarget {
    return capnp.Struct.initStructAt(0, MessageTarget, this);
  }
  setTarget(value: MessageTarget): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  getContext(): Disembargo_Context {
    return capnp.Struct.getAs(Disembargo_Context, this);
  }
  initContext(): Disembargo_Context {
    return capnp.Struct.getAs(Disembargo_Context, this);
  }
  toString(): string {
    return "Disembargo_" + super.toString();
  }
}

export class Provide extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Provide",
    id: "9c6a046bfbc1ac5a",
    size: new capnp.ObjectSize(8, 2),
  };
  getQuestionId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setQuestionId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  adoptTarget(value: capnp.Orphan<MessageTarget>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownTarget(): capnp.Orphan<MessageTarget> {
    return capnp.Struct.disown(this.getTarget());
  }
  getTarget(): MessageTarget {
    return capnp.Struct.getStruct(0, MessageTarget, this);
  }
  hasTarget(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initTarget(): MessageTarget {
    return capnp.Struct.initStructAt(0, MessageTarget, this);
  }
  setTarget(value: MessageTarget): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptRecipient(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownRecipient(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getRecipient());
  }
  getRecipient(): capnp.Pointer {
    return capnp.Struct.getPointer(1, this);
  }
  hasRecipient(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  setRecipient(value: capnp.Pointer): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Provide_" + super.toString();
  }
}

export class Accept extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Accept",
    id: "d4c9b56290554016",
    size: new capnp.ObjectSize(8, 1),
  };
  getQuestionId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setQuestionId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  adoptProvision(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownProvision(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getProvision());
  }
  getProvision(): capnp.Pointer {
    return capnp.Struct.getPointer(0, this);
  }
  hasProvision(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  setProvision(value: capnp.Pointer): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  getEmbargo(): boolean {
    return capnp.Struct.getBit(32, this);
  }
  setEmbargo(value: boolean): void {
    capnp.Struct.setBit(32, value, this);
  }
  toString(): string {
    return "Accept_" + super.toString();
  }
}

export class Join extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Join",
    id: "fbe1980490e001af",
    size: new capnp.ObjectSize(8, 2),
  };
  getQuestionId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setQuestionId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  adoptTarget(value: capnp.Orphan<MessageTarget>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownTarget(): capnp.Orphan<MessageTarget> {
    return capnp.Struct.disown(this.getTarget());
  }
  getTarget(): MessageTarget {
    return capnp.Struct.getStruct(0, MessageTarget, this);
  }
  hasTarget(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initTarget(): MessageTarget {
    return capnp.Struct.initStructAt(0, MessageTarget, this);
  }
  setTarget(value: MessageTarget): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptKeyPart(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownKeyPart(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getKeyPart());
  }
  getKeyPart(): capnp.Pointer {
    return capnp.Struct.getPointer(1, this);
  }
  hasKeyPart(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  setKeyPart(value: capnp.Pointer): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Join_" + super.toString();
  }
}

export enum MessageTarget_Which {
  IMPORTED_CAP = 0,
  PROMISED_ANSWER = 1,
}

export class MessageTarget extends capnp.Struct {
  static readonly IMPORTED_CAP = MessageTarget_Which.IMPORTED_CAP;
  static readonly PROMISED_ANSWER = MessageTarget_Which.PROMISED_ANSWER;
  static readonly _capnp = {
    displayName: "MessageTarget",
    id: "95bc14545813fbc1",
    size: new capnp.ObjectSize(8, 1),
  };
  getImportedCap(): number {
    capnp.Struct.testWhich(
      "importedCap",
      capnp.Struct.getUint16(4, this),
      0,
      this,
    );
    return capnp.Struct.getUint32(0, this);
  }
  isImportedCap(): boolean {
    return capnp.Struct.getUint16(4, this) === 0;
  }
  setImportedCap(value: number): void {
    capnp.Struct.setUint16(4, 0, this);
    capnp.Struct.setUint32(0, value, this);
  }
  adoptPromisedAnswer(value: capnp.Orphan<PromisedAnswer>): void {
    capnp.Struct.setUint16(4, 1, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownPromisedAnswer(): capnp.Orphan<PromisedAnswer> {
    return capnp.Struct.disown(this.getPromisedAnswer());
  }
  getPromisedAnswer(): PromisedAnswer {
    capnp.Struct.testWhich(
      "promisedAnswer",
      capnp.Struct.getUint16(4, this),
      1,
      this,
    );
    return capnp.Struct.getStruct(0, PromisedAnswer, this);
  }
  hasPromisedAnswer(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initPromisedAnswer(): PromisedAnswer {
    capnp.Struct.setUint16(4, 1, this);
    return capnp.Struct.initStructAt(0, PromisedAnswer, this);
  }
  isPromisedAnswer(): boolean {
    return capnp.Struct.getUint16(4, this) === 1;
  }
  setPromisedAnswer(value: PromisedAnswer): void {
    capnp.Struct.setUint16(4, 1, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "MessageTarget_" + super.toString();
  }
  which(): MessageTarget_Which {
    return capnp.Struct.getUint16(4, this);
  }
}

export class Payload extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Payload",
    id: "9a0e61223d96743b",
    size: new capnp.ObjectSize(0, 2),
  };
  static _CapTable: capnp.ListCtor<CapDescriptor>;
  adoptContent(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownContent(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getContent());
  }
  getContent(): capnp.Pointer {
    return capnp.Struct.getPointer(0, this);
  }
  hasContent(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  setContent(value: capnp.Pointer): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptCapTable(value: capnp.Orphan<capnp.List<CapDescriptor>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(1, this));
  }
  disownCapTable(): capnp.Orphan<capnp.List<CapDescriptor>> {
    return capnp.Struct.disown(this.getCapTable());
  }
  getCapTable(): capnp.List<CapDescriptor> {
    return capnp.Struct.getList(1, Payload._CapTable, this);
  }
  hasCapTable(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }
  initCapTable(length: number): capnp.List<CapDescriptor> {
    return capnp.Struct.initList(1, Payload._CapTable, length, this);
  }
  setCapTable(value: capnp.List<CapDescriptor>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Payload_" + super.toString();
  }
}

export enum CapDescriptor_Which {
  NONE = 0,
  SENDER_HOSTED = 1,
  SENDER_PROMISE = 2,
  RECEIVER_HOSTED = 3,
  RECEIVER_ANSWER = 4,
  THIRD_PARTY_HOSTED = 5,
}

export class CapDescriptor extends capnp.Struct {
  static readonly NONE = CapDescriptor_Which.NONE;
  static readonly SENDER_HOSTED = CapDescriptor_Which.SENDER_HOSTED;
  static readonly SENDER_PROMISE = CapDescriptor_Which.SENDER_PROMISE;
  static readonly RECEIVER_HOSTED = CapDescriptor_Which.RECEIVER_HOSTED;
  static readonly RECEIVER_ANSWER = CapDescriptor_Which.RECEIVER_ANSWER;
  static readonly THIRD_PARTY_HOSTED = CapDescriptor_Which.THIRD_PARTY_HOSTED;
  static readonly _capnp = {
    displayName: "CapDescriptor",
    id: "8523ddc40b86b8b0",
    size: new capnp.ObjectSize(8, 1),
  };
  isNone(): boolean {
    return capnp.Struct.getUint16(0, this) === 0;
  }
  setNone(): void {
    capnp.Struct.setUint16(0, 0, this);
  }
  getSenderHosted(): number {
    capnp.Struct.testWhich(
      "senderHosted",
      capnp.Struct.getUint16(0, this),
      1,
      this,
    );
    return capnp.Struct.getUint32(4, this);
  }
  isSenderHosted(): boolean {
    return capnp.Struct.getUint16(0, this) === 1;
  }
  setSenderHosted(value: number): void {
    capnp.Struct.setUint16(0, 1, this);
    capnp.Struct.setUint32(4, value, this);
  }
  getSenderPromise(): number {
    capnp.Struct.testWhich(
      "senderPromise",
      capnp.Struct.getUint16(0, this),
      2,
      this,
    );
    return capnp.Struct.getUint32(4, this);
  }
  isSenderPromise(): boolean {
    return capnp.Struct.getUint16(0, this) === 2;
  }
  setSenderPromise(value: number): void {
    capnp.Struct.setUint16(0, 2, this);
    capnp.Struct.setUint32(4, value, this);
  }
  getReceiverHosted(): number {
    capnp.Struct.testWhich(
      "receiverHosted",
      capnp.Struct.getUint16(0, this),
      3,
      this,
    );
    return capnp.Struct.getUint32(4, this);
  }
  isReceiverHosted(): boolean {
    return capnp.Struct.getUint16(0, this) === 3;
  }
  setReceiverHosted(value: number): void {
    capnp.Struct.setUint16(0, 3, this);
    capnp.Struct.setUint32(4, value, this);
  }
  adoptReceiverAnswer(value: capnp.Orphan<PromisedAnswer>): void {
    capnp.Struct.setUint16(0, 4, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownReceiverAnswer(): capnp.Orphan<PromisedAnswer> {
    return capnp.Struct.disown(this.getReceiverAnswer());
  }
  getReceiverAnswer(): PromisedAnswer {
    capnp.Struct.testWhich(
      "receiverAnswer",
      capnp.Struct.getUint16(0, this),
      4,
      this,
    );
    return capnp.Struct.getStruct(0, PromisedAnswer, this);
  }
  hasReceiverAnswer(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initReceiverAnswer(): PromisedAnswer {
    capnp.Struct.setUint16(0, 4, this);
    return capnp.Struct.initStructAt(0, PromisedAnswer, this);
  }
  isReceiverAnswer(): boolean {
    return capnp.Struct.getUint16(0, this) === 4;
  }
  setReceiverAnswer(value: PromisedAnswer): void {
    capnp.Struct.setUint16(0, 4, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  adoptThirdPartyHosted(value: capnp.Orphan<ThirdPartyCapDescriptor>): void {
    capnp.Struct.setUint16(0, 5, this);
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownThirdPartyHosted(): capnp.Orphan<ThirdPartyCapDescriptor> {
    return capnp.Struct.disown(this.getThirdPartyHosted());
  }
  getThirdPartyHosted(): ThirdPartyCapDescriptor {
    capnp.Struct.testWhich(
      "thirdPartyHosted",
      capnp.Struct.getUint16(0, this),
      5,
      this,
    );
    return capnp.Struct.getStruct(0, ThirdPartyCapDescriptor, this);
  }
  hasThirdPartyHosted(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initThirdPartyHosted(): ThirdPartyCapDescriptor {
    capnp.Struct.setUint16(0, 5, this);
    return capnp.Struct.initStructAt(0, ThirdPartyCapDescriptor, this);
  }
  isThirdPartyHosted(): boolean {
    return capnp.Struct.getUint16(0, this) === 5;
  }
  setThirdPartyHosted(value: ThirdPartyCapDescriptor): void {
    capnp.Struct.setUint16(0, 5, this);
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "CapDescriptor_" + super.toString();
  }
  which(): CapDescriptor_Which {
    return capnp.Struct.getUint16(0, this);
  }
}

export enum PromisedAnswer_Op_Which {
  NOOP = 0,
  GET_POINTER_FIELD = 1,
}

export class PromisedAnswer_Op extends capnp.Struct {
  static readonly NOOP = PromisedAnswer_Op_Which.NOOP;
  static readonly GET_POINTER_FIELD = PromisedAnswer_Op_Which.GET_POINTER_FIELD;
  static readonly _capnp = {
    displayName: "Op",
    id: "f316944415569081",
    size: new capnp.ObjectSize(8, 0),
  };
  isNoop(): boolean {
    return capnp.Struct.getUint16(0, this) === 0;
  }
  setNoop(): void {
    capnp.Struct.setUint16(0, 0, this);
  }
  getGetPointerField(): number {
    capnp.Struct.testWhich(
      "getPointerField",
      capnp.Struct.getUint16(0, this),
      1,
      this,
    );
    return capnp.Struct.getUint16(2, this);
  }
  isGetPointerField(): boolean {
    return capnp.Struct.getUint16(0, this) === 1;
  }
  setGetPointerField(value: number): void {
    capnp.Struct.setUint16(0, 1, this);
    capnp.Struct.setUint16(2, value, this);
  }
  toString(): string {
    return "PromisedAnswer_Op_" + super.toString();
  }
  which(): PromisedAnswer_Op_Which {
    return capnp.Struct.getUint16(0, this);
  }
}

export class PromisedAnswer extends capnp.Struct {
  static readonly Op = PromisedAnswer_Op;
  static readonly _capnp = {
    displayName: "PromisedAnswer",
    id: "d800b1d6cd6f1ca0",
    size: new capnp.ObjectSize(8, 1),
  };
  static _Transform: capnp.ListCtor<PromisedAnswer_Op>;
  getQuestionId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setQuestionId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  adoptTransform(value: capnp.Orphan<capnp.List<PromisedAnswer_Op>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownTransform(): capnp.Orphan<capnp.List<PromisedAnswer_Op>> {
    return capnp.Struct.disown(this.getTransform());
  }
  getTransform(): capnp.List<PromisedAnswer_Op> {
    return capnp.Struct.getList(0, PromisedAnswer._Transform, this);
  }
  hasTransform(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initTransform(length: number): capnp.List<PromisedAnswer_Op> {
    return capnp.Struct.initList(0, PromisedAnswer._Transform, length, this);
  }
  setTransform(value: capnp.List<PromisedAnswer_Op>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "PromisedAnswer_" + super.toString();
  }
}

export class ThirdPartyCapDescriptor extends capnp.Struct {
  static readonly _capnp = {
    displayName: "ThirdPartyCapDescriptor",
    id: "d37007fde1f0027d",
    size: new capnp.ObjectSize(8, 1),
  };
  adoptId(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownId(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getId());
  }
  getId(): capnp.Pointer {
    return capnp.Struct.getPointer(0, this);
  }
  hasId(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  setId(value: capnp.Pointer): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  getVineId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setVineId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  toString(): string {
    return "ThirdPartyCapDescriptor_" + super.toString();
  }
}

export enum Exception_Type {
  FAILED,
  OVERLOADED,
  DISCONNECTED,
  UNIMPLEMENTED,
}

export class Exception extends capnp.Struct {
  static readonly Type = Exception_Type;
  static readonly _capnp = {
    displayName: "Exception",
    id: "d625b7063acf691a",
    size: new capnp.ObjectSize(8, 1),
  };
  getReason(): string {
    return capnp.Struct.getText(0, this);
  }
  setReason(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  getType(): Exception_Type {
    return capnp.Struct.getUint16(4, this);
  }
  setType(value: Exception_Type): void {
    capnp.Struct.setUint16(4, value, this);
  }
  getObsoleteIsCallersFault(): boolean {
    return capnp.Struct.getBit(0, this);
  }
  setObsoleteIsCallersFault(value: boolean): void {
    capnp.Struct.setBit(0, value, this);
  }
  getObsoleteDurability(): number {
    return capnp.Struct.getUint16(2, this);
  }
  setObsoleteDurability(value: number): void {
    capnp.Struct.setUint16(2, value, this);
  }
  toString(): string {
    return "Exception_" + super.toString();
  }
}

Payload._CapTable = capnp.CompositeList(CapDescriptor);
PromisedAnswer._Transform = capnp.CompositeList(PromisedAnswer_Op);
