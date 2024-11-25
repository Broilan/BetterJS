/**
 * Splits an array of pairs into two arrays.
 * @param pairs - The array of pairs.
 * @returns Two arrays, one with first elements and one with second elements.
 * @example unzip([[1, 'a'], [2, 'b']]) => [[1, 2], ['a', 'b']]
 * @complexity O(n)
 */
export default function unzip<T, U>(pairs: [T, U][]): [T[], U[]] {
    const first: T[] = [];
    const second: U[] = [];
    for (const [a, b] of pairs) {
        first.push(a);
        second.push(b);
    }
    return [first, second];
}