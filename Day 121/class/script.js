// 📘 თეორიული დავალებები (7)
// 1.

// რა არის Promise? დაწერე შენი სიტყვებით და მოიყვანე მაგალითი რეალური ცხოვრებიდან.

// დაპირება, რომელიც შეიძლება შესრულდეს ან არ შესრულდეს მომავალში.


// 2.

// რა განსხვავებაა:

// resolve
// reject

// როდის გამოიყენება თითოეული?

// resolve - როცა ოპერაცია წარმატებით სრულდება და გვინდა შედეგის დაბრუნება.
// reject - როცა ოპერაცია წარუმატებლად სრულდება და გვინდა შეცდომის დაბრუნება.


// 3.

// ჩამოთვალე Promise-ის 3 მდგომარეობა და ახსენი:

// pending
// fulfilled
// rejected

// pending - დაპირება ჯერ არ შესრულებულა და არც უარყოფილა.
// fulfilled - დაპირება შესრულდა და შედეგი ხელმისაწვდომია.
// rejected - დაპირება უარყოფილია და შეცდომა ხელმისაწვდომია.


// 4.

// რა არის PromiseResult?
// სად ინახება resolve / reject მნიშვნელობა?

// PromiseResult არის მნიშვნელობა, რომელიც გადაეცემა .then() ან .catch() ფუნქციას, როდესაც Promise შესრულდება (resolve) ან უარყოფილი იქნება (reject).
// resolve მნიშვნელობა ინახება .then()-ში, ხოლო reject მნიშვნელობა ინახება .catch()-ში. 


// 5.

// რა განსხვავებაა:

// .then()
// .catch()

// .then() - გამოიყენება Promise-ის წარმატებით შესრულების შემთხვევაში შედეგის მიღებისთვის.
// .catch() - გამოიყენება Promise-ის უარყოფის შემთხვევაში შეცდომის მიღებისთვის.

// 6.

// რა მოხდება თუ Promise-ში:

// არც resolve გამოიძახე
// არც reject

// Promise დარჩება pending მდგომარეობაში და არც შესრულდება და არც უარყოფილი იქნება, რაც შეიძლება გამოიწვიოს გაუთავებელი ლოდინი.

// 7.

// შეიძლება თუ არა .then()-ის გამოყენება ჩვეულებრივ ფუნქციაზე (რომელიც Promise არ აბრუნებს)?
// რატომ?


// არა, რადგან .then() გამოიყენება მხოლოდ Promise ობიექტებზე, რომლებიც ასინქრონული ოპერაციების შედეგებს წარმოადგენენ. ჩვეულებრივი ფუნქცია, რომელიც Promise არ აბრუნებს, არ იქნება ასინქრონული და შესაბამისად .then() არ იქნება შესაბამისი.




// 💻 პრაქტიკული დავალებები (7)

// 1. (საწყისი)

// შექმენი Promise, რომელიც:

// 2 წამში resolve-ს აბრუნებს "Hello World"

// 👉 hint: setTimeout

setTimeout(() => {
    let promise = new Promise((resolve, reject) => {
        resolve("Hello World")
    });
    promise.then(result => console.log(result))
}, 2000);


// 2.

// შექმენი Promise, რომელიც:

// იღებს რიცხვს
// თუ ლუწია → resolve "Even"
// თუ კენტია → reject "Odd"

let promise = new Promise((resolve, reject) => {
    let number = 5
    if (number % 2 === 0) {
        resolve("Even")
    } else {
        reject("Odd")
    }
})


// 3.

// შექმენი Promise:

// რომელიც ამოწმებს პაროლს
// თუ "1234" → resolve "Access granted"
// სხვა შემთხვევაში → reject "Access denied"

let passwordPromise = new Promise((resolve, reject) => {
    let password = "1234"
    if (password === "1234") {
        resolve("Access granted")
    } else {
        reject("Access denied")
    }   
})


// 4.

// შექმენი Promise:

// რომელიც აბრუნებს user ობიექტს
// .then()-ში დაბეჭდე მხოლოდ name

let userPromise = new Promise((resolve, reject) => {
    let user = {
        name: "gio",
        age: 12
    }
    resolve(user)
})

userPromise.then(user => console.log(user.name))


// 5.

// გააკეთე Promise chain:

// resolve(5)

// შემდეგ:

// გაამრავლე 2-ზე
// დაამატე 10
// დაბეჭდე შედეგი

// 👉 გამოიყენე რამდენიმე .then()

let chainPromise = new Promise((resolve, reject) => {
    resolve(5)
})

chainPromise
    .then(result => result * 2)
    .then(result => result + 10)
    .then(result => console.log(result))    



// 6.

// შექმენი Promise:

// 50% შანსით resolve
// 50% შანსით reject

// 👉 hint: Math.random()

let randomPromise = new Promise((resolve, reject) => {
    let randomNumber = Math.random()
    if (randomNumber < 0.5) {
        resolve("Resolved")
    } else {
        reject("Rejected")
    }
})

// 7. (advanced 🔥)

// შექმენი ფუნქცია:

// function checkUser(age)

// რომელიც აბრუნებს Promise-ს:

// თუ age >= 18 → resolve "Adult"
// თუ age < 18 → reject "Minor"

// 👉 გამოიძახე და დაამატე .then() და .catch()

function checkUser(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Adult")
        } else {
            reject("Minor")
        }
})}