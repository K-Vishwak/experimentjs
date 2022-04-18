function palindrome(str) {
    return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

console.log(palindrome('test'));
console.log(palindrome('tet'));