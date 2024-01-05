/*Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

*/

var CreateCounter= function(init){
    var IntialState = init;
    var increment = function(){
        IntialState+=1;
        return IntialState;
    };
    var decrement = function(){
        IntialState-=1;
        return IntialState;
    };
    var reset = function(){
        IntialState=init;
        return IntialState;
    }
    return increment, decrement, reset ;
}