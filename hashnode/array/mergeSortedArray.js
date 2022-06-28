// function mergeSortedArray(nums1, nums2, m, n) {
//     for (let i = 0; i < nums2.length; i++) {
//         nums1[m + i] = nums2[i];
//     }
//     return nums1.sort((a,b) => a-b);
// }

var mergeSortedArray = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = nums1.length - 1; i >= 0; i--) {
      if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
        nums1[i] = nums1[p1];
        p1--;
      } else if (p2 >= 0) {
        nums1[i] = nums2[p2];
        p2--;
      }
    }
    return nums1;
  };

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0],3,[2, 5, 6],3));