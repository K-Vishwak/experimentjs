// function binarySearch(arr, num) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         console.log(start, end);
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === num) return mid;
//         if (arr[mid] > num) end = mid;
//         if (arr[mid] < num) start = mid;
//     }
//     return -1;
// }

// console.log(binarySearch([1, 2, 3,4], 1));


const iterativeApproach = (array,searchItem)=>{
    // Initializing start and end.
    let start = 0;
    let end = array.length - 1;

    // Checking each iteration with start < = end.
    while (start <= end) {

        // dividing into middle.
        let mid = Math.ceil((start + end) / 2);

        // if item found at middle.
        if (array[mid] === searchItem)
            return mid;

        else if (array[mid] < searchItem)
            // if item greater than mid. Search start from mid.
            start = mid + 1;
        else
            // else item is less than mid. Search between start & mid.
            end = mid - 1;
    }

    // if item not present return -1;
    return -1;
}

const givenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(iterativeApproach(givenArr, 1));