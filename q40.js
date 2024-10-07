/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let result=word1.join('')
    let result2=word2.join('')
   return result===result2
};
console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]));
console.log(arrayStringsAreEqual(["a", "cb"],["ab", "c"]));
console.log(arrayStringsAreEqual( ["abc", "d", "defg"],["abcddefg"]));

