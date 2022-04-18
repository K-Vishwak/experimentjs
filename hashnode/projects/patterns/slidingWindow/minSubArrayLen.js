function minSubArrayLen(arr, num) {
    return recMinSubArray(arr, 1, num) || 0;
}

function recMinSubArray(arr, count, num) {
    let tempSum = 0;
    if (count === arr.length) {
        return false;
    }
    for (let i = 0; i < count; i++) {
        tempSum += arr[i];
    }

    if (tempSum >= num) return count;

    for (let j = count; j < arr.length; j++) {
        tempSum = tempSum - arr[j - count] + arr[j];
        if (tempSum >= num) return count;
    }

    return recMinSubArray(arr, count + 1, num);
}

// function minSubArrayLen(arr, num) {
//     let start = 0;
//     let total = 0;
//     let minLen = Infinity;
//     let end = 0;

//     while(start < arr.length) {

//         if (total < num && end < arr.length) {
//             total +=arr[end];
//             end++;
//         }

//         else if(total >= num) {
//             minLen = Math.min(minLen, end-start);
//             total -= arr[start];
//             start++;
//         } else{
//             break;
//         }
//     }
//     return minLen === Infinity ? 0 :minLen;
// }




console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));