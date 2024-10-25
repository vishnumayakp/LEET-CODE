function findPrefix(arr){
    let result=[]
    let value=[]
    let str=arr.join('').split('')
    for(let i=0; i<str.length; i++){ 
        if(result.indexOf(str[i])===-1){
            result.push(str[i])
        }
        for(let j=0; j<result.length; j++){
            for(let i=0; i<=arr.length; i++){
                if(arr.indexOf(result[j])==-1){
                    value.push(result[i])
                }
            }
        }     
    }
    return value
}
console.log(findPrefix(["flower","flow","flight"]));  // "fl"
//console.log(findPrefix(["dog","racecar","car"]));   // ""
