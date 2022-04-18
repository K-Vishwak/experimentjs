function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    // compare each value from both the arrays and push the lowest to result.
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    // if any remaining elements in arr1. Push all of them without any comparison. 
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    // if any left over elements push directly from arr2.
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    // get middle of the array.
    let mid = Math.floor(arr.length/2);
    // divide array in two halves. Keep doing until arr.length === 1.
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    // for each recursion do the merge. Hence for the final call will get sorted result.
    return merge(left, right);
}

console.log(mergeSort([3, 4, 5, 7, 2, 1]));