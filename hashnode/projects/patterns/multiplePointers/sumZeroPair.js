// function sumZero(arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         const result = arr[i] + arr[j];
//         if (result === 0) return [arr[i], arr[j]];
//         result < 1 ? i++ : j--;
//     }
// }


function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([3,-3,-4]));