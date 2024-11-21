export default function mapValues<K, V, U>(
    map: Map<K, V>,
    transform: (value: V, key: K) => U
): Map<K, U> {
    const result = new Map<K, U>();
    for (const [key, value] of map) {
        result.set(key, transform(value, key));
    }
    return result;
}
