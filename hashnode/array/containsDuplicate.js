function containsDuplicate(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    return Object.values(obj).some(item => item > 1);
};

// 1:
// function containsDuplicate(nums: number[]): boolean {
//     let obj = {};
//    for (let i = 0; i < nums.length; i++) {
//        if (obj[nums[i]]) return true;
//        else obj[nums[i]] = 1;
//    }
//    return false;
// };

console.log(containsDuplicate([1, 2, 3, 4]));