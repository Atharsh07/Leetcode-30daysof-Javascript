/*
Given a function fn, an array of arguments args, and an interval time t,
return a cancel function cancelFn.

The function fn should be called with args immediately and then called again every
 t milliseconds until cancelFn is called at cancelTimeMs ms.

*/
var a = function(fn, args, t){
    fn(...args)
    const timer = setInterval(() => fn(args), t)
    const cancelFn = clearInterval(timer)
    return cancelFn;
} 