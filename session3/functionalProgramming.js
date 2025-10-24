// - Modules
//     - Todo application

function addTodo(arr, item, priority){
    if (priority === 'high'){
        return [item, ...arr]
    }
    return  [...arr, item]
}

function clearTodo(arr, index){
    const a = [...arr]
    a[index] = null
    return a
}

function updateTodo(arr, index, newItem){
    // arr[index] = newItem
    // return arr

    // let a = []
    // for (i = 0; i < arr.length; i++){
    //     if (i === index){
    //         a.push(newItem)
    //     } else{
    //         a.push(arr[i])
    //     }
    // }
    // return a

    const a = [...arr]
    a[index] = newItem
    return a
}

function getTodo(arr, index){
    if (index !== undefined){
        return arr[index]
    }
    return arr
}

let allTasks = getTodo(['Get juice', 'workout', 'study'])

allTasks = updateTodo(allTasks, 0, 'Get Water')

let firstTask = getTodo(allTasks, 0)
console.log('>', firstTask)

allTasks = clearTodo(allTasks, 0)

firstTask = getTodo(allTasks, 0)
console.log('>', firstTask)

// allTasks = addTodo(allTasks, 'sleep', 'high')
allTasks = addTodo(allTasks, 'sleep')

// firstTask = getTodo(allTasks, 0)
firstTask = getTodo(allTasks)

console.log('>', firstTask)


//---------------------------
//  - Pure function
//     - side effect - NO!!
            // anything which has relation with outside world

// let a = 10
// let b = 15
// function add1(){
//     return a+50 
// }
// console.log(add1())

// // Relies on global variables !
// function add(a, b){
//     return a+b
// }
// console.log(add(5, 10))

// function x(){
//     console.log('.....')
//     // savingRecodsInDB...
// }
// x()

// let m = 5
// let n = 10
// function x(a, b){
//     a = a*2 
//     return a + b
// }

// console.log(x(m, n))
// console.log(x(m, n))



// function x(obj){
//     obj.a = obj.a * 2
//     return obj.a + obj.b 
// }

// let o1 = { a: 5, b: 10 }
// console.log(x(o1))
// console.log(x(o1))


// function x(arr){
//     arr[0] = arr[0] * 2
//     return arr[0] + arr[1]
// }

// let a = [5, 10]
// console.log(x(a))
// console.log(x(a))


// a is immutable !!
// const a = 10
// a = 20

// sldskfj33
// const b = { x: 1 }
// b.x = 20
// b = { z: 20 }  // 23r2s

// For the same input you always get the same output back!!


//     - immutability
//     - objects
//     - arrays
// function likeMap(arr, v){
//     let a = []
//     for (let n of arr){
//         a.push(n * v)
//     }
//     return a
// }

// let x = [1,2,3]
// console.log(likeMap(x, 3))  // [3, 6, 9]
// console.log(likeMap(x, 3))  // [3, 6, 9]
// console.log(likeMap(x, 3))  // [3, 6, 9]


// function insertSum(arr){
//     // imparative way !!
//     // const a = []
//     // let s = 0

//     // for (let n of arr){
//     //     s = s + n
//     //     a.push(n)
//     // }
//     // a.push(s)

//     // return a


//     // declarative way!!
//     let s = arr.reduce((n, acc) => n + acc, 0)
//     return [...arr, s]
// }

// console.log(insertSum([1, 2, 3]))  // [1, 2, 3, 6]


//     - HOF-- > Higher Order function


// ------------------------------
// - Imperative vs Declarative code

// const username = [
//     'adam',
//     'Elizabeth',
//     'aman',
//     'Klassen'
// ]

// How many users have username > 5 length
// // How?? - Imperative....
// let longUsernames = []

//-----------
// for (let i = 0; i < username.length; i++){
//     let user = username[i];
// }
//-------------

// for(let user of username){
//     if (user.length > 5){
//         longUsernames.push(user)
//     }
// }

// console.log(longUsernames)

// What?? - Declarative...
// let longUsernames = username.filter(name => name.length > 5)
// console.log(longUsernames)



// ------------------------------------
// HOF - Higher order function
// Fn which accepts another fn as an argument and/or return another fn

// ex
// const add = function(a, b){
//     return a+b
// }

// const subtract = function(a, b){
//     return a - b 
// }

// // console.log(add(5, 10))
// // console.log(subtract(10, 5))

// function calculate(opr, a, b){
//     const result = opr(a, b)
//     return result
// }

// console.log(calculate(add, 10, 20))
// console.log(calculate(subtract, 20, 5))



// function x(f){
//     return 5
// }

// x(function() {})

// function x(){
//     return function(){

//     }
// }

// x()


// function x(a){
//     return function(){

//     }
// }

// x(function(){})






// ----------------------------------
// - JS -- > Functional Programming | Function -> First class objects
// fn have all the capabilites of a primitive data type

// const a = 1; 
// const f = function(){
//     console.log('Hi')
// }

// function x(a){
//     // ...
//     // return 10
//     return function(){

//     }
// }

// x(a)
// x(f)

// x(5)
// x(function() {})



// -------------------------------
// - FP(Functional Programming) --> composing functions
// JS supports both Functional programming & OOP!