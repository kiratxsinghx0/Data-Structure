/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let goalPost = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (goalPost <= i + nums[i]) {
            goalPost = i;
        }
    }
    if (goalPost == 0) return true;
    return false;
};
