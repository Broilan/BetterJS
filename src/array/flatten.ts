export default function flatten<T>(array: any[], depth: number = Infinity): T[] {
    return depth > 0
        ? array.reduce(
              (acc, val) =>
                  Array.isArray(val)
                      ? acc.concat(flatten<T>(val, depth - 1))
                      : acc.concat(val),
              [] as T[]
          )
        : array.slice();
}
