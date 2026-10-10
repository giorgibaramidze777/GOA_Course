// 1)
// შექმენი 3 setTimeout, რომლებიც გამოიტანენ:

// "A" 3 წამში
// "B" 1 წამში
// "C" 2 წამში

// 👉 დაადგინე რა იქნება საბოლოო output-ის რიგი (კოდით შეამოწმე)
setTimeout(() => {
    console.log("A")
}, 3000)

setTimeout(() => {
    console.log("B")
}, 1000)

setTimeout(() => {
    console.log("C")
}, 2000)

// 2)
// შექმენი Promise, რომელიც 2 წამში დააბრუნებს "Hello".
// შემდეგ then-ით დაამატე " World" და დაბეჭდე შედეგი.

// 👉 საბოლოო output უნდა იყოს:
// Hello World
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello")
    }, 2000)
})

myPromise.then(result => {
    console.log(result + " World")
})
// 3)
// შექმენი 2 Promise:

// პირველი აბრუნებს "Eat" 2 წამში
// მეორე აბრუნებს "Sleep" 1 წამში

// 👉 დაალაგე ისე then-ების გამოყენებით, რომ output იყოს:

// Eat  
// Sleep

// (მიუხედავად იმისა, რომ მეორე უფრო სწრაფია)
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Eat")
    }, 2000)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Sleep")
    }, 1000)
})

promise1.then(result => {
    console.log(promise2.then(result2 => {
        console.log(result2)
    }))
    console.log(result)
})
// 4)
// შექმენი 3 Promise:

// "Task 1" — 3 წამში
// "Task 2" — 2 წამში
// "Task 3" — 1 წამში

// 👉 გამოიყენე Promise.race() და დაბეჭდე რომელი შესრულდა პირველი
let task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1")
    }, 3000)
})

let task2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 2")
    }, 2000)
})

let task3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 3")
    }, 1000)
})

Promise.race([task1, task2, task3]).then(result => {
    console.log(result)
})
// 5)
// შექმენი Promise, რომელიც:

// თუ შემთხვევითი რიცხვი < 0.5 → resolve("Success")
// სხვა შემთხვევაში → reject("Error")

// 👉 გამოიყენე then და catch, რომ ორივე შემთხვევა დაბეჭდო
let randomPromise = new Promise((resolve, reject) => {
    let randomNum = Math.random()
    if (randomNum < 0.5) {
        resolve("Success")
    } else {
        reject("Error")
    }
})

randomPromise.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})