
    let str=""
    let i;
    let row=5
    let j;
    for(i=1; i<=row; i++){
        for(let j=i; j<=row; j++){
            str+=j-i+1
        }
        str+="\n"
    }
    console.log(str);
    

