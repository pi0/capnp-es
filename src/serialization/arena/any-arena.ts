// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { MultiSegmentArena } from "./multi-segment-arena";
import { SingleSegmentArena } from "./single-segment-arena";

export type AnyArena = MultiSegmentArena | SingleSegmentArena;
