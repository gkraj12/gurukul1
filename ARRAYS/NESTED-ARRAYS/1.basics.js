// let arr = [
//     [10,20,30],
//     [40,50],
//     [70],
//     [65,66,67,100]
// ]

// for(let rowa = 0;rowa<=arr.length-1;rows++){
//     console.log(arr[rows])
//     rows= 0
//     let innerArray = arr[rows]
//     console.log(innerArray)
//     for(let j = 0;j<=arr[0].length-1;j++){
//         console.log(innerArray[j])
//     }
// }

// for (let rowa = 0; rowa < arr.length; rowa++) {  // Use rowa as the loop variable
//     console.log(arr[rowa]);  // Log the whole row
//     let innerArray = arr[rowa];  // Get the inner array of the current row
//     console.log(innerArray);  // Log the inner array
//     for (let j = 0; j < innerArray.length; j++) {  // Loop through the inner array
//         console.log(innerArray[j]);  // Log each element
//     }
// }

// Biggest row lenght wise
// let arr1 = [
//     [10,20,30],
//     [40,50],
//     [70],
//     [65,66,67,100]
// ]

// let maxLength = 0
// let longestRow = []
// for(let rows= 0;rows< arr.length;rows++){
//     if(arr[rows].length > maxLength){
//     maxLength = arr[rows].length
//     longestRow = arr[rows]
//     }
// }
// console.log("Longest Row:",longestRow)
// console.log("Length of Longest row :", maxLength)

// for (let i = 0; i < 4; i++) {

    

//     for (let j = 0; j < arr[i].length; j++) {

//         console.log(arr[i][j]);

//     }
// }
// if the given nested array is matrix
// let arr2 = [
//     [10,20,30],
    

//     \



    
//     [70],
//     [65,66,67,100],
//     500,
//     [7000,800,900]
// ]


// Biggest row lenght wise
// let arr1 = [
//     [10,20,30],
//     [40,50],
//     [70],
//     [65,66,67,100]
// ]

// let max = 0
// let maxArray 

// for(let row of arr1){
//     // console.log(row)
//     let l = row.length
//     console.log("row",l)
//     if(l > max){
//         max = l 
//         maxArray = row

//     }
// }
// console.log(max,maxArray)

// for(let row of arr1){
//     if(row.length == max){
//         console.log(row)
//         break
//     }
// }

// if the given nested array is matrix
let arr = [
    [10,20,30],
    [40,50],
    300,
    [70],
    100,
    [65,66,67,100],
    [7000,800,900]

]
// console.log(arr2.length)
function isMatrix(arr){
     if (typeof arr[0] !== "object") {
        console.log("Not a Matrix 0")
        return 

    }
    let l = arr[0].length
    for(let i = 1; i<=arr.length;i++){
        if(typeof arr[i] != "object"){
            consolelog("Not a Matrix 2")
            return 
        }
    }
    console.log("Its a matrix ")
}


function isMatrix(arr) {
    if (typeof arr[0] !== "object") {
        console.log("Not a Matrix 0");
        return;
    }

    let l = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== "object") {
            console.log("Not a Matrix 2");
            return;
        }
    }
    console.log("It's a Matrix");
}

isMatrix(arr2);