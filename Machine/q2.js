function twoDarray(arr,row,col){
    let result=[]
    let result1=[]

    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]==row){
            result.push(arr[i],arr[i+1])
        }
        
    }  
    return result
    
}
console.log(twoDarray([1,2,3,4],2,2)); //  [[1,2],[3,4]]

