function thirdMax(nums) {
    let max = findMax(nums);
    let noDupArr = removeDups(nums);
    if (noDupArr.length < 3) return max;
    let count = 0;
    while(count < 2) {
        noDupArr[noDupArr.indexOf(max)] = -Infinity;
        max = findMax(noDupArr);
        count++;
    }
    return max;
}

function findMax(nums) {
    if (nums.length === 1) return nums[0];
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
    }
    return max;
}

function removeDups(nums) {
    let obj = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    for (let i in obj) {
        result.push(Number(i));
    }
    return result;
}

console.log(thirdMax([1,1,2]));