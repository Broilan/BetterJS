/**
 * Finds the common elements between two arrays.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array of common elements.
 * @example intersection([1, 2, 3], [2, 3, 4]) => [2, 3]
 * @complexity O(n + m)
 */
export default function intersection<T>(arr1: T[], arr2: T[]): T[] {
    const set2 = new Set(arr2);
    return arr1.filter((item) => set2.has(item));
}
