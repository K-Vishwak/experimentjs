function moveZeroes(nums) {
    let zero = null;
    for (let i = 0; i < nums.length; i++) {
        zero = isZero(nums[i]) ? i : null;
        for (let j = i + 1; j < nums.length; j++) {
            if (zero !== null && nums[j] !== 0) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                break;
            }
        }
    }
    console.log(nums);
};

function isZero(num) {
    return num === 0;
}

moveZeroes([0, 1, 0, 3, 12]);