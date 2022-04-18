function isSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const arr1Obj = {};
    const arr2Obj = {};
    for (let i of arr1) {
        arr1Obj[i] = (arr1Obj[i] || 0) + 1;
    }
    for (let j of arr2) {
        arr2Obj[j] = (arr2Obj[j] || 0) + 1;
    }
    for (let i of arr1) {
        if (!(i ** 2 in arr2Obj)) {
            return false;
        }
        if (arr2Obj[i ** 2] !== arr1Obj[i]) {
            return false;
        }
    }
    return true;
}

console.log(isSame([1, 2, 1], [1, 4, 1]));