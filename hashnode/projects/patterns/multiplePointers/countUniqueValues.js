function countUniqueValues(arr) {
    if (!arr.length) return 0;
    let left = 0;
    let right = left + 1;
    while (right < arr.length) {
        if (arr[left] !== arr[right]) left++, arr[left] = arr[right];
        else right++;
    }
    return left+1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));