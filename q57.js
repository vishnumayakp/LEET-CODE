function afterNYears(obj,n){
    let values={};
    for(x in obj){
        values[x] = obj[x]+n
    }
    return values
}
console.log(afterNYears({Joel : 32, Fred : 44, Susan : 33}, 1));  // {Joel : 33, Fred : 45, Susan : 34}
console.log(afterNYears({Baby : 2, Child : 8, Adult : 25}, 19)); // {Baby : 21, Child : 27, Adult : 44}
console.log(afterNYears({Eva : 10, Joe : 40}, 5));  // {Genie : 15, Joe : 45}


