/**
 * Reverses the characters in a string.
 * @param str - The string to reverse.
 * @returns The reversed string.
 * @example reverse("hello") => "olleh"
 * @example reverse("") => ""
 * @complexity O(n), where n is the length of the string.
 */
export default function reverse(str: string): string {
    return str.split('').reverse().join('');
}
