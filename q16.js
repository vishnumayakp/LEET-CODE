/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    const letterToNumber = (letter) => letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const sumOfDigits = (num) => num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);

    let num = s.split('').map(letterToNumber).join('')
    
    for (let i = 0; i < k; i++) {
        num = sumOfDigits(num).toString();
    }

   return parseInt(num, 10);
}
console.log(getLucky(s = "iiii", k = 1));


   