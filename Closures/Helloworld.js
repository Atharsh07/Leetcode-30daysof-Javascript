//Write a function createHelloWorld. It should return a new function that always returns "Hello World".
const createHelloWorld = function (){
    return function a(){
        return "Hello World"; //goes to the fucntion a() and that func will return to the main thread
    }
}
