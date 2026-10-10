// 1) ES6 არის JS-ის თანამედროვე სტანდარტი, 
// რომელიც დაამატა ახალი ფიჩები: let, const, arrow functions, classes, promises და სხვა

// 2) კონსტრუქტორი არის ფუნქცია, რომელიც გამოიყენება ობიექტების შესაქმნელად და მათი თვისებების ინიციალიზებისთვის

// 3)
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const car1 = new Car("BMW", "X5", 2020);
const car2 = new Car("Mercedes", "C-Class", 2021);
const car3 = new Car("Audi", "A4", 2019);
const car4 = new Car("Tesla", "Model 3", 2022);
const car5 = new Car("Toyota", "Camry", 2020);
const car6 = new Car("Honda", "Civic", 2021);
const car7 = new Car("Volkswagen", "Golf", 2019);
const car8 = new Car("Ford", "Mustang", 2022);
const car9 = new Car("Chevrolet", "Corvette", 2020);
const car10 = new Car("Porsche", "911", 2021);

// 4) for...in - ჩამოთვლის ობიექტის კლავიშებს (property names)
//    for...of - ჩამოთვლის iterable-ის მნიშვნელობებს (array, string, etc)
const obj = {a: 1, b: 2};
for (let i in obj) console.log(i); // a, b
for (let a of [1, 2, 3]) console.log(a); // 1, 2, 3

// 5) კვადრატში აყვანის სამი ფუნქცია:
// default function
function square(n) {
    return n * n;
}

// function expression
const squareExpr = function(n) {
    return n * n;
};

// arrow function
const squareArrow = (n) => n * n;

// 6) ES6 for...of loop
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}