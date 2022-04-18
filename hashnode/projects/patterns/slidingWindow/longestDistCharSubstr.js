function longestDistChar(str) {
    let seen = {};
    let start = 0;
    let longest = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }

        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }

}