/**
 * Groups elements of an array by a key.
 * @param arr - The array to group.
 * @param keyFn - A function to determine the group key.
 * @returns An object with grouped elements.
 * @example groupBy(['apple', 'banana', 'cherry'], fruit => fruit[0])
 * => { a: ['apple'], b: ['banana'], c: ['cherry'] }
 * @complexity O(n)
 */
export default function groupBy<T, K extends keyof any>(arr: T[], keyFn: (item: T) => K): Record<K, T[]> {
    return arr.reduce((acc, item) => {
        const key = keyFn(item);
        // Ensure the key is initialized in the accumulator
        if (!acc[key]) {
            acc[key] = []; // Explicitly initialize as an array
        }
        acc[key].push(item);
        return acc;
    }, {} as Record<K, T[]>); // Cast initial value to the Record type
}
