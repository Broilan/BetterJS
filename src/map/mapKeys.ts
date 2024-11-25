/**
 * Transforms the keys of a Map using a callback.
 * @param map - The Map to transform.
 * @param transform - The transformation function.
 * @returns A new Map with transformed keys.
 * @example mapKeys(new Map([['a', 1], ['b', 2]]), k => k.toUpperCase())
 * => Map { 'A' => 1, 'B' => 2 }
 * @complexity O(n)
 */
export function mapKeys<K, V, U>(map: Map<K, V>, transform: (key: K) => U): Map<U, V> {
    const result = new Map<U, V>();
    for (const [key, value] of map) {
        result.set(transform(key), value);
    }
    return result;
}