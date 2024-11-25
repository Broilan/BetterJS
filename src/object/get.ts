/**
 * Truncates a string to a specified number of words and appends an ellipsis if necessary.
 * @param str - The string to truncate.
 * @param maxWords - The maximum number of words to retain.
 * @param ellipsis - The ellipsis to append if truncation occurs (default: '...').
 * @returns The truncated string with ellipsis appended if necessary.
 * @example truncateWords("This is a test string", 3) => "This is a..."
 * @example truncateWords("Short test", 5) => "Short test"
 * @complexity O(n), where n is the number of words in the string.
 */
export default function truncateWords(str: string, maxWords: number, ellipsis: string = '...'): string {
    const words = str.split(' ');
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + ellipsis : str;
}
