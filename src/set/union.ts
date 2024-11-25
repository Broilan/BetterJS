/**
 * Combines two sets into one (union).
 * @param setA - The first set.
 * @param setB - The second set.
 * @returns A new set with all elements from both sets.
 * @example union(new Set([1, 2]), new Set([2, 3])) => Set { 1, 2, 3 }
 * @complexity O(n + m)
 */
export default function union<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    return new Set([...setA, ...setB]);
}
