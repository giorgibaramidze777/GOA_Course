// 1. Stack & Heap
let a = 10 // Primitive (Stack) - ინახება პირდაპირ სტეკში
let obj = { name: "Gio" } // Reference (Heap) - ობიექტი ინახება გროვაში, obj ინახავს მის მისამართს

// 2. Pass by Value vs Pass by Reference
let b = a // იქმნება a-ს დამოუკიდებელი ასლი (b = 10)
let obj2 = obj // გადაეცემა მისამართი, obj2-ის შეცვლით შეიცვლება obj-იც

// 3. Hoisting
console.log(x) // undefined (var-ის დეკლარაცია იწევს მაღლა)
var x = 5

// console.log(y); // ReferenceError (let/const არის Temporal Dead Zone-ში)
let y = 10

// 4. ES6 Module (მოდულარულობა)
// export const add = (n1, n2) => n1 + n2; // ფაილში math.js
// import { add } from './math.js'; // გამოიყენება სხვა ფაილში

// 5. React / Virtual DOM-ის იდეა
const Header = ({ title }) => {
  // კომპონენტი - UI-ს განმეორებადი ნაწილი (JSX)
  return <h1>{title}</h1>
};