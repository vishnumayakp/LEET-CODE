/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result=''
    for(let i=0; i<s.length; i+= 2*k){
        let values=s.substr(i,k).split('').reverse().join('')
        let values1= s.substr(i+k,k)
        result+=values+values1
    }
    return result
    
};
console.log(reverseStr("abcdefg",2)); // 'bacdfeg'
console.log(reverseStr("abcd",2));

