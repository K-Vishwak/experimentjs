function sameFrequency(num1, num2) {
    let strNum1 = String(num1);
    let strNum2 = String(num2);
    if (strNum1.length !== strNum2.length) return false;
    let num1Obj = {};
    for (let n of strNum1) num1Obj[n] = (num1Obj[n] || 0) + 1;
    for (let n2 of strNum2) {
        if (!num1Obj[n2]) return false;
        if (num1Obj[n2]) num1Obj[n2] -= 1;
    }
    return true;
}

console.log(sameFrequency(34, 14));