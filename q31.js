/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arr1=[]
    for(let i=0; i<=nums.length-1; i++){
        if(arr1.indexOf(nums[i])==-1){
            arr1.push(nums[i])
        }
    }
    return arr1
   
};
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

