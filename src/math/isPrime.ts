/**
 * Checks if a number is a prime number.
 * @param n - The number to check.
 * @returns True if the number is prime, false otherwise.
 * @example isPrime(7) => true
 * @example isPrime(4) => false
 * @complexity O(sqrt(n))
 */
export default function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}
