// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { PipelineOp } from "../pipeline-op";
import { Fulfiller } from "./fulfiller";
import { Call } from "../call";

// ecall is a queued embargoed call
export interface ecall {
  call: Call<any, any>;

  f: Fulfiller<any>;
}

// pcall is a queued pipeline call
export interface pcall extends ecall {
  transform: PipelineOp[];
}

export type ecallSlot = ecall | null;

export class Ecalls {
  data: ecallSlot[];

  constructor(data: ecallSlot[]) {
    this.data = data;
  }

  static copyOf(data: ecallSlot[]): Ecalls {
    return new Ecalls([...data]);
  }

  len(): number {
    return this.data.length;
  }

  clear(i: number): void {
    this.data[i] = null;
  }

  copy(): Ecalls {
    return Ecalls.copyOf(this.data);
  }
}
