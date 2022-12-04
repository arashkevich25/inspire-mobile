export function invertHex(hex: string): string {
    return (Number(`0x1${hex}`) ^ 0xffffff)
        .toString(16)
        .substr(1)
        .toUpperCase();
}
