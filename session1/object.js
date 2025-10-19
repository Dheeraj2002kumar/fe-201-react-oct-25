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


// ------------------------

// function greeting1(){
//     // let this = ref to obj that is calling it!
//     console.log(this)
//     console.log('Hello! My name is', this.name)
// }

// let su1 = {
//     name: "Dheeraj",
//     greeting1: greeting1
// }

// console.log(su1.name)

// let su2 = {
//     name: "Niraj",
//     greeting1
// }

// let su3 = {
//     name: "Saurabh",
//     greeting1
// }; // new object

// console.log(su1.greeting1 === su2.greeting1)
// su1.greeting1()
// su2.greeting1()
// su3.greeting1()
// greeting1()
// su1.greeting1(su1.name)
// su2.greeting1(su2.name)


// --------------

// let s5 = {
//     name: "dheeraj",
//     greeting(){
//         // this = s5  | L80
//         // this = | global-object oncec L84
//         console.log("Hello! My name is", this.name)
//     }
// }
// s5.greeting();  // adfas445()

// let g = s5.greeting;
// console.log(g === s5.greeting)
// g(); // adfas445()


// ------------------ 

// function greeting4(){
//     console.log("My name is", this.name)
// }

// let s6 = {
//     name: "Niharika",
//     greeting4
// }

// // setTimeout(function(){
// //     console.log("Hello, My name is Niharika!")
// // }, 3000)

// // setTimeout(s6.greeting4, 3000)

// // bind - finction() !!!
// // I will create a copy of a function for you 
// // this will not be a variable in it !!
// // fix the value of this to an object of your choice

// let g = s6.greeting4.bind(s6)
// console.log(g === greeting4)
// g();

// let g1 = s6.greeting4.bind({ name: "Dheeraj" })
// g1()

// let s7 = {
//     name: "Suraj",
//     greeting4: g1
// }
// s7.greeting4()

// setTimeout(s6.greeting4.bind(s6), 3000)



// ------------------------

// function Student(name){
//     // this = Global object
//     // 2. this = {}
//     // ...
//     this.name = name;
//     // 3. return this {}
// }

// Student();  // this = Global object
// let s1 = new Student('A');
// let s2 = new Student('B');
// let s3 = new Student('C');
// console.log(s1)
// console.log(s2)
// console.log(s3)



// -----------------

// function Student(name){
//     this.name = name
// }

// let [s1, s2, s3] = [
//     { name: 'A'},
//     { name: 'B'},
//     { name: 'C'},
// ].map(s => console.log(new Student(s.name)))



// -------------------------------

// function Circle(radius, x, y){
//     // this = {}
//     this.radius = radius;
//     this.location = {
//         x: x,
//         y: y
//     }

//     this.draw = function(){
//         console.log(this.location.x, this.location.y)
//     }

//     this.move = function(x, y){
//         this.location.x = x;
//         this.location.y = y;
//     }
// }

// let c1 = new Circle(5, 0, 0); // {}
// c1.draw()
// c1.move(10, 10)
// c1.draw()



// -----------------------------

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age
    }

    greeting(){
        console.log('My name is', this.firstName)
    }
}

let p1 = new Person('x')
let p2 = new Person('y')
console.log(p1.greeting === p2.greeting)
p1.greeting()
p2.greeting()