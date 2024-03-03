var majorityElement = function(nums) {
    let count = 1;
    let majEle = nums[0];
     for(let i = 1 ; i < nums.length ; i++ ){
         if(count == 0){
             count = 1;
             majEle = nums[i]
         }
         else if(nums[i]== majEle){
             count++
         }
         else{
             count-- ;
         }
     }
     return majEle
};
