function niceString(s) {
    if (s.length < 2) return ''; // Min length is >=2
    const obj = {};
    for (let i of s) obj[i] = i; // To verify the existence of element with O(1)

    for (let j = 0; j < s.length; j++) {
        const element = s[j];
        if (obj[element.toLowerCase()] && obj[element.toUpperCase()]) continue; // Skip making substrings when upper and lower of same letter present.
        const prev = niceString(s.substring(0, j)); // slice into two pieces without including actual letter.
        const next = niceString(s.substring(j + 1));

        return prev.length >= next.length ? prev : next; // to return longest one.
    }
    return s;
}

console.log(niceString('aAaZbBbB'));