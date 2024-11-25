/**
 * Transforms the values of a Map using a callback.
 * @param map - The Map to transform.
 * @param transform - The transformation function.
 * @returns A new Map with transformed values.
 * @example mapValues(new Map([['a', 1], ['b', 2]]), v => v * 2)
 * => Map { 'a' => 2, 'b' => 4 }
 * @complexity O(n)
 */
export default function mapValues<K, V, U>(map: Map<K, V>, transform: (value: V) => U): Map<K, U> {
    const result = new Map<K, U>();
    for (const [key, value] of map) {
        result.set(key, transform(value));
    }
    return result;
}
