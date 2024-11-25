/**
 * Returns elements in the first array that are not in the second.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns The difference between the arrays.
 * @example difference([1, 2, 3], [2, 3, 4]) => [1]
 * @complexity O(n + m)
 */
export function difference<T>(arr1: T[], arr2: T[]): T[] {
    const set2 = new Set(arr2);
    return arr1.filter((item) => !set2.has(item));
}
