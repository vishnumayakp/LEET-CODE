/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels='aeiouAEIOU'
    let result=[]  
    let arr= s.split('')
    for(let i=0; i<arr.length; i++){
        if(vowels.indexOf(arr[i])!==-1){
            result.push(arr[i])            
        }      
    }
    result.reverse()
    for(let j=0;j<arr.length;j++){
        if(vowels.indexOf(arr[j])!==-1){
            arr[j]=result.shift()
        }
    }
    return arr.join('')
};
console.log(reverseVowels("IceCreAm"))  //"AceCreIm"
console.log(reverseVowels("leetcode"));

