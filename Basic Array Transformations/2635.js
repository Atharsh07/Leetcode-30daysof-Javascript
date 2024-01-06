/*Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/
var map = function(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(fn(arr[i], i));// push func does a operation of pusinh the element into the res
    }
    return res;
  };


  