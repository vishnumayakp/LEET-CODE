/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let result=[];
    if(original.length!==m*n){
        return []
    }
        for(let i=0; i<m; i++){
            result.push(original.slice(i*n, i*n+n))
        }
        return result

}
console.log(construct2DArray(original = [1,2,3,4], m = 2, n = 2));
