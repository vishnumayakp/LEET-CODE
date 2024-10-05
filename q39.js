/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let value={};
    for(let i=0; i<s.length;i++){
        value[s[i]]=(value[s[i]] || 0)+1
    }
    for(let j=0; j<t.length; j++){
        if(!value[t[j]]  || value[t[j]]==0){
            return t[j]
        }else{
            value[t[j]]--
        }
    }    
};
console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("","y"));

