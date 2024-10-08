/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let arr=new Set(nums)
   return arr.size!==nums.length
};
console.log(containsDuplicate([1,2,3,1]));
