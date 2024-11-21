export default function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, word => word[0].toUpperCase() + word.slice(1).toLowerCase());
}
