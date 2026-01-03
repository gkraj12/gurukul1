//    1
//    12
//   123
//  1234
// 12345


let numberOfSpaces = 4
for(let lines = 1; lines<=5; lines++){
    
    //spaces:
    let s1 = ""
    for(let i = 1; i<=numberOfSpaces; i++){
      s1 = s1+" "
    }
    numberOfSpaces--


    let str = ""
    for(let col = 1;col<=lines; col++){
        str = str + col
    }
    console.log(s1+str)
}