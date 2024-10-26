/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let common=words[0].split('')
    for(let i=1; i<words.length; i++){
        common=common.filter((char)=>{
            let index= words[i].indexOf(char)
            if(index!==-1){
                words[i]=words[i].slice(0,index) + words[i].slice(index+1)
                return true
            }
            return false
        })
    } 
    return common   
};
console.log(commonChars(["bella","label","roller"]));  // ["e","l","l"]
console.log(commonChars(["cool","lock","cook"]));     //["c","o"]

