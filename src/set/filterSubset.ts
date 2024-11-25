/**
 * Filters a set based on a predicate.
 * @param set - The set to filter.
 * @param predicate - The predicate function.
 * @returns A new set with elements that match the predicate.
 * @example filterSet(new Set([1, 2, 3]), x => x > 1) => Set { 2, 3 }
 * @complexity O(n)
 */
export default function filterSet<T>(set: Set<T>, predicate: (item: T) => boolean): Set<T> {
    return new Set([...set].filter(predicate));
}