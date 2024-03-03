/**         
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
if (k > nums.length) {
    let dividend = k%nums.length ;
    k = dividend ;
}
    let lastNumber;
    let j = nums.length - 1;
    let lastIndexForKEle = k - 1;
    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
        lastNumber = nums[j];
        nums[j] = nums[i];
        nums[i] = lastNumber;
        j--;
    }
            j = nums.length - 1;
        for (let i = 0; i < k + Math.floor((nums.length - k) / 2); i++) {
            if (i < Math.floor(k / 2)) {
                lastNumber = nums[lastIndexForKEle];
                nums[lastIndexForKEle] = nums[i];
                nums[i] = lastNumber;
                lastIndexForKEle--;
            }
            else if (i < k) {
                continue;
            }
            else {
                lastNumber = nums[j];
                nums[j] = nums[i];
                nums[i] = lastNumber;
                j--;
            }
        }
};
