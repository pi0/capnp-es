import * as $ from "../serialization";
export const _capnpFileId = BigInt("0xb312981b2552a250");
export const Message_Which = {
  UNIMPLEMENTED: 0,
  ABORT: 1,
  BOOTSTRAP: 2,
  CALL: 3,
  RETURN: 4,
  FINISH: 5,
  RESOLVE: 6,
  RELEASE: 7,
  DISEMBARGO: 8,
  OBSOLETE_SAVE: 9,
  OBSOLETE_DELETE: 10,
  PROVIDE: 11,
  ACCEPT: 12,
  JOIN: 13,
} as const;
export type Message_Which = (typeof Message_Which)[keyof typeof Message_Which];
export class Message extends $.Struct {
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
    size: new $.ObjectSize(8, 1),
  };
  adoptUnimplemented(value: $.Orphan<Message>): void {
    $.Struct.setUint16(0, 0, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownUnimplemented(): $.Orphan<Message> {
    return $.Struct.disown(this.unimplemented);
  }
  get unimplemented(): Message {
    $.Struct.testWhich("unimplemented", $.Struct.getUint16(0, this), 0, this);
    return $.Struct.getStruct(0, Message, this);
  }
  hasUnimplemented(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initUnimplemented(): Message {
    $.Struct.setUint16(0, 0, this);
    return $.Struct.initStructAt(0, Message, this);
  }
  isUnimplemented(): boolean {
    return $.Struct.getUint16(0, this) === 0;
  }
  set unimplemented(value: Message) {
    $.Struct.setUint16(0, 0, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptAbort(value: $.Orphan<Exception>): void {
    $.Struct.setUint16(0, 1, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownAbort(): $.Orphan<Exception> {
    return $.Struct.disown(this.abort);
  }
  get abort(): Exception {
    $.Struct.testWhich("abort", $.Struct.getUint16(0, this), 1, this);
    return $.Struct.getStruct(0, Exception, this);
  }
  hasAbort(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initAbort(): Exception {
    $.Struct.setUint16(0, 1, this);
    return $.Struct.initStructAt(0, Exception, this);
  }
  isAbort(): boolean {
    return $.Struct.getUint16(0, this) === 1;
  }
  set abort(value: Exception) {
    $.Struct.setUint16(0, 1, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptBootstrap(value: $.Orphan<Bootstrap>): void {
    $.Struct.setUint16(0, 8, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownBootstrap(): $.Orphan<Bootstrap> {
    return $.Struct.disown(this.bootstrap);
  }
  get bootstrap(): Bootstrap {
    $.Struct.testWhich("bootstrap", $.Struct.getUint16(0, this), 8, this);
    return $.Struct.getStruct(0, Bootstrap, this);
  }
  hasBootstrap(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initBootstrap(): Bootstrap {
    $.Struct.setUint16(0, 8, this);
    return $.Struct.initStructAt(0, Bootstrap, this);
  }
  isBootstrap(): boolean {
    return $.Struct.getUint16(0, this) === 8;
  }
  set bootstrap(value: Bootstrap) {
    $.Struct.setUint16(0, 8, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptCall(value: $.Orphan<Call>): void {
    $.Struct.setUint16(0, 2, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownCall(): $.Orphan<Call> {
    return $.Struct.disown(this.call);
  }
  get call(): Call {
    $.Struct.testWhich("call", $.Struct.getUint16(0, this), 2, this);
    return $.Struct.getStruct(0, Call, this);
  }
  hasCall(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initCall(): Call {
    $.Struct.setUint16(0, 2, this);
    return $.Struct.initStructAt(0, Call, this);
  }
  isCall(): boolean {
    return $.Struct.getUint16(0, this) === 2;
  }
  set call(value: Call) {
    $.Struct.setUint16(0, 2, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptReturn(value: $.Orphan<Return>): void {
    $.Struct.setUint16(0, 3, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownReturn(): $.Orphan<Return> {
    return $.Struct.disown(this.return);
  }
  get return(): Return {
    $.Struct.testWhich("return", $.Struct.getUint16(0, this), 3, this);
    return $.Struct.getStruct(0, Return, this);
  }
  hasReturn(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initReturn(): Return {
    $.Struct.setUint16(0, 3, this);
    return $.Struct.initStructAt(0, Return, this);
  }
  isReturn(): boolean {
    return $.Struct.getUint16(0, this) === 3;
  }
  set return(value: Return) {
    $.Struct.setUint16(0, 3, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptFinish(value: $.Orphan<Finish>): void {
    $.Struct.setUint16(0, 4, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownFinish(): $.Orphan<Finish> {
    return $.Struct.disown(this.finish);
  }
  get finish(): Finish {
    $.Struct.testWhich("finish", $.Struct.getUint16(0, this), 4, this);
    return $.Struct.getStruct(0, Finish, this);
  }
  hasFinish(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initFinish(): Finish {
    $.Struct.setUint16(0, 4, this);
    return $.Struct.initStructAt(0, Finish, this);
  }
  isFinish(): boolean {
    return $.Struct.getUint16(0, this) === 4;
  }
  set finish(value: Finish) {
    $.Struct.setUint16(0, 4, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptResolve(value: $.Orphan<Resolve>): void {
    $.Struct.setUint16(0, 5, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownResolve(): $.Orphan<Resolve> {
    return $.Struct.disown(this.resolve);
  }
  get resolve(): Resolve {
    $.Struct.testWhich("resolve", $.Struct.getUint16(0, this), 5, this);
    return $.Struct.getStruct(0, Resolve, this);
  }
  hasResolve(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initResolve(): Resolve {
    $.Struct.setUint16(0, 5, this);
    return $.Struct.initStructAt(0, Resolve, this);
  }
  isResolve(): boolean {
    return $.Struct.getUint16(0, this) === 5;
  }
  set resolve(value: Resolve) {
    $.Struct.setUint16(0, 5, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptRelease(value: $.Orphan<Release>): void {
    $.Struct.setUint16(0, 6, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownRelease(): $.Orphan<Release> {
    return $.Struct.disown(this.release);
  }
  get release(): Release {
    $.Struct.testWhich("release", $.Struct.getUint16(0, this), 6, this);
    return $.Struct.getStruct(0, Release, this);
  }
  hasRelease(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initRelease(): Release {
    $.Struct.setUint16(0, 6, this);
    return $.Struct.initStructAt(0, Release, this);
  }
  isRelease(): boolean {
    return $.Struct.getUint16(0, this) === 6;
  }
  set release(value: Release) {
    $.Struct.setUint16(0, 6, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptDisembargo(value: $.Orphan<Disembargo>): void {
    $.Struct.setUint16(0, 13, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownDisembargo(): $.Orphan<Disembargo> {
    return $.Struct.disown(this.disembargo);
  }
  get disembargo(): Disembargo {
    $.Struct.testWhich("disembargo", $.Struct.getUint16(0, this), 13, this);
    return $.Struct.getStruct(0, Disembargo, this);
  }
  hasDisembargo(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initDisembargo(): Disembargo {
    $.Struct.setUint16(0, 13, this);
    return $.Struct.initStructAt(0, Disembargo, this);
  }
  isDisembargo(): boolean {
    return $.Struct.getUint16(0, this) === 13;
  }
  set disembargo(value: Disembargo) {
    $.Struct.setUint16(0, 13, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptObsoleteSave(value: $.Orphan<$.Pointer>): void {
    $.Struct.setUint16(0, 7, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownObsoleteSave(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.obsoleteSave);
  }
  get obsoleteSave(): $.Pointer {
    $.Struct.testWhich("obsoleteSave", $.Struct.getUint16(0, this), 7, this);
    return $.Struct.getPointer(0, this);
  }
  hasObsoleteSave(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  isObsoleteSave(): boolean {
    return $.Struct.getUint16(0, this) === 7;
  }
  set obsoleteSave(value: $.Pointer) {
    $.Struct.setUint16(0, 7, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptObsoleteDelete(value: $.Orphan<$.Pointer>): void {
    $.Struct.setUint16(0, 9, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownObsoleteDelete(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.obsoleteDelete);
  }
  get obsoleteDelete(): $.Pointer {
    $.Struct.testWhich("obsoleteDelete", $.Struct.getUint16(0, this), 9, this);
    return $.Struct.getPointer(0, this);
  }
  hasObsoleteDelete(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  isObsoleteDelete(): boolean {
    return $.Struct.getUint16(0, this) === 9;
  }
  set obsoleteDelete(value: $.Pointer) {
    $.Struct.setUint16(0, 9, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptProvide(value: $.Orphan<Provide>): void {
    $.Struct.setUint16(0, 10, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownProvide(): $.Orphan<Provide> {
    return $.Struct.disown(this.provide);
  }
  get provide(): Provide {
    $.Struct.testWhich("provide", $.Struct.getUint16(0, this), 10, this);
    return $.Struct.getStruct(0, Provide, this);
  }
  hasProvide(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initProvide(): Provide {
    $.Struct.setUint16(0, 10, this);
    return $.Struct.initStructAt(0, Provide, this);
  }
  isProvide(): boolean {
    return $.Struct.getUint16(0, this) === 10;
  }
  set provide(value: Provide) {
    $.Struct.setUint16(0, 10, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptAccept(value: $.Orphan<Accept>): void {
    $.Struct.setUint16(0, 11, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownAccept(): $.Orphan<Accept> {
    return $.Struct.disown(this.accept);
  }
  get accept(): Accept {
    $.Struct.testWhich("accept", $.Struct.getUint16(0, this), 11, this);
    return $.Struct.getStruct(0, Accept, this);
  }
  hasAccept(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initAccept(): Accept {
    $.Struct.setUint16(0, 11, this);
    return $.Struct.initStructAt(0, Accept, this);
  }
  isAccept(): boolean {
    return $.Struct.getUint16(0, this) === 11;
  }
  set accept(value: Accept) {
    $.Struct.setUint16(0, 11, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptJoin(value: $.Orphan<Join>): void {
    $.Struct.setUint16(0, 12, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownJoin(): $.Orphan<Join> {
    return $.Struct.disown(this.join);
  }
  get join(): Join {
    $.Struct.testWhich("join", $.Struct.getUint16(0, this), 12, this);
    return $.Struct.getStruct(0, Join, this);
  }
  hasJoin(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initJoin(): Join {
    $.Struct.setUint16(0, 12, this);
    return $.Struct.initStructAt(0, Join, this);
  }
  isJoin(): boolean {
    return $.Struct.getUint16(0, this) === 12;
  }
  set join(value: Join) {
    $.Struct.setUint16(0, 12, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Message_" + super.toString();
  }
  which(): Message_Which {
    return $.Struct.getUint16(0, this) as Message_Which;
  }
}
export class Bootstrap extends $.Struct {
  static readonly _capnp = {
    displayName: "Bootstrap",
    id: "e94ccf8031176ec4",
    size: new $.ObjectSize(8, 1),
  };
  get questionId(): number {
    return $.Struct.getUint32(0, this);
  }
  set questionId(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  adoptDeprecatedObjectId(value: $.Orphan<$.Pointer>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownDeprecatedObjectId(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.deprecatedObjectId);
  }
  get deprecatedObjectId(): $.Pointer {
    return $.Struct.getPointer(0, this);
  }
  hasDeprecatedObjectId(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  set deprecatedObjectId(value: $.Pointer) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Bootstrap_" + super.toString();
  }
}
export const Call_SendResultsTo_Which = {
  CALLER: 0,
  YOURSELF: 1,
  THIRD_PARTY: 2,
} as const;
export type Call_SendResultsTo_Which =
  (typeof Call_SendResultsTo_Which)[keyof typeof Call_SendResultsTo_Which];
export class Call_SendResultsTo extends $.Struct {
  static readonly CALLER = Call_SendResultsTo_Which.CALLER;
  static readonly YOURSELF = Call_SendResultsTo_Which.YOURSELF;
  static readonly THIRD_PARTY = Call_SendResultsTo_Which.THIRD_PARTY;
  static readonly _capnp = {
    displayName: "sendResultsTo",
    id: "dae8b0f61aab5f99",
    size: new $.ObjectSize(24, 3),
  };
  isCaller(): boolean {
    return $.Struct.getUint16(6, this) === 0;
  }
  set caller(_: true) {
    $.Struct.setUint16(6, 0, this);
  }
  isYourself(): boolean {
    return $.Struct.getUint16(6, this) === 1;
  }
  set yourself(_: true) {
    $.Struct.setUint16(6, 1, this);
  }
  adoptThirdParty(value: $.Orphan<$.Pointer>): void {
    $.Struct.setUint16(6, 2, this);
    $.Struct.adopt(value, $.Struct.getPointer(2, this));
  }
  disownThirdParty(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.thirdParty);
  }
  get thirdParty(): $.Pointer {
    $.Struct.testWhich("thirdParty", $.Struct.getUint16(6, this), 2, this);
    return $.Struct.getPointer(2, this);
  }
  hasThirdParty(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(2, this));
  }
  isThirdParty(): boolean {
    return $.Struct.getUint16(6, this) === 2;
  }
  set thirdParty(value: $.Pointer) {
    $.Struct.setUint16(6, 2, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(2, this));
  }
  toString(): string {
    return "Call_SendResultsTo_" + super.toString();
  }
  which(): Call_SendResultsTo_Which {
    return $.Struct.getUint16(6, this) as Call_SendResultsTo_Which;
  }
}
export class Call extends $.Struct {
  static readonly _capnp = {
    displayName: "Call",
    id: "836a53ce789d4cd4",
    size: new $.ObjectSize(24, 3),
    defaultAllowThirdPartyTailCall: $.getBitMask(false, 0),
    defaultNoPromisePipelining: $.getBitMask(false, 1),
    defaultOnlyPromisePipeline: $.getBitMask(false, 2),
  };
  get questionId(): number {
    return $.Struct.getUint32(0, this);
  }
  set questionId(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  adoptTarget(value: $.Orphan<MessageTarget>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownTarget(): $.Orphan<MessageTarget> {
    return $.Struct.disown(this.target);
  }
  get target(): MessageTarget {
    return $.Struct.getStruct(0, MessageTarget, this);
  }
  hasTarget(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initTarget(): MessageTarget {
    return $.Struct.initStructAt(0, MessageTarget, this);
  }
  set target(value: MessageTarget) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  get interfaceId(): bigint {
    return $.Struct.getUint64(8, this);
  }
  set interfaceId(value: bigint) {
    $.Struct.setUint64(8, value, this);
  }
  get methodId(): number {
    return $.Struct.getUint16(4, this);
  }
  set methodId(value: number) {
    $.Struct.setUint16(4, value, this);
  }
  get allowThirdPartyTailCall(): boolean {
    return $.Struct.getBit(
      128,
      this,
      Call._capnp.defaultAllowThirdPartyTailCall,
    );
  }
  set allowThirdPartyTailCall(value: boolean) {
    $.Struct.setBit(
      128,
      value,
      this,
      Call._capnp.defaultAllowThirdPartyTailCall,
    );
  }
  get noPromisePipelining(): boolean {
    return $.Struct.getBit(129, this, Call._capnp.defaultNoPromisePipelining);
  }
  set noPromisePipelining(value: boolean) {
    $.Struct.setBit(129, value, this, Call._capnp.defaultNoPromisePipelining);
  }
  get onlyPromisePipeline(): boolean {
    return $.Struct.getBit(130, this, Call._capnp.defaultOnlyPromisePipeline);
  }
  set onlyPromisePipeline(value: boolean) {
    $.Struct.setBit(130, value, this, Call._capnp.defaultOnlyPromisePipeline);
  }
  adoptParams(value: $.Orphan<Payload>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownParams(): $.Orphan<Payload> {
    return $.Struct.disown(this.params);
  }
  get params(): Payload {
    return $.Struct.getStruct(1, Payload, this);
  }
  hasParams(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initParams(): Payload {
    return $.Struct.initStructAt(1, Payload, this);
  }
  set params(value: Payload) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  get sendResultsTo(): Call_SendResultsTo {
    return $.Struct.getAs(Call_SendResultsTo, this);
  }
  initSendResultsTo(): Call_SendResultsTo {
    return $.Struct.getAs(Call_SendResultsTo, this);
  }
  toString(): string {
    return "Call_" + super.toString();
  }
}
export const Return_Which = {
  RESULTS: 0,
  EXCEPTION: 1,
  CANCELED: 2,
  RESULTS_SENT_ELSEWHERE: 3,
  TAKE_FROM_OTHER_QUESTION: 4,
  ACCEPT_FROM_THIRD_PARTY: 5,
} as const;
export type Return_Which = (typeof Return_Which)[keyof typeof Return_Which];
export class Return extends $.Struct {
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
    size: new $.ObjectSize(16, 1),
    defaultReleaseParamCaps: $.getBitMask(true, 0),
    defaultNoFinishNeeded: $.getBitMask(false, 1),
  };
  get answerId(): number {
    return $.Struct.getUint32(0, this);
  }
  set answerId(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  get releaseParamCaps(): boolean {
    return $.Struct.getBit(32, this, Return._capnp.defaultReleaseParamCaps);
  }
  set releaseParamCaps(value: boolean) {
    $.Struct.setBit(32, value, this, Return._capnp.defaultReleaseParamCaps);
  }
  get noFinishNeeded(): boolean {
    return $.Struct.getBit(33, this, Return._capnp.defaultNoFinishNeeded);
  }
  set noFinishNeeded(value: boolean) {
    $.Struct.setBit(33, value, this, Return._capnp.defaultNoFinishNeeded);
  }
  adoptResults(value: $.Orphan<Payload>): void {
    $.Struct.setUint16(6, 0, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownResults(): $.Orphan<Payload> {
    return $.Struct.disown(this.results);
  }
  get results(): Payload {
    $.Struct.testWhich("results", $.Struct.getUint16(6, this), 0, this);
    return $.Struct.getStruct(0, Payload, this);
  }
  hasResults(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initResults(): Payload {
    $.Struct.setUint16(6, 0, this);
    return $.Struct.initStructAt(0, Payload, this);
  }
  isResults(): boolean {
    return $.Struct.getUint16(6, this) === 0;
  }
  set results(value: Payload) {
    $.Struct.setUint16(6, 0, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptException(value: $.Orphan<Exception>): void {
    $.Struct.setUint16(6, 1, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownException(): $.Orphan<Exception> {
    return $.Struct.disown(this.exception);
  }
  get exception(): Exception {
    $.Struct.testWhich("exception", $.Struct.getUint16(6, this), 1, this);
    return $.Struct.getStruct(0, Exception, this);
  }
  hasException(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initException(): Exception {
    $.Struct.setUint16(6, 1, this);
    return $.Struct.initStructAt(0, Exception, this);
  }
  isException(): boolean {
    return $.Struct.getUint16(6, this) === 1;
  }
  set exception(value: Exception) {
    $.Struct.setUint16(6, 1, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  isCanceled(): boolean {
    return $.Struct.getUint16(6, this) === 2;
  }
  set canceled(_: true) {
    $.Struct.setUint16(6, 2, this);
  }
  isResultsSentElsewhere(): boolean {
    return $.Struct.getUint16(6, this) === 3;
  }
  set resultsSentElsewhere(_: true) {
    $.Struct.setUint16(6, 3, this);
  }
  get takeFromOtherQuestion(): number {
    $.Struct.testWhich(
      "takeFromOtherQuestion",
      $.Struct.getUint16(6, this),
      4,
      this,
    );
    return $.Struct.getUint32(8, this);
  }
  isTakeFromOtherQuestion(): boolean {
    return $.Struct.getUint16(6, this) === 4;
  }
  set takeFromOtherQuestion(value: number) {
    $.Struct.setUint16(6, 4, this);
    $.Struct.setUint32(8, value, this);
  }
  adoptAcceptFromThirdParty(value: $.Orphan<$.Pointer>): void {
    $.Struct.setUint16(6, 5, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownAcceptFromThirdParty(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.acceptFromThirdParty);
  }
  get acceptFromThirdParty(): $.Pointer {
    $.Struct.testWhich(
      "acceptFromThirdParty",
      $.Struct.getUint16(6, this),
      5,
      this,
    );
    return $.Struct.getPointer(0, this);
  }
  hasAcceptFromThirdParty(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  isAcceptFromThirdParty(): boolean {
    return $.Struct.getUint16(6, this) === 5;
  }
  set acceptFromThirdParty(value: $.Pointer) {
    $.Struct.setUint16(6, 5, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Return_" + super.toString();
  }
  which(): Return_Which {
    return $.Struct.getUint16(6, this) as Return_Which;
  }
}
export class Finish extends $.Struct {
  static readonly _capnp = {
    displayName: "Finish",
    id: "d37d2eb2c2f80e63",
    size: new $.ObjectSize(8, 0),
    defaultReleaseResultCaps: $.getBitMask(true, 0),
    defaultRequireEarlyCancellationWorkaround: $.getBitMask(true, 1),
  };
  get questionId(): number {
    return $.Struct.getUint32(0, this);
  }
  set questionId(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  get releaseResultCaps(): boolean {
    return $.Struct.getBit(32, this, Finish._capnp.defaultReleaseResultCaps);
  }
  set releaseResultCaps(value: boolean) {
    $.Struct.setBit(32, value, this, Finish._capnp.defaultReleaseResultCaps);
  }
  get requireEarlyCancellationWorkaround(): boolean {
    return $.Struct.getBit(
      33,
      this,
      Finish._capnp.defaultRequireEarlyCancellationWorkaround,
    );
  }
  set requireEarlyCancellationWorkaround(value: boolean) {
    $.Struct.setBit(
      33,
      value,
      this,
      Finish._capnp.defaultRequireEarlyCancellationWorkaround,
    );
  }
  toString(): string {
    return "Finish_" + super.toString();
  }
}
export const Resolve_Which = {
  CAP: 0,
  EXCEPTION: 1,
} as const;
export type Resolve_Which = (typeof Resolve_Which)[keyof typeof Resolve_Which];
export class Resolve extends $.Struct {
  static readonly CAP = Resolve_Which.CAP;
  static readonly EXCEPTION = Resolve_Which.EXCEPTION;
  static readonly _capnp = {
    displayName: "Resolve",
    id: "bbc29655fa89086e",
    size: new $.ObjectSize(8, 1),
  };
  get promiseId(): number {
    return $.Struct.getUint32(0, this);
  }
  set promiseId(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  adoptCap(value: $.Orphan<CapDescriptor>): void {
    $.Struct.setUint16(4, 0, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownCap(): $.Orphan<CapDescriptor> {
    return $.Struct.disown(this.cap);
  }
  get cap(): CapDescriptor {
    $.Struct.testWhich("cap", $.Struct.getUint16(4, this), 0, this);
    return $.Struct.getStruct(0, CapDescriptor, this);
  }
  hasCap(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initCap(): CapDescriptor {
    $.Struct.setUint16(4, 0, this);
    return $.Struct.initStructAt(0, CapDescriptor, this);
  }
  isCap(): boolean {
    return $.Struct.getUint16(4, this) === 0;
  }
  set cap(value: CapDescriptor) {
    $.Struct.setUint16(4, 0, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptException(value: $.Orphan<Exception>): void {
    $.Struct.setUint16(4, 1, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownException(): $.Orphan<Exception> {
    return $.Struct.disown(this.exception);
  }
  get exception(): Exception {
    $.Struct.testWhich("exception", $.Struct.getUint16(4, this), 1, this);
    return $.Struct.getStruct(0, Exception, this);
  }
  hasException(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initException(): Exception {
    $.Struct.setUint16(4, 1, this);
    return $.Struct.initStructAt(0, Exception, this);
  }
  isException(): boolean {
    return $.Struct.getUint16(4, this) === 1;
  }
  set exception(value: Exception) {
    $.Struct.setUint16(4, 1, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Resolve_" + super.toString();
  }
  which(): Resolve_Which {
    return $.Struct.getUint16(4, this) as Resolve_Which;
  }
}
export class Release extends $.Struct {
  static readonly _capnp = {
    displayName: "Release",
    id: "ad1a6c0d7dd07497",
    size: new $.ObjectSize(8, 0),
  };
  get id(): number {
    return $.Struct.getUint32(0, this);
  }
  set id(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  get referenceCount(): number {
    return $.Struct.getUint32(4, this);
  }
  set referenceCount(value: number) {
    $.Struct.setUint32(4, value, this);
  }
  toString(): string {
    return "Release_" + super.toString();
  }
}
export const Disembargo_Context_Which = {
  SENDER_LOOPBACK: 0,
  RECEIVER_LOOPBACK: 1,
  ACCEPT: 2,
  PROVIDE: 3,
} as const;
export type Disembargo_Context_Which =
  (typeof Disembargo_Context_Which)[keyof typeof Disembargo_Context_Which];
export class Disembargo_Context extends $.Struct {
  static readonly SENDER_LOOPBACK = Disembargo_Context_Which.SENDER_LOOPBACK;
  static readonly RECEIVER_LOOPBACK =
    Disembargo_Context_Which.RECEIVER_LOOPBACK;
  static readonly ACCEPT = Disembargo_Context_Which.ACCEPT;
  static readonly PROVIDE = Disembargo_Context_Which.PROVIDE;
  static readonly _capnp = {
    displayName: "context",
    id: "d562b4df655bdd4d",
    size: new $.ObjectSize(8, 1),
  };
  get senderLoopback(): number {
    $.Struct.testWhich("senderLoopback", $.Struct.getUint16(4, this), 0, this);
    return $.Struct.getUint32(0, this);
  }
  isSenderLoopback(): boolean {
    return $.Struct.getUint16(4, this) === 0;
  }
  set senderLoopback(value: number) {
    $.Struct.setUint16(4, 0, this);
    $.Struct.setUint32(0, value, this);
  }
  get receiverLoopback(): number {
    $.Struct.testWhich(
      "receiverLoopback",
      $.Struct.getUint16(4, this),
      1,
      this,
    );
    return $.Struct.getUint32(0, this);
  }
  isReceiverLoopback(): boolean {
    return $.Struct.getUint16(4, this) === 1;
  }
  set receiverLoopback(value: number) {
    $.Struct.setUint16(4, 1, this);
    $.Struct.setUint32(0, value, this);
  }
  isAccept(): boolean {
    return $.Struct.getUint16(4, this) === 2;
  }
  set accept(_: true) {
    $.Struct.setUint16(4, 2, this);
  }
  get provide(): number {
    $.Struct.testWhich("provide", $.Struct.getUint16(4, this), 3, this);
    return $.Struct.getUint32(0, this);
  }
  isProvide(): boolean {
    return $.Struct.getUint16(4, this) === 3;
  }
  set provide(value: number) {
    $.Struct.setUint16(4, 3, this);
    $.Struct.setUint32(0, value, this);
  }
  toString(): string {
    return "Disembargo_Context_" + super.toString();
  }
  which(): Disembargo_Context_Which {
    return $.Struct.getUint16(4, this) as Disembargo_Context_Which;
  }
}
export class Disembargo extends $.Struct {
  static readonly _capnp = {
    displayName: "Disembargo",
    id: "f964368b0fbd3711",
    size: new $.ObjectSize(8, 1),
  };
  adoptTarget(value: $.Orphan<MessageTarget>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownTarget(): $.Orphan<MessageTarget> {
    return $.Struct.disown(this.target);
  }
  get target(): MessageTarget {
    return $.Struct.getStruct(0, MessageTarget, this);
  }
  hasTarget(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initTarget(): MessageTarget {
    return $.Struct.initStructAt(0, MessageTarget, this);
  }
  set target(value: MessageTarget) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  get context(): Disembargo_Context {
    return $.Struct.getAs(Disembargo_Context, this);
  }
  initContext(): Disembargo_Context {
    return $.Struct.getAs(Disembargo_Context, this);
  }
  toString(): string {
    return "Disembargo_" + super.toString();
  }
}
export class Provide extends $.Struct {
  static readonly _capnp = {
    displayName: "Provide",
    id: "9c6a046bfbc1ac5a",
    size: new $.ObjectSize(8, 2),
  };
  get questionId(): number {
    return $.Struct.getUint32(0, this);
  }
  set questionId(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  adoptTarget(value: $.Orphan<MessageTarget>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownTarget(): $.Orphan<MessageTarget> {
    return $.Struct.disown(this.target);
  }
  get target(): MessageTarget {
    return $.Struct.getStruct(0, MessageTarget, this);
  }
  hasTarget(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initTarget(): MessageTarget {
    return $.Struct.initStructAt(0, MessageTarget, this);
  }
  set target(value: MessageTarget) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptRecipient(value: $.Orphan<$.Pointer>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownRecipient(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.recipient);
  }
  get recipient(): $.Pointer {
    return $.Struct.getPointer(1, this);
  }
  hasRecipient(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  set recipient(value: $.Pointer) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Provide_" + super.toString();
  }
}
export class Accept extends $.Struct {
  static readonly _capnp = {
    displayName: "Accept",
    id: "d4c9b56290554016",
    size: new $.ObjectSize(8, 1),
  };
  get questionId(): number {
    return $.Struct.getUint32(0, this);
  }
  set questionId(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  adoptProvision(value: $.Orphan<$.Pointer>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownProvision(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.provision);
  }
  get provision(): $.Pointer {
    return $.Struct.getPointer(0, this);
  }
  hasProvision(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  set provision(value: $.Pointer) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  get embargo(): boolean {
    return $.Struct.getBit(32, this);
  }
  set embargo(value: boolean) {
    $.Struct.setBit(32, value, this);
  }
  toString(): string {
    return "Accept_" + super.toString();
  }
}
export class Join extends $.Struct {
  static readonly _capnp = {
    displayName: "Join",
    id: "fbe1980490e001af",
    size: new $.ObjectSize(8, 2),
  };
  get questionId(): number {
    return $.Struct.getUint32(0, this);
  }
  set questionId(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  adoptTarget(value: $.Orphan<MessageTarget>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownTarget(): $.Orphan<MessageTarget> {
    return $.Struct.disown(this.target);
  }
  get target(): MessageTarget {
    return $.Struct.getStruct(0, MessageTarget, this);
  }
  hasTarget(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initTarget(): MessageTarget {
    return $.Struct.initStructAt(0, MessageTarget, this);
  }
  set target(value: MessageTarget) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptKeyPart(value: $.Orphan<$.Pointer>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownKeyPart(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.keyPart);
  }
  get keyPart(): $.Pointer {
    return $.Struct.getPointer(1, this);
  }
  hasKeyPart(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  set keyPart(value: $.Pointer) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Join_" + super.toString();
  }
}
export const MessageTarget_Which = {
  IMPORTED_CAP: 0,
  PROMISED_ANSWER: 1,
} as const;
export type MessageTarget_Which =
  (typeof MessageTarget_Which)[keyof typeof MessageTarget_Which];
export class MessageTarget extends $.Struct {
  static readonly IMPORTED_CAP = MessageTarget_Which.IMPORTED_CAP;
  static readonly PROMISED_ANSWER = MessageTarget_Which.PROMISED_ANSWER;
  static readonly _capnp = {
    displayName: "MessageTarget",
    id: "95bc14545813fbc1",
    size: new $.ObjectSize(8, 1),
  };
  get importedCap(): number {
    $.Struct.testWhich("importedCap", $.Struct.getUint16(4, this), 0, this);
    return $.Struct.getUint32(0, this);
  }
  isImportedCap(): boolean {
    return $.Struct.getUint16(4, this) === 0;
  }
  set importedCap(value: number) {
    $.Struct.setUint16(4, 0, this);
    $.Struct.setUint32(0, value, this);
  }
  adoptPromisedAnswer(value: $.Orphan<PromisedAnswer>): void {
    $.Struct.setUint16(4, 1, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownPromisedAnswer(): $.Orphan<PromisedAnswer> {
    return $.Struct.disown(this.promisedAnswer);
  }
  get promisedAnswer(): PromisedAnswer {
    $.Struct.testWhich("promisedAnswer", $.Struct.getUint16(4, this), 1, this);
    return $.Struct.getStruct(0, PromisedAnswer, this);
  }
  hasPromisedAnswer(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initPromisedAnswer(): PromisedAnswer {
    $.Struct.setUint16(4, 1, this);
    return $.Struct.initStructAt(0, PromisedAnswer, this);
  }
  isPromisedAnswer(): boolean {
    return $.Struct.getUint16(4, this) === 1;
  }
  set promisedAnswer(value: PromisedAnswer) {
    $.Struct.setUint16(4, 1, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "MessageTarget_" + super.toString();
  }
  which(): MessageTarget_Which {
    return $.Struct.getUint16(4, this) as MessageTarget_Which;
  }
}
export class Payload extends $.Struct {
  static readonly _capnp = {
    displayName: "Payload",
    id: "9a0e61223d96743b",
    size: new $.ObjectSize(0, 2),
  };
  static _CapTable: $.ListCtor<CapDescriptor>;
  adoptContent(value: $.Orphan<$.Pointer>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownContent(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.content);
  }
  get content(): $.Pointer {
    return $.Struct.getPointer(0, this);
  }
  hasContent(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  set content(value: $.Pointer) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptCapTable(value: $.Orphan<$.List<CapDescriptor>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(1, this));
  }
  disownCapTable(): $.Orphan<$.List<CapDescriptor>> {
    return $.Struct.disown(this.capTable);
  }
  get capTable(): $.List<CapDescriptor> {
    return $.Struct.getList(1, Payload._CapTable, this);
  }
  hasCapTable(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(1, this));
  }
  initCapTable(length: number): $.List<CapDescriptor> {
    return $.Struct.initList(1, Payload._CapTable, length, this);
  }
  set capTable(value: $.List<CapDescriptor>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(1, this));
  }
  toString(): string {
    return "Payload_" + super.toString();
  }
}
export const CapDescriptor_Which = {
  NONE: 0,
  SENDER_HOSTED: 1,
  SENDER_PROMISE: 2,
  RECEIVER_HOSTED: 3,
  RECEIVER_ANSWER: 4,
  THIRD_PARTY_HOSTED: 5,
} as const;
export type CapDescriptor_Which =
  (typeof CapDescriptor_Which)[keyof typeof CapDescriptor_Which];
export class CapDescriptor extends $.Struct {
  static readonly NONE = CapDescriptor_Which.NONE;
  static readonly SENDER_HOSTED = CapDescriptor_Which.SENDER_HOSTED;
  static readonly SENDER_PROMISE = CapDescriptor_Which.SENDER_PROMISE;
  static readonly RECEIVER_HOSTED = CapDescriptor_Which.RECEIVER_HOSTED;
  static readonly RECEIVER_ANSWER = CapDescriptor_Which.RECEIVER_ANSWER;
  static readonly THIRD_PARTY_HOSTED = CapDescriptor_Which.THIRD_PARTY_HOSTED;
  static readonly _capnp = {
    displayName: "CapDescriptor",
    id: "8523ddc40b86b8b0",
    size: new $.ObjectSize(8, 1),
    defaultAttachedFd: $.getUint8Mask(255),
  };
  isNone(): boolean {
    return $.Struct.getUint16(0, this) === 0;
  }
  set none(_: true) {
    $.Struct.setUint16(0, 0, this);
  }
  get senderHosted(): number {
    $.Struct.testWhich("senderHosted", $.Struct.getUint16(0, this), 1, this);
    return $.Struct.getUint32(4, this);
  }
  isSenderHosted(): boolean {
    return $.Struct.getUint16(0, this) === 1;
  }
  set senderHosted(value: number) {
    $.Struct.setUint16(0, 1, this);
    $.Struct.setUint32(4, value, this);
  }
  get senderPromise(): number {
    $.Struct.testWhich("senderPromise", $.Struct.getUint16(0, this), 2, this);
    return $.Struct.getUint32(4, this);
  }
  isSenderPromise(): boolean {
    return $.Struct.getUint16(0, this) === 2;
  }
  set senderPromise(value: number) {
    $.Struct.setUint16(0, 2, this);
    $.Struct.setUint32(4, value, this);
  }
  get receiverHosted(): number {
    $.Struct.testWhich("receiverHosted", $.Struct.getUint16(0, this), 3, this);
    return $.Struct.getUint32(4, this);
  }
  isReceiverHosted(): boolean {
    return $.Struct.getUint16(0, this) === 3;
  }
  set receiverHosted(value: number) {
    $.Struct.setUint16(0, 3, this);
    $.Struct.setUint32(4, value, this);
  }
  adoptReceiverAnswer(value: $.Orphan<PromisedAnswer>): void {
    $.Struct.setUint16(0, 4, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownReceiverAnswer(): $.Orphan<PromisedAnswer> {
    return $.Struct.disown(this.receiverAnswer);
  }
  get receiverAnswer(): PromisedAnswer {
    $.Struct.testWhich("receiverAnswer", $.Struct.getUint16(0, this), 4, this);
    return $.Struct.getStruct(0, PromisedAnswer, this);
  }
  hasReceiverAnswer(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initReceiverAnswer(): PromisedAnswer {
    $.Struct.setUint16(0, 4, this);
    return $.Struct.initStructAt(0, PromisedAnswer, this);
  }
  isReceiverAnswer(): boolean {
    return $.Struct.getUint16(0, this) === 4;
  }
  set receiverAnswer(value: PromisedAnswer) {
    $.Struct.setUint16(0, 4, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  adoptThirdPartyHosted(value: $.Orphan<ThirdPartyCapDescriptor>): void {
    $.Struct.setUint16(0, 5, this);
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownThirdPartyHosted(): $.Orphan<ThirdPartyCapDescriptor> {
    return $.Struct.disown(this.thirdPartyHosted);
  }
  get thirdPartyHosted(): ThirdPartyCapDescriptor {
    $.Struct.testWhich(
      "thirdPartyHosted",
      $.Struct.getUint16(0, this),
      5,
      this,
    );
    return $.Struct.getStruct(0, ThirdPartyCapDescriptor, this);
  }
  hasThirdPartyHosted(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initThirdPartyHosted(): ThirdPartyCapDescriptor {
    $.Struct.setUint16(0, 5, this);
    return $.Struct.initStructAt(0, ThirdPartyCapDescriptor, this);
  }
  isThirdPartyHosted(): boolean {
    return $.Struct.getUint16(0, this) === 5;
  }
  set thirdPartyHosted(value: ThirdPartyCapDescriptor) {
    $.Struct.setUint16(0, 5, this);
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  get attachedFd(): number {
    return $.Struct.getUint8(2, this, CapDescriptor._capnp.defaultAttachedFd);
  }
  set attachedFd(value: number) {
    $.Struct.setUint8(2, value, this, CapDescriptor._capnp.defaultAttachedFd);
  }
  toString(): string {
    return "CapDescriptor_" + super.toString();
  }
  which(): CapDescriptor_Which {
    return $.Struct.getUint16(0, this) as CapDescriptor_Which;
  }
}
export const PromisedAnswer_Op_Which = {
  NOOP: 0,
  GET_POINTER_FIELD: 1,
} as const;
export type PromisedAnswer_Op_Which =
  (typeof PromisedAnswer_Op_Which)[keyof typeof PromisedAnswer_Op_Which];
export class PromisedAnswer_Op extends $.Struct {
  static readonly NOOP = PromisedAnswer_Op_Which.NOOP;
  static readonly GET_POINTER_FIELD = PromisedAnswer_Op_Which.GET_POINTER_FIELD;
  static readonly _capnp = {
    displayName: "Op",
    id: "f316944415569081",
    size: new $.ObjectSize(8, 0),
  };
  isNoop(): boolean {
    return $.Struct.getUint16(0, this) === 0;
  }
  set noop(_: true) {
    $.Struct.setUint16(0, 0, this);
  }
  get getPointerField(): number {
    $.Struct.testWhich("getPointerField", $.Struct.getUint16(0, this), 1, this);
    return $.Struct.getUint16(2, this);
  }
  isGetPointerField(): boolean {
    return $.Struct.getUint16(0, this) === 1;
  }
  set getPointerField(value: number) {
    $.Struct.setUint16(0, 1, this);
    $.Struct.setUint16(2, value, this);
  }
  toString(): string {
    return "PromisedAnswer_Op_" + super.toString();
  }
  which(): PromisedAnswer_Op_Which {
    return $.Struct.getUint16(0, this) as PromisedAnswer_Op_Which;
  }
}
export class PromisedAnswer extends $.Struct {
  static readonly Op = PromisedAnswer_Op;
  static readonly _capnp = {
    displayName: "PromisedAnswer",
    id: "d800b1d6cd6f1ca0",
    size: new $.ObjectSize(8, 1),
  };
  static _Transform: $.ListCtor<PromisedAnswer_Op>;
  get questionId(): number {
    return $.Struct.getUint32(0, this);
  }
  set questionId(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  adoptTransform(value: $.Orphan<$.List<PromisedAnswer_Op>>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownTransform(): $.Orphan<$.List<PromisedAnswer_Op>> {
    return $.Struct.disown(this.transform);
  }
  get transform(): $.List<PromisedAnswer_Op> {
    return $.Struct.getList(0, PromisedAnswer._Transform, this);
  }
  hasTransform(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  initTransform(length: number): $.List<PromisedAnswer_Op> {
    return $.Struct.initList(0, PromisedAnswer._Transform, length, this);
  }
  set transform(value: $.List<PromisedAnswer_Op>) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  toString(): string {
    return "PromisedAnswer_" + super.toString();
  }
}
export class ThirdPartyCapDescriptor extends $.Struct {
  static readonly _capnp = {
    displayName: "ThirdPartyCapDescriptor",
    id: "d37007fde1f0027d",
    size: new $.ObjectSize(8, 1),
  };
  adoptId(value: $.Orphan<$.Pointer>): void {
    $.Struct.adopt(value, $.Struct.getPointer(0, this));
  }
  disownId(): $.Orphan<$.Pointer> {
    return $.Struct.disown(this.id);
  }
  get id(): $.Pointer {
    return $.Struct.getPointer(0, this);
  }
  hasId(): boolean {
    return !$.Struct.isNull($.Struct.getPointer(0, this));
  }
  set id(value: $.Pointer) {
    $.Struct.copyFrom(value, $.Struct.getPointer(0, this));
  }
  get vineId(): number {
    return $.Struct.getUint32(0, this);
  }
  set vineId(value: number) {
    $.Struct.setUint32(0, value, this);
  }
  toString(): string {
    return "ThirdPartyCapDescriptor_" + super.toString();
  }
}
export const Exception_Type = {
  FAILED: 0,
  OVERLOADED: 1,
  DISCONNECTED: 2,
  UNIMPLEMENTED: 3,
} as const;
export type Exception_Type =
  (typeof Exception_Type)[keyof typeof Exception_Type];
export class Exception extends $.Struct {
  static readonly Type = Exception_Type;
  static readonly _capnp = {
    displayName: "Exception",
    id: "d625b7063acf691a",
    size: new $.ObjectSize(8, 2),
  };
  get reason(): string {
    return $.Struct.getText(0, this);
  }
  set reason(value: string) {
    $.Struct.setText(0, value, this);
  }
  get type(): Exception_Type {
    return $.Struct.getUint16(4, this) as Exception_Type;
  }
  set type(value: Exception_Type) {
    $.Struct.setUint16(4, value, this);
  }
  get obsoleteIsCallersFault(): boolean {
    return $.Struct.getBit(0, this);
  }
  set obsoleteIsCallersFault(value: boolean) {
    $.Struct.setBit(0, value, this);
  }
  get obsoleteDurability(): number {
    return $.Struct.getUint16(2, this);
  }
  set obsoleteDurability(value: number) {
    $.Struct.setUint16(2, value, this);
  }
  get trace(): string {
    return $.Struct.getText(1, this);
  }
  set trace(value: string) {
    $.Struct.setText(1, value, this);
  }
  toString(): string {
    return "Exception_" + super.toString();
  }
}
Payload._CapTable = $.CompositeList(CapDescriptor);
PromisedAnswer._Transform = $.CompositeList(PromisedAnswer_Op);
