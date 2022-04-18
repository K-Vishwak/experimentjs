function steps(n, i = 0, str = '') {
    if (n === i) return;
    if (n === str.length) {
        console.log(str);
        return steps(n, i + 1);
    }
    if (str.length <= i) {
        str += '#';
    } else {
        str += ' ';
    }
    steps(n, i, str);
}

steps(10);