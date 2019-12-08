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
