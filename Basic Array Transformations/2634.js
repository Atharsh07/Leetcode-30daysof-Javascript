/*Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

var filter = function(arr, fn){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            res.push(arr[i]);
        }
    }
    return res;
};
// remove this below code will you submit in the leetcode this is for testing purpose only
    
const Even = function(Arr, fn){
    return Arr % 2 !== 0;
};    

const inputArr = [2,4,5,7,6,9,8];

const result = filter(inputArr, Even);

console.log(result);


