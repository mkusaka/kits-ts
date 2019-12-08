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

export const concat = Array.prototype.concat.bind([]);
