/**
 * Finds the least common multiple (LCM) of two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The LCM of the two numbers.
 * @example lcm(4, 6) => 12
 * @complexity O(log(min(a, b)))
 */
export function lcm(a: number, b: number): number {
    const absA = Math.abs(a);
    const absB = Math.abs(b);

    // Inline GCD computation (Euclidean algorithm)
    let x = absA, y = absB;
    while (y !== 0) {
        [x, y] = [y, x % y];
    }
    const gcd = x;

    // Calculate and return LCM
    return (absA * absB) / gcd;
}
