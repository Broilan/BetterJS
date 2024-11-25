/**
 * Truncates a string to a specified maximum length and appends an ellipsis if necessary.
 * @param str - The string to truncate.
 * @param maxLength - The maximum length of the truncated string (including the ellipsis).
 * @param ellipsis - The ellipsis to append if truncation occurs (default: '...').
 * @returns The truncated string with ellipsis appended if necessary.
 * @example truncate("hello world", 5) => "hello..."
 * @example truncate("hello", 10) => "hello"
 * @complexity O(n), where n is the length of the string.
 */
export default function truncate(str: string, maxLength: number, ellipsis: string = '...'): string {
    return str.length > maxLength ? str.slice(0, maxLength) + ellipsis : str;
}
