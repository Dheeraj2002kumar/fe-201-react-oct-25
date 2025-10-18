/*
Object in JS

key - value pairs
properties & behavior (methods in an object)

*/

// Student entity

// function greeting(name){
//     console.log("Hello! My name is ", name)
// }

// let s1 = {
//     name: 'Dheeraj',
//     greeting: function() {
//         console.log("Hello! My name is Dheeraj!")
//     }
// }

// let s2 = {
//     name: 'Niraj',
//     greeting(){
//         console.log("Hello! My name is Niraj!")
//     }
// }

// let s3 = {
//     name: 'Saurabh',
//     greeting: greeting
// }

// let s4 = {
//     name: 'Niharika',
//     greeting
// }

// console.log(s1.name)
// s1.greeting()
// console.log(s3.greeting === s4.greeting)
// s3.greeting(s3.name)
// s4.greeting(s4.name)


function greeting1(){
    // let this = ref to obj that is calling it!
    console.log(this)
    console.log('Hello! My name is', this.name)
}

let su1 = {
    name: "Dheeraj",
    greeting1: greeting1
}

console.log(su1.name)

let su2 = {
    name: "Niraj",
    greeting1
}

let su3 = {
    name: "Saurabh",
    greeting1
}; // new object

console.log(su1.greeting1 === su2.greeting1)
su1.greeting1()
su2.greeting1()
su3.greeting1()
greeting1()
// su1.greeting1(su1.name)
// su2.greeting1(su2.name)