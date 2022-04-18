function isValidAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const lookup = {};
    for(let i of str1) lookup[i] = (lookup[i] || 0) + 1;
    for(let j of str2) {
        if (!lookup[j]) {
            return false;
        } else {
            lookup[j] -= 1
        }
    }
    return true;
}

console.log(isValidAnagram('anagram','nagara'));