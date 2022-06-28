function majorityElement(nums) {
    let obj = {};
    let max = 0;
    let result;
    if (nums.length === 1) return nums[0];
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    Object.values(obj).forEach(value => {
        max = Math.max(max, value);
    });
    Object.keys(obj).forEach(key => {
        if (obj[key] === max) result = key;
    });
    return result;
}

console.log(majorityElement([3,3,3,1,1,1,1]));
