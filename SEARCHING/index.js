// let arr = [10,20,30,40,50,60,70,80,]

// let x = 400

// let flag = false
// for(let t of arr){
//     if(t == x){
//         console.log("Found")
//         flag = true
//         break
//     }
// }
// if(flag == false){
//     console.log("Not found")
// }

// find index of all element that mnatches search elsement , if none matches print -1

// let arr = [1,3,5,4,2]
// let x = 4
// let indices = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == x){
//         indices.push(i)
//     }
// }
// if(indices.length == 0){
//     console.log("-1")
// }else{
//     console.log(indices)
// }

  











// in a sorted array like arr = [1,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6]
// find the index of last x(x= 4)

// let arr = [1,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6]
// let x = 4
// let p = -1

// for(let i = 0; i <arr.length;i++){
//     if(arr[i]===x){
//         p = i
//     }
// }
// console.log(p)











// find the print where mountain is formed
// let arr1 = [1,3,5,4,2]

// let mountain = -1
// for(let i = 1;i<arr1.length-1;i++){
//     if(arr1[i]>arr1[i-1]&& arr1[i]>arr1[i+1]){
//         mountain = i
//         break
//     }

// }
// console.log(mountain)

// find the where mountain is formed
// let arr = [10,20,30,50,11,7,3,1]
 
// // max left inc rigth dec
// // max value only once
// let mountain = 0
// for(let i = 1;i<arr.length-1;i++){
//     if(arr[i]>arr[i-1]&& arr[i]>arr[i+1]){
//         mountain = i
//         break
//     }
// }
// console.log(mountain)

let arr1 = [10,20,30,50,11,7,3,1]
checkpeak(arr1)

function checkpeak(arr1){
    let max = Math.max(...arr1)
    let index = arr1.indexOf(max)
    let lastIndex = arr1.lastIndexOf(max)

}