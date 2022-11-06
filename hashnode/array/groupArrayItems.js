function group(arr) {
    return arr.reduce((p, c) => {
        if (p[c.age] && (p[c.age].length > 0)) {
            p[c.age].push(c.name)
        } else {
            p[c.age] = [c.name];
        }
        return p;
    }, {});
}

console.log(JSON.stringify(group([
    { name: 'alice', age: 20 },
    { name: 'tom', age: 20 },
    { name: 'john', age: 21 },
])));