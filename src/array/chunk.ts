export default function chunk<T>(array: T[], size: number): T[][] {
    if (!Array.isArray(array) || size <= 0) return [];
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
