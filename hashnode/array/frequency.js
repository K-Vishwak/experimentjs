function findFrequency(arr) {
    return arr.reduce((p, c) => {
        p[c] = (p[c] || 0) + 1;
        return p;
    }, {})
}

console.log(findFrequency(['h', 'h', 'l', 'a']));