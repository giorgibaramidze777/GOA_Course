// შექმენი Promise, რომელიც resolve-ს გააკეთებს ტექსტზე "Hello" და then-ში დაბეჭდე შედეგი.
let promise1 = new Promise((resolve, reject) => {
    resolve("Hello")
})
promise1.then(result => {
    console.log(result)
})

// შექმენი Promise, რომელიც reject-ს გააკეთებს ტექსტზე "Error" და catch-ში დაბეჭდე შედეგი.
let promise2 = new Promise((resolve, reject) => {
    reject("Error")
})
promise2.catch(error => {
    console.log(error)
})

// შექმენი Promise, რომელიც resolve-ს გააკეთებს რიცხვზე 5 და then-ში გაამრავლე 2-ზე, შემდეგ დაბეჭდე შედეგი.
let promise3 = new Promise((resolve, reject) => {
    resolve(5)
})
promise3.then(result => {
    return result * 2
}).then(finalResult => {
    console.log(finalResult)
})

// შექმენი Promise, რომელიც resolve-ს გააკეთებს ტექსტზე "Start" და then-ში დააბრუნე "Start -> End", შემდეგ დაბეჭდე შედეგი.
let promise4 = new Promise((resolve, reject) => {
    resolve("Start")
})
promise4.then(result => {
    return result + " -> End"
}).then(finalResult => {
    console.log(finalResult)
})

// შექმენი Promise, რომელიც შემთხვევით (Math.random())
// resolve-ს გააკეთებს "Success"
// ან reject-ს "Fail"
// და then / catch გამოყენებით დაბეჭდე შედეგი.
let promise5 = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        resolve("Success")
    } else {
        reject("Fail")
    }
})
promise5.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})