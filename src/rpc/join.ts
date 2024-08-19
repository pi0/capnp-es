// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Struct } from "../serialization/pointers/struct";
import { Answer } from "./answer";

export interface FulfillerLike<R extends Struct> {
  fulfill(r: R): void;
  reject(err: Error): void;
}

export function joinAnswer<R extends Struct>(
  fl: FulfillerLike<R>,
  answer: Answer<R>,
): void {
  answer
    .struct()
    .then((obj) => {
      fl.fulfill(obj);
    })
    .catch((error_) => {
      fl.reject(error_);
    });
}
