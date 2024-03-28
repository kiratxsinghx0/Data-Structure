var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        // Shrink the window as much as possible while maintaining the sum condition
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    // If minLength is still Infinity, no subarray satisfies the condition
    return minLength === Infinity ? 0 : minLength;
};
