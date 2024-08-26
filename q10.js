/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let value=1
    return function(...args){
        if(value==1){
            value++
            return fn(...args)
        }
    }
};


  let fn = (a,b,c) => (a + b + c)
  let onceFn = once(fn)
 
  console.log(onceFn(1,2,3));   // 6
  console.log(onceFn(2,3,6));     // returns undefined without calling fn
 