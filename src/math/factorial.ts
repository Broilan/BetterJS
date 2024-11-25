/**
 * Calculates the factorial of a number.
 * @param n - The number to calculate the factorial of.
 * @returns The factorial of the number.
 * @example factorial(5) => 120
 * @complexity O(n)
 */
export default function factorial(n: number): number {
    if (n < 0) throw new Error("Factorial is not defined for negative numbers.");
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}