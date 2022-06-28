// function removeElement(nums, val) {
//     let i = 0;
//     let j = nums.length - 1;
//     if (!nums.length) return 0;
//     if(!nums.includes(val)) return nums.length;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) nums[i] = NaN;
//     }
//     while (i < j) {
//         if (isNaN(nums[i]) && !isNaN(nums[j])) {
//             let temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//             i++;
//             j--;
//         } else {
//             if (!isNaN(nums[i])) i++;
//             if (isNaN(nums[j])) j--;
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (isNaN(nums[i])) {
//             return i;
//         }
//     }
//     return 0;
// };

function removeElement(nums, val) {
    let count = 0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i] !== val) nums[count++] = nums[i];
    }
    return count;
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2));