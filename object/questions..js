// Q1 : create an object{name,age} and rename the key "name" full-name
let obj = {
    name: "Gaurav",
    age: 25,
    city: "Noida"
};

obj["full-name"] = obj["name"];
delete obj["name"];
console.log(obj)











// q2: take two object and combine both without using spread  or object assign
// let obj1 = {
//     a : 10,
//     b : 20,
//     c : 30
// };

// let obj2 = {
//     a : 11,
//     d : 20,
//     c : 34
// };

// for(let k in obj2){
//     obj1[k]= obj2[k]
// }
// console.log(obj1)

// let obj1 = {
//     a : 10,
//     b : 20,
//     c : 30
// };

// let obj2 = {
//     a : 11,
//     d : 20,
//     c : 34
// };

//  let obj3 = {}
//  for(let k1 in obj1){
//     // console.log(k1,obj1[k1])

//     let key = k1 
//     let value = obj1[k1]
//     obj3[key] = value
//  }

//  for(let k2 in obj2){
//     // console.log(k1, ibj1[k1])

//     obj3[k2] = obj2[k2]
//  }
// console.log(obj3)








// q3: take  two object and combine both without using spread or object assign . but if key alread exists and multiple value sin array 


let obj1= {
    a : 10,
    b : 20,
    c : 30,
    d : 200
}

let obj2 = {
    a : 11,
    d : 20,
    c : 34,
}
 
for(k in obj2){
    if(k in obj1){
        let v1 = obj1[k]
        let v2 = obj2[k]
        obj1[k] = [v1,v2]
    }
    else{
        obj1[k] = obj2[k]
    }
}





// q4 : take an object and check if a particular key exist 