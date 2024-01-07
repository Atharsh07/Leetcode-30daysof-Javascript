/*   function composition:---------
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.


*/
/* note  reduce() left to right and reduceRight() right to left
*/

var compose = function(functions){
    return function(x){
        for(i = 0; i<functions.lenght; --i){
            x = functions[i](x);
        }
        return x;
    }
}

// by using reduce method 

var compose = function(functions){
    return function(X){
        return(functions.reduceRight((acc, cur) => cur(acc), X));
    }
}