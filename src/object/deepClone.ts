/**
 * Creates a deep copy of an object.
 * @param obj - The object to deep clone.
 * @returns A new deep-cloned object.
 * @example deepClone({ a: 1, b: { c: 2 } }) => { a: 1, b: { c: 2 } }
 * @complexity O(n), where n is the size of the object
 */
export default function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}
