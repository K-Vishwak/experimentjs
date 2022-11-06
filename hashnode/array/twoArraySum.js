function twoArraySum(arr, target) {
    const obj = {};
    const result = [];
    arr.forEach(item => {
        let diff = target-item;
        if(obj[diff.toString()] !== undefined) {
            result.push([item, diff]);
        }
        obj[item.toString()] = item;
    });
    return result;
}

console.log(JSON.stringify(twoArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)));