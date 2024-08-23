/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if(functions.length == 0){
        return x => x;
        }
    return function(x) {
        return functions.reduceRight((acc,fn)=> fn(acc),x);
    }
};


  const fn = compose([x => x + 1, x => 2 * x])
 console.log(fn(4));   // 9
 