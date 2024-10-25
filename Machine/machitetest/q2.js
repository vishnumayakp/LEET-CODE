function shortLength(str){
    let value=0
    let arr=str.split(' ')
    let result=arr.sort((a,b)=>a.length-b.length)

    
    return result[0].length
}
console.log(shortLength("Welcome to Bridgeon"));
console.log(shortLength("Aspiring Developer"));
console.log(shortLength("hello world"));


