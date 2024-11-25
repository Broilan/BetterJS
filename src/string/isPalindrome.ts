/**
 * Checks if a given string is a palindrome (ignores case, spaces, and non-alphanumeric characters).
 * @param str - The string to check.
 * @returns True if the string is a palindrome, false otherwise.
 * @example isPalindrome("A man, a plan, a canal, Panama") => true
 * @example isPalindrome("hello") => false
 * @complexity O(n), where n is the length of the string.
 */
export default function isPalindrome(str: string): boolean {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normalized === normalized.split('').reverse().join('');
}
