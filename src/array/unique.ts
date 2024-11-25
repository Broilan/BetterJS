/**
 * Returns an array with only unique values.
 * @param arr - The array to deduplicate.
 * @returns An array with unique values.
 * @example unique([1, 2, 2, 3, 4, 4]) => [1, 2, 3, 4]
 * @complexity O(n)
 */
export default function unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
}