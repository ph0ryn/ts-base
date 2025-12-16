// oxlint test - various lint errors

// import-x/order violations - wrong order and missing newlines
import type { Server } from "bun";
import { readFileSync } from "fs";
import path from "path";
import { createHash } from "crypto";
import type { BunFile } from "bun";

let hi = "hi";
console.log(hi);

// eslint: no-var
var foo = "hello";
var bar = "world";

// eslint: no-unused-vars
const unusedVariable = 42;
function unusedFunction() {
  return "never called";
}

// eslint: no-debugger
debugger;

// eslint: no-console (sometimes)
console.log("debug message");

// eslint: eqeqeq - use === instead of ==
const value = "5";
if (value == 5) {
  console.log("loose equality");
}
if (value != 5) {
  console.log("loose inequality");
}

// eslint: no-empty
try {
  throw new Error("oops");
} catch (e) {
  // empty catch block
}

// eslint: no-constant-condition
if (true) {
  console.log("always runs");
}
while (false) {
  console.log("never runs");
}

// eslint: no-duplicate-case
const x = 1;
switch (x) {
  case 1:
    break;
  case 1:
    break;
  case 2:
    break;
}

// eslint: no-fallthrough
switch (x) {
  case 1:
    console.log("one");
  case 2:
    console.log("two");
    break;
}

// eslint: no-redeclare
var foo = "redeclared";

// eslint: no-self-assign
let selfAssign = 10;
selfAssign = selfAssign;

// eslint: no-self-compare
if (selfAssign === selfAssign) {
  console.log("always true");
}

// eslint: no-unreachable
function unreachableCode() {
  return "early return";
  console.log("this will never run");
}

// eslint: no-sparse-arrays
const sparseArray = [1, , 3, , 5];

// eslint: no-dupe-keys
const dupeKeysObj = {
  key: 1,
  key: 2,
  another: 3,
};

// eslint: no-extra-boolean-cast
const bool = !!true;
if (!!bool) {
  console.log("redundant");
}
if (Boolean(Boolean(bool))) {
  console.log("very redundant");
}

// eslint: no-async-promise-executor
new Promise(async (resolve) => {
  resolve(await fetch("https://example.com"));
});

// eslint: no-shadow-restricted-names
const undefined = "not undefined";
const NaN = "not NaN";
console.log(undefined);

// eslint: prefer-const
let neverReassigned = "should be const";
console.log(neverReassigned);

// eslint: no-cond-assign
let condValue: number;
if ((condValue = 5)) {
  console.log(condValue);
}

// eslint: no-void (sometimes)
void 0;

// eslint: no-new-wrappers
const wrappedString = new String("bad");
const wrappedNumber = new Number(42);

// eslint: radix
const parsed = parseInt("08");

// eslint: no-array-constructor
const arr = new Array();
const arr2 = new Array(1, 2, 3);

// with文はパースエラーになるので省略

// eslint: getter-return
const objWithGetter = {
  get value() {
    // missing return
  },
};

// typescript-eslint: no-explicit-any
function acceptsAnything(data: any): any {
  return data;
}

// typescript-eslint: no-inferrable-types
const inferrable: string = "obviously a string";
const inferrable2: number = 42;

// mismatched types
const numAsString: string = 123 as any;

// eslint: no-useless-escape
const regex = /\@\#\$/;
const str = 'hello "world" \!';

// use all the things to avoid "unused" elsewhere
export {
  foo,
  bar,
  unusedVariable,
  unusedFunction,
  value,
  x,
  selfAssign,
  unreachableCode,
  sparseArray,
  dupeKeysObj,
  bool,
  neverReassigned,
  condValue,
  wrappedString,
  wrappedNumber,
  parsed,
  arr,
  arr2,
  objWithGetter,
  acceptsAnything,
  inferrable,
  inferrable2,
  numAsString,
  regex,
  str,
};
