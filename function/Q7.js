// Given binary representation of number in the form of string, convert it to decimal representation.

// Note : String will be given such that output will fit in int

function binaryToDecimal(binaryStr) {
    // Convert binary string to decimal number
    return parseInt(binaryStr, 2);
}

// Example usage:
const binaryStr = "1011";
console.log(binaryToDecimal(binaryStr)); // Output: 11