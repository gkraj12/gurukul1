// You are given an array A of size N with possibly duplicate elements. Your task is to find the index of first occurence of an element T in the given array. Also, return -1 if the element is not present.

let arr = [10,20,30,40,50]
function firstIndex(A,T){
    for(let i = 0; i<A.length-1;i++){
        if(A[i]=== T){
            return i
        }
    }
    return -1
}
console.log(firstIndex(arr, 30));
console.log(firstIndex(arr, 60));