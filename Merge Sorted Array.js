/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} 
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1; 
    let index2 = n - 1; 
    let mergeIndex = m + n - 1; 

    while (index2 >= 0) {
        if (nums1[index1] > nums2[index2]) {
            nums1[mergeIndex] = nums1[index1];
            index1--;
        } else {
            nums1[mergeIndex] = nums2[index2];
            index2--;
        }
        mergeIndex--;
    }
};