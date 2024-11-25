/**
 * Combines two Maps, resolving conflicts with a callback.
 * @param map1 - The first Map.
 * @param map2 - The second Map.
 * @param resolver - Function to resolve key conflicts.
 * @returns A merged Map.
 * @example mergeMaps(
 *   new Map([['a', 1], ['b', 2]]),
 *   new Map([['b', 3], ['c', 4]]),
 *   (v1, v2) => v1 + v2
 * ) => Map { 'a' => 1, 'b' => 5, 'c' => 4 }
 * @complexity O(n + m)
 */
export function mergeMaps<K, V>(
    map1: Map<K, V>,
    map2: Map<K, V>,
    resolver: (value1: V, value2: V) => V
): Map<K, V> {
    const result = new Map(map1);
    for (const [key, value] of map2) {
        if (result.has(key)) {
            result.set(key, resolver(result.get(key)!, value));
        } else {
            result.set(key, value);
        }
    }
    return result;
}