//Pseudo Code
// 1. select the minimum and swap with left most.
// 2. [3,4,5,1,2] - min = 3.
// 3. 3 -> 4, 5 - min = 3
// 4. 3 -> 1 - min = 1
// 5. 1 -> 2 - min = 1
// 6. swap 3 with 1. Hence, moving smallest to first position.

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = arr[i];
//         for (let j = i + 1; j < arr.length; j++) {
//             if (min > arr[j]) {
//                 min = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = min;
//             }
//         }
//     }
//     return arr;
// }


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (arr[lowest] !== arr[i]) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}


console.log(selectionSort([3, 4, 5, -1, 2]));