/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let values=digits.slice(0,-1)
    let value = digits.slice(-1).join('');
    return (values.join('') + (Number(value)+1).toString()).split('').map(Number)
};
console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9,9]));


