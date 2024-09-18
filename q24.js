function singleWords(s1,s2){
    let result=[]
    let result2=[]
    let value=[]
    let string=s1+" "+s2
    let arr=string.split(' ')

    for(let i=0; i<arr.length; i++){
        if(result.indexOf(arr[i])===-1){
            result.push(arr[i])
        }else{
            result2.push(arr[i])
        }
    }

    for(let i=0; i<result.length; i++){
        if(result2.indexOf(result[i])==-1){
            value.push(result[i])
        }
    }
    return value
    }
console.log(singleWords("this apple is sweet","this apple is sour"));
console.log(singleWords("apple apple","banana"));

