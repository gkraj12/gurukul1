//Enter 2 numbers a,b - exchange their values without using third variable and print them

let a = 250
let b = 400

a = a+b 
b = a-b 
a = a-b 

console.log("After swapping: a =", a, ", b =", b)
// This method uses arithmetic operations to swap values without needing a temporary variable.
// It first adds both numbers, then subtracts the new value of 'a' to get 'b', and finally subtracts the new value of 'b' to get 'a'.