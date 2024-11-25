/**
 * Restricts a number to a given range.
 * @param num - The number to clamp.
 * @param min - The minimum bound.
 * @param max - The maximum bound.
 * @returns The clamped number.
 * @example clamp(10, 0, 5) => 5
 * @complexity O(1)
 */
export function clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}
