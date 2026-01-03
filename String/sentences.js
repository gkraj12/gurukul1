let str = "Ram is dancing on the floor"

// let arr = str.split(" ")

// console.log(arr)
// console.log(arr.length)

let count = 0

for(let t of str){
    if(t == " "){
        count++
    }
}

console.log("Numeber of spaces:", count)