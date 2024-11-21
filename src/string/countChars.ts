export default function countChars(str: string, char: string): number {
    return [...str].filter(c => c === char).length;
}
