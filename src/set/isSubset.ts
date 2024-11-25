/**
 * Checks if one set is a subset of another.
 * @param subset - The potential subset.
 * @param superset - The potential superset.
 * @returns True if subset is fully contained in superset.
 * @example isSubset(new Set([1]), new Set([1, 2])) => true
 * @complexity O(n)
 */
export default function isSubset<T>(subset: Set<T>, superset: Set<T>): boolean {
    for (const item of subset) {
        if (!superset.has(item)) return false;
    }
    return true;
}
