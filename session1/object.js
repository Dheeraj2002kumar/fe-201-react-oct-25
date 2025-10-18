/*
Object in JS

key - value pairs
properties & behavior (methods in an object)

*/

// Student entity

function greeting(name){
    console.log("Hello! My name is ", name)
}

let s1 = {
    name: 'Dheeraj',
    greeting: function() {
        console.log("Hello! My name is Dheeraj!")
    }
}

let s2 = {
    name: 'Niraj',
    greeting(){
        console.log("Hello! My name is Niraj!")
    }
}

let s3 = {
    name: 'Saurabh',
    greeting: greeting
}

let s4 = {
    name: 'Niharika',
    greeting
}

console.log(s1.name)
s1.greeting()
console.log(s3.greeting === s4.greeting)
s3.greeting(s3.name)
s4.greeting(s4.name)
