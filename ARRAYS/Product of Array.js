// Given an array of integers, return the product of all the elements.
// function productOfArray(arr, N){
//     return 
//     for(let i = 0; i<=N-1; i++){
//         product = product * arr[i]
        
//     }
//     return product;
// }

function productOfArray(arr){
    let product = 1
    for(let i = 0; i<=arr.length-1;i++){
        product = product * arr[i]
        
    }
    return product;
}