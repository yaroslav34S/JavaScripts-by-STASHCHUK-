// const a = 5
//
// function myFn() {
//     function innerFn() {
//         console.log(a) // 5
//     }
//     innerFn()
// }
//
// myFn()
// let a
// let b

// function myFn() {
//     let b
//     a = true
//     b = 10
//     console.log(b) // 10
// }
//
// myFn()
//
// console.log(a) // true
// console.log(b) // undefiend

'use strict'
function myFn() {
    a = true // Uncaught ReferenceError: a is not defined
    at myFn
    console.log(a)
}
myFn()

console.log(a)