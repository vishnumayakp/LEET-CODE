/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let array=[]
    for(let i=0; i<arr.length; i++){
        array.push(fn(arr[i],i))
    }
    return array
};
const arr = [1,2,3], fn = function plusone(n) { return n + 1; }
console.log(map(arr,fn));
