// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { PipelineOp } from "./pipeline-op";
import { PromisedAnswer, PromisedAnswer_Op } from "../std/rpc";
import { List } from "../serialization/pointers/list";

export function transformToPromisedAnswer(
  answer: PromisedAnswer,
  transform: PipelineOp[],
): void {
  const opList = answer.initTransform(transform.length);
  for (const [i, op] of transform.entries()) {
    opList.get(i).getPointerField = op.field;
  }
}

export function promisedAnswerOpsToTransform(
  list: List<PromisedAnswer_Op>,
): PipelineOp[] {
  const transform: PipelineOp[] = [];
  list.forEach((op) => {
    switch (op.which()) {
      case PromisedAnswer_Op.GET_POINTER_FIELD: {
        transform.push(<PipelineOp>{
          field: op.getPointerField,
        });
        break;
      }
      case PromisedAnswer_Op.NOOP: {
        // no-op
        break;
      }
      default:
      // nothing
    }
  });
  return transform;
}
