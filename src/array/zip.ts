/**
 * Combines two arrays into an array of pairs.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array of pairs.
 * @example zip([1, 2], ['a', 'b']) => [[1, 'a'], [2, 'b']]
 * @complexity O(min(n, m))
 */
export function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
    const length = Math.min(arr1.length, arr2.length);
    const result: [T, U][] = [];
    for (let i = 0; i < length; i++) {
        result.push([arr1[i], arr2[i]]);
    }
    return result;
}