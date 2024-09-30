/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   n=nums.length
   let value= (n*(n+1)/2)
   let value2=nums.reduce((total,value)=>total+value,0);
   return value-value2
        
};
console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));



