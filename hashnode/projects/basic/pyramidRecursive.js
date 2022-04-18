function pyramid(n, row = 0, level = '') {
    if (row === n) return;
    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1)
    }
    const mid = Math.floor((2 * n - 1) / 2);
    let add;
    if (mid - row <= level.length && mid + row >= level.length) add = '#';
    else add = ' ';
    pyramid(n, row, level + add);
}

pyramid(5);