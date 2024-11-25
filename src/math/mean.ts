/**
 * Calculates the mean of an array of numbers.
 * @param numbers - The array of numbers.
 * @returns The mean of the numbers.
 * @example mean([1, 2, 3]) => 2
 * @complexity O(n)
 */
export default function mean(numbers: number[]): number {
    if (numbers.length === 0) throw new Error("Cannot calculate mean of an empty array.");
    return numbers.reduce((sum, val) => sum + val, 0) / numbers.length;
}
