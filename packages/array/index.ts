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
