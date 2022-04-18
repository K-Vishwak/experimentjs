function pyramid(n) {
    let mid = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < 2 * n - 1; column++) {
            if (mid - row <= column && mid + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

pyramid(5);