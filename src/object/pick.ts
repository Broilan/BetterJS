/**
 * Picks specific keys from an object.
 * @param obj - The object to pick from.
 * @param keys - The keys to pick.
 * @returns A new object with the picked keys.
 * @example pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) => { a: 1, c: 3 }
 * @complexity O(k), where k is the number of keys to pick
 */
export default function pick<T extends Record<string, any>, K extends keyof T>(
    obj: T,
    keys: K[]
): Pick<T, K> {
    const result: Partial<T> = {};
    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result as Pick<T, K>;
}