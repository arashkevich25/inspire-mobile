export function getAvatarWords(name: string) {
    const splitedName = name.split(' ');
    return splitedName.length >= 2 && splitedName[1][0]
        ? `${splitedName[0][0].toUpperCase()}${splitedName[1][0].toUpperCase()}`
        : name[0].toUpperCase();
}
