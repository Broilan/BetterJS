/**
 * Counts the occurrences of a specific character in a string.
 * @param str - The string to search.
 * @param char - The character to count.
 * @returns The number of times the character appears in the string.
 * @example countChars("hello world", "o") => 2
 * @example countChars("abcdef", "x") => 0
 * @complexity O(n), where n is the length of the string.
 */
export default function countChars(str: string, char: string): number {
    return [...str].filter((c) => c === char).length;
}
