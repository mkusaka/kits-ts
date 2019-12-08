// to avoid reserved words, add "_" prefix to all import
import * as _array from 'array';
// export * from "collection";
// export * from "util";
// export * from "function";
// export * from "number";
// export * from "lang";
// export * from "object";
// export * from "string";

export {
  _array,
}

const defaults = {
  ..._array
}

export default defaults;
