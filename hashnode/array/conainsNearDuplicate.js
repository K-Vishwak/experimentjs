function containsNearbyDuplicate(nums, k) {
    let min = Infinity;
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            min = Math.min(min, Math.abs(i - obj[nums[i]]));
            obj[nums[i]] = i;
        } else {
            obj[nums[i]] = i;
        }
    }
    if (min <= k) return true;
    else return false;
};

console.log(containsNearbyDuplicate([1,0,1,1], 1));