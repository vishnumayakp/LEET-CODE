/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr=[]
    for(let i=0; i<words.length; i++){
        if(words[i].indexOf(x)!=-1){
            arr.push(i)
        }
    }
    return arr
    
}
console.log(findWordsContaining(["leet","code"],"e"));
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"));

