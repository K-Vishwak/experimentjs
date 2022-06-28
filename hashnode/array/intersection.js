function intersect(nums1, nums2) {
    let obj1 = {};
    let obj2 = {};
    let result = [];
    let arr = nums2.length > nums1.length ? nums1 : nums2;
    for (let i = 0; i < nums1.length; i++) {
        obj1[nums1[i]] = (obj1[nums1[i]] || 0) + 1;
    }
    for (let i = 0; i < nums2.length; i++) {
        obj2[nums2[i]] = (obj2[nums2[i]] || 0) + 1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (obj1[arr[i]] && obj2[arr[i]]) {
            result.push(arr[i]);
            obj1[arr[i]]--;
            obj2[arr[i]]--;
        } 
    }
    return result;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));