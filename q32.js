/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let value=0
    let arr=s.trim().split(' ')
    value=arr[arr.length-1]
    return value.length
        
};
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));

