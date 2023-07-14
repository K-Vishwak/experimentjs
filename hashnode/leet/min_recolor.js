// Solution No. 1
// function min_recolor(s, k) {
//     let substr = '';
//     let min = Infinity;
//     for (let i = 0; i < s.length; i++) {
//         substr = s.slice(i, i + k);
//         if (substr.length >= k) {
//             let count = 0;
//             for (let item of substr) {
//                 if (item === 'W') {
//                     count++;
//                 }
//             }
//             min = min > count ? count : min;
//         }
//     }
//     return min;
// }

// console.log(min_recolor('WBWBBBW', 2));

// Solution No.2

function min_colors(blocks, k) {
    let wc = 0, res = 0;
    for (let i = 0; i < blocks.length; i++) {
        if (i < k && blocks[i] === 'W') { 
            wc++; 
            res++; 
        }
        else {
            if (blocks[i] === "W") wc++;
            if (blocks[i - k] === "W") wc--;
            
            if (wc < res) res = wc;
        }        
    }
       
    return res;
}

console.log(min_colors('WBBWWBBWBW', 7));