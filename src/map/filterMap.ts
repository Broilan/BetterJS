/**
 * Filters Map entries based on a predicate.
 * @param map - The Map to filter.
 * @param predicate - The predicate function.
 * @returns A new Map with filtered entries.
 * @example filterMap(new Map([['a', 1], ['b', 2]]), ([key, value]) => value > 1)
 * => Map { 'b' => 2 }
 * @complexity O(n)
 */
export default function filterMap<K, V>(
    map: Map<K, V>,
    predicate: ([key, value]: [K, V]) => boolean
): Map<K, V> {
    const result = new Map<K, V>();
    for (const entry of map) {
        if (predicate(entry)) {
            result.set(entry[0], entry[1]);
        }
    }
    return result;
}