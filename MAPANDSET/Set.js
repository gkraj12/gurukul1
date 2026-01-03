// let arr = [10,20,10,20,10,10,10] // [10,20]


// let arr = []

// let arr  = new Array(10)

// console.log(arr)

// let s = new Set() 

// set is like array but no index , no duplicates(values)

// console.log(s, typeof s)

// s.add(10)
// s.add(20)
// s.add(30)
// s.add(10) // ignored as duplicate vaklue

// console.log(s)

// console.log(s.has(100)) // true or false
// s.delete(10)
// s.clear()

// console.log(s)


// for(let t of s){
//     console.log(t)
// }


// let arr  = [10,20,"apple",20,10,10,20,10,"apple"] // [10,20,30]

let str = "madamamdamdam"

let s = new Set(str)
// console.log(s ,  [...s])
console.log(s, [...s].join(""))

// let s = new Set()
// for(let t of arr){
//   s.add(t)
// }
// let brr = [...s]
// console.log(s , brr)

// set to Array:
// let brr = [] 

// for(let t of s){
//     brr.push(t)
// }
// console.log(brr)