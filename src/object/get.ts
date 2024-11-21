export default function get<T>(
    obj: Record<string, any>,
    path: string,
    defaultValue?: T
): T | undefined {
    const keys = path.split('.');
    let result: any = obj;
    for (const key of keys) {
        result = result?.[key];
        if (result === undefined) return defaultValue;
    }
    return result;
}
