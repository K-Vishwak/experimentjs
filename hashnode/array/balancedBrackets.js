
function balancedBrackets(str) {
    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);
    for (let i of str) {
        if (map.has(i)) {
            stack.push(map.get(i));
        } else if (i !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(balancedBrackets('({}[]({}))'));
console.log(balancedBrackets('({(}))'));



