let arr = [ 10,20,30,40,50,60,70,80,90]

// 3*3 
let count = 0
let brr = []


for(let i = 0; i<=2;i++){
 let innerArray = []
    for(let j = 0; j<=2;j++){

        innerArray.push(arr[count])
        count = count+1
    }
    brr.push(innerArray)
}
console.log(brr)