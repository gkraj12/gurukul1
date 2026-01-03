// You are given a number n and a digit d.

// You are required to calculate the frequency of the digit d in the number n.

// Note:- Don't change the Function Definition in the solution Class just return the frequency to the main function and the main function prints the frequency.

function frequencyOfDigit(n, d) {
    // Convert both n and d to strings
    const strN = n.toString();
    const strD = d.toString();
    let count = 0;
    // Loop through each character in strN
    for (let char of strN) {
        if (char === strD) {
            count++;
        }
    }
    return count;
}

// Example usage:
const n = 122333;
const d = 3;
const freq = frequencyOfDigit(n, d);
console.log(freq); // Output: 3