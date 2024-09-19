function findLast(str){
    let arr=str.trim().split(' ')
    let value=arr[arr.length-1]
    return value.length
}
console.log(findLast("This is my name Vishnumaya "));
