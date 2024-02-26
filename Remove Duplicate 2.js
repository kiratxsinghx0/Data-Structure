var removeDuplicates = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        // Check if the next element (nums[i+2]) is within the array bounds
        if (i + 2 >= nums.length || nums[i] !== nums[i + 2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
};  
