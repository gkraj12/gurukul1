// Take an integer input and calculate the sum of the cubes of its digits.

function sumOfCubesOfDigits(n) {
  // Convert the number to a string to iterate through its digits
  let numStr = n.toString();
  let sum = 0;

  // Iterate through each digit of the number
  for (let i = 0; i < numStr.length; i++) {
    let digit = parseInt(numStr[i]); // Get the digit as an integer
    sum =sum+ Math.pow(digit, 3); // Add the cube of the digit to the sum
  }

  // Print the result
  console.log(sum);
}

// Example usage:
// let n = 123;
// sumOfCubesOfDigits(n);

function sumOfCubesOfDigit(n){
 let num = n.length()
 let sum = 0
 for(let i = 0;i<n.length;i++){
    let digit = parseInt(num[i]) 
    sum = sum + Math.pow(digit,3)
}
 console.log(sum)
}
// Example usage
let n = 123
sumOfCubesOfDigit(n)