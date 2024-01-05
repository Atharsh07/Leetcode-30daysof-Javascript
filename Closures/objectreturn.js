/*
Write a function expect that helps developers test their code. 
It should take in any value val and return an object with the following two functions.

--->toBe(val) accepts another value and returns true if the two values === each other. 
If they are not equal, it should throw an error "Not Equal".
---->
notToBe(val) accepts another value and returns true if the two values !== each other. 
If they are equal, it should throw an error "Equal".

*/



var expect = function(val) {
    return {
        x : val,
        notToBe : function(key){
            if (this.x === key) {
                throw new Error("Equal");
            }
            return true;
        },
        toBe : function(key){
            if (this.x !== key) {
                throw new Error("Not Equal");
            }
            return true;
        }
    }
};

/* For example, when expect(5).toBe(4) is called,
   val is the expect parameter (so val equals 5),
   val2 is the toBe parameter (so val2 equals 4).
   Since val !== val2, aka 5 != 4, we throw error "Not Equal". */

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */