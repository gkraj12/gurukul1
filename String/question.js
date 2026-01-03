// let str = "Ramesh"

// // find 4th last latter of a string

// let l = str.length
// console.log(str[l - 4]);








// print all vowels in string
// for(let t of str){
//     if(t ==="A" || t=== "a"||
//         t==="E" || t==="e"||
//         t==="I" ||t==="i" ||
//         t==="O"|| t==="o"||
//         t==="U" || t==="u"

//     ){
//         console.log(t)
//     }
// }


// reverse a string

// let str = "ramu"
// let rev = ""
// for(let i=str.length-1; i>=0; i--){
//     // console.log(str[i])
//     rev = rev + str[i]
// }
// console.log(rev)



// check if string is palindrome or not
let isPalindrome = str === reversed;
console.log("Is palindrome:", isPalindrome);


// count no of vowels in string
let vowelCount = str.match(/[aeiou]/gi);
console.log("Number of vowels:", vowelCount ? vowelCount.length : 0);


// reverse

let str = "hello"
let rev1 = ""
let rev2 = ""

for(let i = 0; i<=str.length-1; i++){
    rev1 = rev1 + str[i]
    // rev1 = "" + "h" => h
    // rev1 = h + e => he
    // rev1 = hl +l => hello
    rev2 = str[i] + rev2
    // rev2 = "h" + "" => h
    // rev2 = "e" +"h" => eh
    // rev2 = l + eh => olleh
}
console.log(rev1)
console.log(rev2)