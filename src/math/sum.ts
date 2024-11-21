export default function sum(...nums: number[]): number {
    return nums.reduce((total, num) => total + num, 0);
}
