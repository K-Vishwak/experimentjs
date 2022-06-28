class NumArray {
    nums;
    sum;
    
    constructor(nums) {
        this.nums = nums;
        this.sum = 0;
    }

    sumRange(left, right) {
        for(let i=left;i<=right;i++) {
            this.sum+=this.nums[i];
        }
        return this.sum;
    }
}

let t = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(t.sumRange(2,5));
