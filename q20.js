/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let [a,b]=[0,1];
    while(true){
       yield a;
        [a,b]=[b,a+b];
    }
    };
    
      const gen = fibGenerator();
      console.log(gen.next(5).value);
      console.log( gen.next(0).value);
      