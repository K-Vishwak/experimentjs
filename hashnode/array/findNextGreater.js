function nextGreaterElement(nums1, nums2) {
    let obj = {};
    let result = [];
    for (let i = 0; i < nums2.length; i++) {
        obj[nums2[i]] = i;
    }

    for (let j = 0; j < nums1.length; j++) {
        let pushed = false;
        for (let k = obj[nums1[j]]; k <= nums2.length-1; k++) {
            if (nums1[j] < nums2[k]) {
                result.push(nums2[k]);
                pushed = true;
                break;
            }
        }
        if (!pushed) {
            result.push(-1);
        }
    }
    return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));