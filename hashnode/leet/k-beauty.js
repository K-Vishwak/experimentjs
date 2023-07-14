function kbeauty(num, k) {
    const strNum = String(num);
    let count = 0;
    for(let i=0;i<strNum.length + 1-k;i++){
        const slice = Number(strNum.slice(i, i+k));
        if (num % slice === 0 && slice !== 0) {
            count++;
        }
    }
    return count;
}

console.log(kbeauty(4300043, 2));