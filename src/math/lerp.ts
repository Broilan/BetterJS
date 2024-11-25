/**
 * Performs linear interpolation between two numbers.
 * @param start - The start value.
 * @param end - The end value.
 * @param t - The interpolation factor (0 to 1).
 * @returns The interpolated value.
 * @example lerp(0, 100, 0.5) => 50
 * @complexity O(1)
 */
export default function lerp(start: number, end: number, t: number): number {
    return start + t * (end - start);
}
