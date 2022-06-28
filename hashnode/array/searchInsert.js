function searchInsert(nums, target) {
    let result;
    if (nums[0] - 1 === target) return 0;
    if (nums[nums.length - 1] + 1 === target) return nums.length;
    let i = 0;
    let j = nums.length - 1;
    result = recur(nums, i, j, target);
    if (result === null) {
        let mid = Math.floor((i + j) / 2);
        let start = nums[mid] > target ? 0 : mid;
        if (start === mid) {
            for (let k = mid; k < nums.length; k++) {
                if ((nums[k] + 1) === target) return k + 1;
            }
        }
        else {
            for (let k = 0; k < mid; k++) {
                if ((nums[k] + 1) === target) return k + 1;
            }
        }
    }
    return result;
};

function recur(arr, i, j, target) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] === target) return mid;
    if (i === j) return null;
    if (arr[mid] < target) return recur(arr, mid + 1, arr.length - 1, target);
    if (arr[mid] > target) return recur(arr, 0, mid, target);
}

console.log(searchInsert([1, 3, 5, 6], 2));