// let arr = [10,20,30,40,50,60]
// let index = 3

// let n = 35
// let brr = []
// for(let i = 0; i<=arr.length-1; i++){
//     if(i == index){
//         brr.push(n)

//     }
//     brr.push(arr[i])
// }
// console.log(brr)

let arr = [10,20,30,40,50,60]
let index = 3 // delete the element at index 3
let n = arr.length
let brr = []
for(let i = 0; i<=n-1; i++){
    if(i != index){
        brr.push(arr[i])
    }
}
console.log(brr)

// helloFunction()

// function helloFunction () {
 







//     let arr = [10, 20, 30, 40, 50, 60]
//     let index = 3 // delete the element at index 3
//     let n = arr.length
//     let brr = []
//     for (let i = 0; i <= n - 1; i++) {
//         if (i != index) {
//             brr.push(arr[i])
//         }
//     }
//     console.log(brr)
// }
