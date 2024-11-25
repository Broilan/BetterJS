/**
 * Omits specific keys from an object.
 * @param obj - The object to omit from.
 * @param keys - The keys to omit.
 * @returns A new object without the omitted keys.
 * @example omit({ a: 1, b: 2, c: 3 }, ['a', 'c']) => { b: 2 }
 * @complexity O(n), where n is the size of the object
 */
export default function omit<T extends Record<string, any>, K extends keyof T>(
    obj: T,
    keys: K[]
): Omit<T, K> {
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
}