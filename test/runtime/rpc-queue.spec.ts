// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { test, assert as t } from "vitest";
import { Queue } from "src/rpc/queue";

class Ints {
  data: number[];
  constructor(length: number) {
    this.data = Array.from({ length }).fill(0) as number[];
  }

  len(): number {
    return this.data.length;
  }

  clear(i: number) {
    this.data[i] = 0;
  }
}

test("Queue new", () => {
  const qi = new Ints(5);
  const q = new Queue(qi, 0);

  t.equal(q.len(), 0);
});

test("Queue prepush", () => {
  const qi = new Ints(5);
  qi.data[0] = 42;

  const q = new Queue(qi, 1);
  t.equal(q.len(), 1);
  t.equal(q.front(), 0);
});

test("Queue push", () => {
  const qi = new Ints(5);
  const q = new Queue(qi, 0);

  const i = q.push();
  t.notEqual(i, -1);
  qi.data[i] = 42;

  t.equal(q.len(), 1);
  t.equal(q.front(), i);
});

test("Queue push full", () => {
  const qi = new Ints(5);
  const q = new Queue(qi, 0);
  const ok = Array.from({ length: 6 }).fill(false) as boolean[];

  const push = (n: number, val: number) => {
    const i = q.push();
    if (i === -1) {
      return;
    }
    ok[n] = true;
    qi.data[i] = val;
  };
  push(0, 10);
  push(1, 11);
  push(2, 12);
  push(3, 13);
  push(4, 14);
  push(5, 15);

  for (let i = 0; i < 5; i++) {
    t.ok(ok[i]);
  }
  t.notOk(ok[5]);
  t.equal(q.len(), 5);
});

test("Queue pop", () => {
  const qi = new Ints(5);
  const q = new Queue(qi, 0);
  qi.data[q.push()] = 1;
  qi.data[q.push()] = 2;
  qi.data[q.push()] = 3;

  const outs: number[] = Array.from({ length: 3 }).fill(0) as number[];
  for (let n = 0; n < outs.length; n++) {
    const i = q.front();
    t.notEqual(i, -1);
    outs[n] = qi.data[i];
    t.ok(q.pop());
  }

  t.equal(q.len(), 0);
  t.equal(outs[0], 1);
  t.equal(outs[1], 2);
  t.equal(outs[2], 3);
  for (let i = 0; i < qi.len(); i++) {
    t.equal(qi.data[i], 0);
  }
});

test("Queue wrap", () => {
  const qi = new Ints(5);
  const q = new Queue(qi, 0);

  qi.data[q.push()] = 10;
  qi.data[q.push()] = 11;
  qi.data[q.push()] = 12;
  q.pop();
  q.pop();
  qi.data[q.push()] = 13;
  qi.data[q.push()] = 14;
  qi.data[q.push()] = 15;
  qi.data[q.push()] = 16;

  t.equal(q.len(), 5);
  for (let i = 12; q.len() > 0; i++) {
    t.equal(qi.data[q.front()], i);
    t.ok(q.pop());
  }
});
