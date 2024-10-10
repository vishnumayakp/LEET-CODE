/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   while(num>=10){
    num=num.toString().split('').map(Number).reduce((total,value)=>total+value,0)
   }
   return num
};
console.log(addDigits(38));

