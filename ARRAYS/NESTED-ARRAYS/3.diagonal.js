let mat = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

// for(let i = 0; i<=mat.length-1;i++){
//     for(let j = 0; j<=mat[0].length-1;j++){
//         if(i == j){
//            console.log(mat[i][j])
//         }
         
//     }
// }

for(let i = 0; i<=mat.length-1;i++){
    console.log(mat[i][i])
}
for (let i = 0; i < mat.length; i++) {
    console.log(mat[i][mat.length - 1 - i]);
}
// for(let i = 0;i<=mat.length-1;i++){
//     for(let j = 0; j<=mat[0].length-1;j++){
//         if(i+j == mat.length-1){
//             console.log(mat[i][j])
//         }
//     }
// 
// print all 