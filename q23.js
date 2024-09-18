/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let value=x.toString()
    let revValue=value.split('').reverse().join('')
     return value==revValue
    
}
console.log(isPalindrome(-121));
