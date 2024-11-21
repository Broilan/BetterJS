export default function difference<T>(set1: Set<T>, set2: Set<T>): Set<T> {
    return new Set([...set1].filter(item => !set2.has(item)));
}
