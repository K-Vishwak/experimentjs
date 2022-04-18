function stringAnagrams(str1, str2) {
    let seen = {};
    let str = '';
    let count = 0;
    let result = [];
    if(str2.length > str1.length) return [];
    for (let s of str2) seen[s] = 1;
    for(let i = 0; i<str1.length;i++) {
        if(str1[i] in seen) {
            seen[str1[i]] = 0;
            str +=str1[i];
            count++;
            if(count === str2.length) {
                result.push(str);
            }
        }
        else {
            str = '';
            count = 0;
            result = [];
        }
    }
    return result;
}

console.log(stringAnagrams('catbtac', 'act'));