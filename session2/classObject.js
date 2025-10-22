// Method & Contructor overriding
// super keyword
// classes can inherit from other Classes
// class enable inheritance

// ----------------------------------------------
// How contructor function enable inheritance !

//---
// Fn have prototype = {}
// new Fn --> {} ----> backup/prototype ---> Fn.prototype
//----


// function greeting(){
//     console.log('Hello!')
// }

// let parentObj = {
//     greeting(){
//         console.log('Hello')
//     }
// }

// Student.prototype = {}  // by default this exists

function Student(name){
    // this = {}
    this.name = name;
    // this.greeting = greeting;

    // Object.setPrototypeOf(this, Student.prototype)
    // return this
}

Student.prototype.greeting = function(){
    console.log("Hii !!")
}

let s1 = new Student('Jane')  // {}
// Object.setPrototypeOf(s1, parentObj);

let s2 = new Student('John')
// Object.setPrototypeOf(s2, parentObj);

let s3 = new Student('Jack')
// Object.setPrototypeOf(s3, parentObj);

console.log(s1)
console.log(s2)
console.log(s3)

s1.greeting() // greetingxxx --- Yes --- Student.prototype --- Yes
s2.greeting()
s3.greeting()




//------------------------------------
// Prototyple inheritance in js

// let o1 = {
//     a: 1
//     // b: 2
// }

// let o2 = {
//     b: 2
// }

// let o3 = {
//     c: 3
// }

// // o1 --prototype/backup --> o2
// // Object.assign(o1, o2)
// Object.setPrototypeOf(o1, o2)
// Object.setPrototypeOf(o2, o3)


// o2.b = 20  // { b: 20 }

// console.log(o1)
// console.log(o1.a)
// console.log(o1.b)  // o1  !xxxxx ---? ---! ---> o2.b
// console.log(o2.b)
// console.log(o2.c) // c ? o2 ?? No ---? --! ---> o3.c
// console.log(o1.c) // c ? o1 = No ---? --! --> o2 ? = No --? --! --> o3.c 


//---------------------------------------
// Utilities available on the Object function
// Object Contructor function

// function Object() { ... } --> already exists
// Object.keys = function() {}
// Object.values = function(){}
// Object.entries = function() {}
// Object.assign = function() {}
// let o1 = {}  // --> new Object();

// let o1 = new Object();  // 1. {}  2. Object fn will get executed  3. return {}
// o1.a = 1
// o1.b = 2
// o1.c = 3
// console.log(o1)
// console.log(Object.keys(o1))  // [a, b, c]
// console.log(Object.values(o1))  // [1, 2, 3]
// console.log(Object.entries(o1)) // [['a', 1], ['b', 2], ['c', 3]]
// // Object.assign(target, source)  // target -> {}, source --> from where you want to copy
// let o2 = Object.assign({}, o1)
// console.log(o2)
// console.log(o1 === o2) // different memory location

// let o3 = { d: 4 }
// let o4 = Object.assign(o3, o1)
// console.log(o4)
// console.log(o3 === o4) // target memory location is same --> true


//-------------------------------------
// function are just objects

// key - value pairs !

// let obj = {

// }
// obj.a = 1;

// function X(){
//     console.log("Hi!")
// }
// // { name: X, body() {...} }
// X();

// X.a = 1;
// X.b = 2
// X.c = function(){
//     console.log("Method of fn x!")
// }

// console.log(X.a)
// X.c()