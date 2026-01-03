// Given a positive integer N. The task is to Create a function and return true or false according to the condition that whether zero is present at the second last place value or not.

// You have to print the output in the calling function itself based on the boolean value you get in return from the function.

function hasZeroAtSecondLastPlace(N) {
    // Convert number to string to access digits
    const str = N.toString();
    // Check if the number has at least two digits
    if (str.length < 2) return false;
    // Check if the second last digit is '0'
    return str[str.length - 2] === '0';
}

// Example usage:
const N = 105;
if (hasZeroAtSecondLastPlace(N)) {
    console.log("True");
} else {
    console.log("False");
}