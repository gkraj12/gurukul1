// *
// *
// *
// *
// *

// for(let i = 1; i<=5; i++){
//     console.log("*")
// }

// *****

// console.log("*****")

// ***** 
// let str = ""
// for(let i = 1; i<=5; i++){
//     str = str +"*"
// //   str = ""+"*" => "*"
// //   str = "*"+"*" =>"**"
// //   str = "**"+"*" =>"***"
// }
// console.log(str)


// 12345
// let str = ""
// for(let i = 1; i<=5; i++){
//     str = str +"*" 
// // str = "" + 1 => "1"
// // str = "1"+2 => "12"
// // str = "12"+3 => 123 
// // 1234, 12345
// console.log(str)
// }
// console.log(str)


// print all even number from 1-10, sperated by , 
// 2,4,6,8,10

let str = ""
for(let i = 1; i<=10; i++){
    if(i%2==0){
        str = str + i +","
        //str= "" + 2,
        // str = 2,+4,+6,
    }
    // console.log(str)
}
console.log(str)

// *****
// *****
// ***** 
// line 1:

// let str = ""
// for(let i = 1; i<=5;i++){
//     str = str + "*"
// }
// console.log(str)
// // line 2:
//  str = ""
// for(let i = 1; i<=5;i++){
//     str = str + "*"
// }
// console.log(str)

// //line 3:
//  str = ""
// for(let i = 1; i<=5;i++){
//     str = str + "*"
// }
// console.log(str)

// for(let r =1; r<=3;r++){
//     let str = ""
//     for(let i = 1; i<=5;i++){
//     str = str + "*"
//    }
//   console.log(str)

// }

let x = 1
for(let r =1; r<=3;r++){
    let str = ""
    for(let i = 1; i<=x;i++){
    str = str + "*"
   }
  console.log(str)
  x = x +2
}