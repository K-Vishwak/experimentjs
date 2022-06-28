function singleNumber(nums) {
    let obj = {};
    let result;
    if (nums.length === 1) return nums[0];
    for (let i=0;i<nums.length;i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    Object.entries(obj).forEach(([key, value]) => {
        if(value === 1) result = key; 
    });
    return result;
}

console.log(singleNumber([2,2,1]));