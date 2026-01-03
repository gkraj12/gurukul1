//You are given an array A of size N with possibly duplicate elements. Your task is to find the index of first occurence of an element T in the given array. Also, return -1 if the element is not present.

// You have to complete firstIndex function which contains array A , integers T (target) and startIndex as inputs and returns the first index of occurence as integer output

// function firstIndex(arr, key){
//     for(let i = 0; i<=A.length-1; i++){
//         if(A[i]==T){
//             return i;
//         }
//     }
//     return -1;
// }

function firstIndex(A, T ) {
   
  // function firstIndex(arr, key){
    for(let i = 0; i<=A.length-1; i++){
        if(A[i]==T){
            return i;
        }
    }
    return -1;
}

 