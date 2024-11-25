/**
 * Splits an array into two based on a predicate.
 * @param arr - The array to partition.
 * @param predicate - A function to test each element.
 * @returns Two arrays: one with elements passing the predicate, and one with the rest.
 * @example partition([1, 2, 3, 4], n => n % 2 === 0) => [[2, 4], [1, 3]]
 * @complexity O(n)
 */
export function partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]] {
    const pass: T[] = [];
    const fail: T[] = [];
    for (const item of arr) {
        (predicate(item) ? pass : fail).push(item);
    }
    return [pass, fail];
}