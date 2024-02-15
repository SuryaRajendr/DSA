
// In JavaScript, there are three keywords used to declare variables: var, let, and const


// const value; => const keyword does not declaration alone, we always should provide value for that particular variable
// const value = 5

// const obj = {}
// obj.name = "abc"
// console.log(obj)



// let country = "india"

// let country; =====> // we can not redeclare beacuse its a block scope variable

// let store;

// store = 5;
// console.log(store)
// store = 10;
// console.log(store)

// function sum() {
//     let mark = 400
//     store = 25
//     return 5+store
// }
// // console.log("mark",mark);
// console.log(sum())

// var store2;

// store2 = 5;
// console.log(store2)
// store2 = 10;
// console.log(store2)

// var abc = "1234"

// function sum() {
//     console.log("abc",abc)
//     var mark = 400
//     const marks = 400
//     store2 = 25
//     return 5+store2
// }
// console.log(sum())
// console.log("marks",marks);
// console.log("mark",mark);


// var actor = "vijay" 
// var actor = "surya"

const a = 5

function add() {
  const a = 10
  return a
}

console.log("add", add());
console.log(a)


let b = 5

function add2() {
  let b = 10
  return b
}

console.log("add", add2());
console.log(b)


var c = 5

function add3() {
  var c = 10
  return c
}

console.log("add", add3());
console.log(c)