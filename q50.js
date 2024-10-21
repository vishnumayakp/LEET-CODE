/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let word = 0
    for(let x of sentences){
        let words = x.split(' ')
        if(words.length>=word){
            word=words.length
        }        
    }    
     return word
};
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
