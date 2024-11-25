/**
 * Flattens a nested array into a single-level array.
 * @param arr - The nested array to flatten.
 * @returns A single-level array.
 * @example flatten([1, [2, [3, 4]], 5]) => [1, 2, 3, 4, 5]
 * @complexity O(n)
 */
export default function flatten<T>(arr: any[]): T[] {
    return arr.reduce<T[]>((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}