// Given 2 numbers n and r. Your task is to calculate nPr n!/(n-r)!.

function nPr(n, r) {
    // Helper function to calculate factorial
    function factorial(x) {
        let result = 1;
        for (let i = 2; i <= x; i++) {
            result *= i;
        }
        return result;
    }
    // Calculate nPr = n! / (n - r)!
    return factorial(n) / factorial(n - r);
}

// Example usage:
const n = 5, r = 2;
console.log(nPr(n, r)); // Output: 20