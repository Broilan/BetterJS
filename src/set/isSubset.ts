export default function isSubset<T>(set1: Set<T>, set2: Set<T>): boolean {
    return [...set1].every(item => set2.has(item));
}
