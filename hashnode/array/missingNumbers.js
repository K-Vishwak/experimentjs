function missingNumber(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = 1;
    }
    for (let i = 0; i < nums.length + 1; i++) {
        if (!obj[i]) return i;
    }
    return undefined;
};
