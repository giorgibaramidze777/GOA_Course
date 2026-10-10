// 1)
// შექმენი 2 Promise:

// "Start" — 1 წამში
// "Finish" — 2 წამში

// 👉 გამოიყენე then ისე, რომ output იყოს:

// Start
// Finish

// (დაიწყოს მეორე მხოლოდ პირველის დასრულების შემდეგ)

let startPromise = new Promise(resolve => setTimeout(() => resolve('Start'), 1000))
startPromise.then(result => {
  console.log(result)
  return new Promise(resolve => setTimeout(() => resolve('Finish'), 2000))
}).then(result => console.log(result))

// 2)
// შექმენი Promise, რომელიც 2 წამში აბრუნებს რიცხვს 5
// 👉 შემდეგ then-ებში გააკეთე:

// გაამრავლე 2-ზე
// მერე დაამატე 10

// 👉 საბოლოოდ დაბეჭდე შედეგი

let promise = new Promise(resolve => setTimeout(() => resolve(5), 2000))
promise.then(num => num * 2).then(num => num + 10).then(result => console.log(result))

// 3)
// შექმენი 3 Promise:

// "One" — 4 წამში
// "Two" — 2 წამში
// "Three" — 3 წამში

// 👉 გამოიყენე Promise.race() და დაბეჭდე შედეგი
// 👉 შემდეგ შეცვალე დროები ისე, რომ სხვა Promise-მა გაიმარჯვოს

let one = new Promise(resolve => setTimeout(() => resolve('One'), 4000))
let two = new Promise(resolve => setTimeout(() => resolve('Two'), 2000))
let three = new Promise(resolve => setTimeout(() => resolve('Three'), 3000))

Promise.race([one, two, three]).then(result => console.log(result));

// To make another win, e.g., change two to 5s, one to 1s
let one2 = new Promise(resolve => setTimeout(() => resolve('One'), 1000))
let two2 = new Promise(resolve => setTimeout(() => resolve('Two'), 5000))
let three2 = new Promise(resolve => setTimeout(() => resolve('Three'), 3000))

Promise.race([one2, two2, three2]).then(result => console.log(result));

// 4)
// დაწერე კოდი სადაც:

// setTimeout შიგნით resolve ხდება Promise-ის

// 👉 3 წამში უნდა დაიბეჭდოს "Loaded!"

let loadPromise = new Promise(resolve => setTimeout(() => resolve('Loaded!'), 3000))
loadPromise.then(str => console.log(str))

// 5)
// შექმენი 2 Promise:

// პირველი resolve-ს აკეთებს "Step 1"
// მეორე resolve-ს აკეთებს "Step 2"

// 👉 გააკეთე chaining ისე, რომ:

// Step 1
// Step 2

// დაიბეჭდოს nested then-ების გარეშე (ანუ არ ჩასვა then შიგნით then)

let step1 = Promise.resolve('Step 1')
let step2 = Promise.resolve('Step 2')

step1.then(result => {
  console.log(result)
  return step2
}).then(result => console.log(result))