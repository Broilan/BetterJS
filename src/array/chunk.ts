/**
 * Splits an array into smaller arrays of a given size.
 * @param arr - The array to chunk.
 * @param size - The size of each chunk.
 * @returns An array of chunks.
 * @example chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * @complexity O(n)
 */
export function chunk<T>(arr: T[], size: number): T[][] {
    if (size <= 0) throw new Error("Size must be greater than 0");
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

