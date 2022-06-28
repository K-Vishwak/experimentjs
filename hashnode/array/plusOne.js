function plusOne(digits) {
    // return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(item => Number(item));
    let n = digits.length;
    for(let i=n-1; i>=0; i--) {
        if(digits[i] < 9) {
            digits[i]++; return digits;
        }
        digits[i] = 0;
    }
    let newArr = Array.from({length: n+1}, () => 0);
    newArr[0] = 1;
    return newArr;
};

console.log(plusOne([9,9]));