/**
 * Swaps keys and values in a Map.
 * @param map - The Map to invert.
 * @returns A new Map with keys and values swapped.
 * @example invert(new Map([['a', 1], ['b', 2]])) => Map { 1 => 'a', 2 => 'b' }
 * @complexity O(n)
 */
export default function invert<K, V>(map: Map<K, V>): Map<V, K> {
    const result = new Map<V, K>();
    for (const [key, value] of map) {
        result.set(value, key);
    }
    return result;
}