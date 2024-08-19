// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

export type Finalize = (obj: unknown, finalizer: Finalizer) => void;
export type Finalizer = () => void;
