// let a = 10

// for(let i = 1; i<=1; i++){
//     let a =20
//     console.log("inner 1",a)
    
// }
// console.log("outer",a)

// var a = 10

// for(let i = 1; i<=1; i++){
//     console.log("inner 1",a)
//     var a = 100
// }
// console.log("outer".a)

// var a = 100

// function hello(){
//     console.log("inner 1", a)
//     var a = 500
//     console.log("inner 2",a)
// }
// hello()
// console.log("outer",a)


// var a = 1
// let b = 1
// {
//     var a= 2
//     let b = 2
// }
// console.log(a,b)
// // 2 1

// console.log(a)
// let x = 5
// // ReferenceError

// console.log(typeof a , typeof b)
// var a = 1
// let b = 1
// // undefined ReferenceError

// for(let j = 0; j<=3; j++){
//     console.log(j)
// }

// let count = 0
// if(true){
//     console.log(count)
// }
// console.log(count)

// let x = 10
// {
//     var x= 20
// }
// console.log(x)
// // Identifier

var a = 'gobal'
function test(){
    console.log(a)
    var a = 'local'
    console.log(a)
}
test()
// console.log(a)