/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr=[]
   let result;
    let arr2=[];
    for(let i=0;i<nums.length; i++){
        if(arr.indexOf(nums[i])==-1){
            arr.push(nums[i])
        }else{
            arr2.push(nums[i])
        }
    }
    for(let i=0; i<nums.length; i++){
        if(arr2.indexOf(nums[i])==-1){
            result=nums[i]
        }
    } 
    return result
};
console.log(singleNumber([2,2,1]));
 console.log(singleNumber([4,1,2,1,2]));
 console.log(singleNumber([1]));


