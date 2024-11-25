/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The GCD of the two numbers.
 * @example gcd(12, 8) => 4
 * @complexity O(log(min(a, b)))
 */
export default function gcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return Math.abs(a);
}
