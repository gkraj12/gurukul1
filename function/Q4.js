// Lily wants to enter a positive integer and increase its value by 5 using for loop.

// She wants to increase the value in fun function & print the result in the caller function.

// Help Lily by writing a program for the same.

function fun(n) {
    // Increase n by 5 using a for loop
    for (let i = 0; i < 5; i++) {
        n++;
    }
    return n;
}

// Example usage:
const num = 10;
const result = fun(num);
console.log(result); // Output: 15