// Write a program to print each word of a given string on a new line.
// Assume there are no extra spaces — words are separated by a single space only.

// let str = "This is a test"

// let arr = str.split(" ")

// for(let word of arr){
//     console.log(word)
// }
let sentence = "This is a test"
sentence = sentence + " "
let word= ""
for(let t of sentence){
    if(t != " "){
        word = word + t
    }
    else if(t == " " && word != ""){
        console.log(word)
        word = ""
    
    }
}