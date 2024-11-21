export default function invert<K, V>(map: Map<K, V>): Map<V, K> {
    const inverted = new Map<V, K>();
    for (const [key, value] of map) {
        inverted.set(value, key);
    }
    return inverted;
}
