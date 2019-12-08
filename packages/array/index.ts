export function chunk<T>(input: T[], size: number) {
  return input.reduce<T[][]>((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
}

export function compact<T>(input: T[]) {
  return input.filter(Boolean);
}

export function concat<T>(input: T[], ...rest: (T | T[])[]) {
  return input.concat(...rest);
}

export function difference<T, K extends T>(one: K[], another: T[]) {
  return one.filter(e => !another.includes(e));
}

export function drop<T>(input: T[], dropCount?: number) {
  return input.slice(dropCount || 1);
}

export function dropRight<T>(input: T[], dropCount?: number) {
  return input.slice(0, -1 * (dropCount || 1));
}

export function fill<T>(input: T[], value: T, start?: number, end?: number) {
  return input.fill(value, start, end);
}

export function find<T>(input: T[], f: (arg: T) => boolean) {
  return input.find(e => f(e));
}

export function findIndex<T>(input: T[], f: (arg: T) => boolean) {
  return input.findIndex(e => f(e));
}

// lodash.first no longer take 2nd arg
export function first<T>(input: T[]) {
  return input[0];
}

export function flatten<T>(input: T[]) {
  return input.reduce<T[]>((acc, nxt) => acc.concat(nxt), []);
}

export function flattenDeep<T>(input: T | T[]): T[] {
  return Array.isArray(input)
    ? input.reduce<T[]>((acc, nxt) => acc.concat(flattenDeep(nxt)), [])
    : [input];
}

export function fromPairs<K extends string, V>(input: [K, V][]) {
  return input.reduce<{ [key: string]: V }>((acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  }, {});
}

export function head<T>(input: T[]) {
  const [head, ..._] = input;
  return head;
}

export function tail<T>(input: T[]) {
  const [_, ...tail] = input;
  return tail;
}

export function indexOf<T>(input: T[], targetElement: T) {
  return input.indexOf(targetElement);
}

export function intersection<T>(...inputs: T[][]) {
  const [head, ...tails] = inputs;
  return tails.reduce<T[]>(
    (acc, nxt) => acc.filter(e => nxt.includes(e)),
    head
  );
}

export function takeRight<T>(input: T[], takeRightCount?: number) {
  if (takeRightCount === 0) {
    return input.slice(0, 0);
  }
  return input.slice(-1 * (takeRightCount || 1));
}

export function isArray<T>(input: T[]): boolean {
  return Array.isArray(input);
}

export function isArrayBuffer<T>(input: T[]) {
  return input instanceof ArrayBuffer;
}

export function join<T>(input: T[], delimiter?: string) {
  return input.join(delimiter || "");
}

export function last<T>(input: T[], takeCount?: number) {
  if (takeCount === 0 || takeCount === undefined) {
    return [...input].pop();
  }

  return input.slice(-1 * takeCount);
}

export function lastIndexOf<T>(input: T[], targetElement: T) {
  return input.lastIndexOf(targetElement);
}

export function reverse<T>(input: T[]) {
  return input.reverse();
}

export function slice<T>(input: T[], start: number, end?: number) {
  return input.slice(start, end || 0);
}

export function without<T>(input: T[], rejectElement: T) {
  return input.filter(e => !(e === rejectElement));
}
