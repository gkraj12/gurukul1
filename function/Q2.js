// Given n and r, your task is to calculate nCr.

 

// Here nCr is the total number of ways for selecting r elements out of n options are nCr = (n!) / (r! * (n-r)!)  where n! = 1 * 2 * . . . * n.

 
 
function nCr(n, r) {
    // Helper function to calculate factorial
    function factorial(x) {
        let result = 1;
        for (let i = 2; i <= x; i++) {
            result *= i;
        }
        return result;
    }
    // Calculate nCr
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Example usage:
const n = 5, r = 2;