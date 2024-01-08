/*
Given two promises promise1 and promise2, return a new promise. 
promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.
*/
//approch 1
var addTwoPromise = async function(promise1, promise2){
    return new Promise((resolve, reject) => {
        promise1.then((val1)  =>{
            promise2.then((val2) => {
                resolve(val1 + val2);
            })
        })
    })
}

//approch 2

var addtwopromise = async function(promise1 , promise2){
    return new Promise(async(resolve, reject) => {
        const sum = await Promise.all([promise1, promise2])
        resolve(sum[0]+sum[1])
    })
};