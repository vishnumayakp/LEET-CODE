/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result=[];
    let arr=s.split(' ')
    for(let i=0; i<arr.length; i++){
        result.push(arr[i].split('').reverse().join(''))
    }
    return result.join(' ')
};
console.log(reverseWords("Let's take LeetCode contest"));  //"s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("Mr Ding"));

