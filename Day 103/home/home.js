// while loop-ის გამოყენებით დაითვალეთ რამდენი რიცხვია სიაში 10-ზე მეტი. გამოიყენეთ if else.
let numbersArray = [4, 12, 7, 25, 9, 18, 3, 11];
let count = 0;
let index = 0;

while (index < numbersArray.length) {
  if (numbersArray[index] > 10) {
    count++;
  } else {
    // არაფერს ვშვებით, უბრალოდ ვაგრძელებთ
  }
  index++;
}
console.log("10-ზე მეტი რიცხვების რაოდენობა:", count);

// შექმენით ობიექტების სია (name, role). switch case-ის გამოყენებით თითოეულს დაუმატეთ ხელფასი role-ის მიხედვით (map-ით).
let employees = [
  { name: "Giga", role: "developer" },
  { name: "Sopho", role: "designer" },
  { name: "Davit", role: "manager" },
  { name: "Mari", role: "intern" }
];

let salariedEmployees = employees.map(emp => {
  let salary;
  switch (emp.role) {
    case "developer":
      salary = 3000;
      break;
    case "designer":
      salary = 2000;
      break;
    case "manager":
      salary = 4000;
      break;
    default:
      salary = 800;
  }
  return { ...emp, salary: salary };
});

console.log(salariedEmployees);

// დაწერეთ ფუნქცია, რომელიც იღებს სიას და აბრუნებს ახალ სიას, სადაც მხოლოდ ლუწი ელემენტებია (for loop-ის გამოყენებით).
function getEvenNumbers(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// შექმენით კონსტრუქტორი ფუნქცია Product(name, price). შექმენით რამდენიმე პროდუქტი შეინახეთ სიაში და reduce-ით დაითვალეთ მათი საერთო ფასი.
function Product(name, price) {
  this.name = name;
  this.price = price;
}

let cart = [
  new Product("Phone", 1200),
  new Product("Headphones", 150),
  new Product("Mouse", 50)
];

let totalPrice = cart.reduce((total, prod) => total + prod.price, 0);
console.log("საერთო ფასი:", totalPrice);

// დაწერეთ ფუნქცია, რომელიც იღებს ობიექტს და ამოწმებს აქვს თუ არა age property (if else). თუ არ აქვს, დაამატეთ spread operator-ით age: 0.
function ensureAge(obj) {
  if ("age" in obj) {
    return obj;
  } else {
    return { ...obj, age: 0 };
  }
}

console.log(ensureAge({ name: "Nika" }));
console.log(ensureAge({ name: "Anna", age: 25 }));

// შექმენით მომხმარებლების სია (name, isAdmin). filter-ით გამოიტანეთ მხოლოდ ადმინები, შემდეგ map-ით დააბრუნეთ მათი სახელები.
let usersList = [
  { name: "Gio", isAdmin: true },
  { name: "Luka", isAdmin: false },
  { name: "Mery", isAdmin: true },
  { name: "Saba", isAdmin: false }
];

let adminNames = usersList
  .filter(user => user.isAdmin)
  .map(user => user.name);

console.log(adminNames);