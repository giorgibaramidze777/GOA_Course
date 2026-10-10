// 1️⃣
// შექმენი კონსტრუქტორი Car, რომელსაც გადაეცემა:

// brand
// model
// color

// და შექმენი 2 ობიექტი new-ით.

function car(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
}
let car1 = new car("bmw", "m5", "black");
let car2 = new car("honda", "civic", "niga color");


// 2️⃣
// შექმენი კონსტრუქტორი Student, რომელსაც გადაეცემა:

// name
// age
// grade

// და შექმენი 3 სხვადასხვა სტუდენტი.

function student(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

let stud = new student('giorgi', 'barambo', '22');
let stud1 = new student('demetre', 'nagervadze', '21');
let stud2 = new student('aleqsandre', 'gorgiladze', '20');
// 3️⃣
// შექმენი კონსტრუქტორი Phone, რომელსაც გადაეცემა:

// brand
// price
// storage

// და შექმენი 2 ტელეფონის ობიექტი.

function phone(brand, price, storage) {
    this.brand = brand;
    this.price = price;
    this.storage = storage;
}

let phone1 = new phone('samsung', '1000$', '128gb');
let phone2 = new phone('iphone', '1500$', '256gb');

// 4️⃣
// შექმენი კონსტრუქტორი Animal, რომელსაც გადაეცემა:

// type
// name
// age

// და შექმენი მინიმუმ 2 ცხოველი.

function animal(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
}
let animal1 = new animal('dog', 'rex', '5');
let animal2 = new animal('cat', 'mimi', '3');


// 5️⃣ (ცოტა tricky)
// შექმენი კონსტრუქტორი User, რომელსაც გადაეცემა:

// username
// email
// isActive

// და შექმენი 2 user — ერთი isActive: true, მეორე false.
function user(username, email, isActive) {
    this.username = username;
    this.email = email;
    this.isActive = isActive;
}

let user1 = new user('giorgi', 'giorgibaramidze762@gmail.com', true);