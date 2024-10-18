/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const value={};
    let key='';
    let large=0;
    for(let i=0; i<nums.length; i++){
        value[nums[i]] = (value[nums[i]] || 0) + 1        
    }
    for(let x in value){
       if(large<value[x]){
        large=value[x]
        key=x
       }
        
    } 
    return Number(key)
};
console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));

