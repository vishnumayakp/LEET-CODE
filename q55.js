/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let count={}
    for(let x of s){
        count[x]=(count[x] || 0)+1
    }
    for(let i=0; i<s.length; i++){
        if(count[s[i]]===1){
            return i
        }
    }
    return -1

};
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));


