/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let preFix = 1 ;
   let postFix = 1 ;
   let arr = new Array(nums.length).fill(1) ;
   let j = nums.length - 2 ;
   for(let i =1 ; i < nums.length ; i++){
        if(i < j){
            preFix = nums[i - 1] * preFix;
            postFix = nums[j + 1] * postFix ; 
            arr[i] = preFix;
            arr[j] = postFix
        }
        else if(i > j){
            preFix = nums[i - 1] * preFix;
            postFix = nums[j + 1] * postFix ; 
            arr[i] *= preFix ;
            arr[j] *= postFix
        }
        else if(i == j){
               preFix = nums[i - 1] * preFix;
            postFix = nums[j + 1] * postFix ; 
            arr[i] = preFix  * postFix; 

        }
        j-- ;
   }
   return arr ;
};
