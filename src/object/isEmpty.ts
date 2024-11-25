/**
 * Checks if an object has no properties.
 * @param obj - The object to check.
 * @returns True if the object is empty, false otherwise.
 * @example isEmpty({}) => true
 * @example isEmpty({ a: 1 }) => false
 * @complexity O(1)
 */
export default function isEmpty(obj: Record<string, any>): boolean {
    return Object.keys(obj).length === 0;
}