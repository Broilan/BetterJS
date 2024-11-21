export default function truncate(str: string, maxLength: number, ellipsis: string = '...'): string {
    return str.length > maxLength ? str.slice(0, maxLength) + ellipsis : str;
}
