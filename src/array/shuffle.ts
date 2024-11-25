/**
 * Randomly shuffles the elements of an array.
 * @param arr - The array to shuffle.
 * @returns A new array with elements shuffled.
 * @example shuffle([1, 2, 3]) => [3, 1, 2]
 * @complexity O(n)
 */
export function shuffle<T>(arr: T[]): T[] {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}