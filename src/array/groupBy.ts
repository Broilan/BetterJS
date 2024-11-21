export default function groupBy<T, K extends string | number | symbol>(
    array: T[],
    keyFn: (item: T) => K
): Record<K, T[]> {
    return array.reduce((acc, item) => {
        const key = keyFn(item);
        (acc[key] = acc[key] || []).push(item);
        return acc;
    }, {} as Record<K, T[]>);
}
