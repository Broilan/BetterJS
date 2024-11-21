export default function filterMap<K, V>(
    map: Map<K, V>,
    predicate: (key: K, value: V) => boolean
): Map<K, V> {
    const result = new Map<K, V>();
    for (const [key, value] of map) {
        if (predicate(key, value)) result.set(key, value);
    }
    return result;
}
