function intersection(nums1, nums2) {
    let largestArr;
    let smallestArr;
    let obj = {};
    let result = [];
    if (nums1.length > nums2.length) {
        largestArr = nums1;
        smallestArr = nums2;
    } else {
        largestArr = nums2;
        smallestArr = nums1;
    }
    for (let i = 0; i < largestArr.length; i++) {
        obj[largestArr[i]] = (obj[largestArr[i]] || 0) + 1;
    }
    for (let i = 0; i < smallestArr.length; i++) {
        if (obj[smallestArr[i]]) {
            result.push(smallestArr[i]);
            obj[smallestArr[i]] = 0;
        }
    }
    return result;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));