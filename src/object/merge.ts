export default function merge<T extends object, U extends object>(
    target: T,
    source: U
): T & U {
    return { ...target, ...source };
}
