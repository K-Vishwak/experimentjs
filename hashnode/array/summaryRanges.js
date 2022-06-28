function summaryRanges(nums) {
    let result = [];
    let lastTrunc = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            continue;
        }
        else {
            if (lastTrunc !== i) {
                result.push(`${nums[lastTrunc]}->${nums[i]}`);
            } else {
                result.push(`${nums[lastTrunc]}`);
            }
            lastTrunc = i + 1;
        }
    }
    return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));