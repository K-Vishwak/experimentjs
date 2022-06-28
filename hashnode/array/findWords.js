function findWords(words) {
    let firstRow = 'qwertyuiop';
    let secondRow = 'asdfghjkl';
    let thirdRow = 'zxcvbnm';
    let fobj = {};
    let sobj = {};
    let tobj = {};
    let result = [];
    for (let i of firstRow) {
        fobj[i] = 1;
    }
    for (let i of secondRow) {
        sobj[i] = 1;
    }
    for (let i of thirdRow) {
        tobj[i] = 1;
    }

    for (let i = 0; i < words.length; i++) {
        let obj = [fobj, sobj, tobj].find(robj => robj[words[i][0].toLowerCase()] === 1);
        let count = 0;
        for (let j of words[i]) {
            if (obj[j.toLowerCase()]) {
                count++;
            } else {
                break;
            }
        }
        if (count === words[i].length) {
            result.push(words[i]);
        }
    }
    return result;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));