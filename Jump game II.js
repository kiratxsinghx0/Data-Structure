/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
   let myFarthest = 0 ;
   let lastJumpIndex = 0 ;
    let jump = 0
    if (nums.length == 1) return jump ;
    for (let i = 0; i < nums.length; i++) {
        myFarthest = Math.max( myFarthest , i + nums[i])
        // if (myFarthest  <= i + nums[i]) {
        //     myFarthest = nums[i]
        // }
        if(i == lastJumpIndex ) {
            lastJumpIndex = myFarthest;
            jump++;
        
        if(myFarthest >= nums.length - 1 ){
            return jump ;
        }
        }
    }
    return jump;
};
