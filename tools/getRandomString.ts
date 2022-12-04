export function getRandomString(length = 10) {
    return [...Array(length)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
}
