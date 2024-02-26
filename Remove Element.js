/** 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */ 
var removeElement = function(nums, val) {
    let leftPointer = 0 ;
    let rightPointer = nums.length - 1 ;
    let numbersOfElement = nums.length ;
    
    while(leftPointer <= rightPointer){
        if(nums[leftPointer] == val){
            numbersOfElement-- ;
            nums.splice(leftPointer,1);
            // nums.push(0) ;
            // rightPointer-- ;
            // leftPointer++ ;
        }else{
            leftPointer++ ;
        }
    }
    return numbersOfElement ;
};