// 1) მასივი + rest

// პირობა: აიღე პირველი 2 ელემენტი ცალკე, დანარჩენი ჩასვი rest მასივში. დაბეჭდე ყველაფერი.
let numbers = [10, 20, 30, 40, 50];
let [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);
// 2) ობიექტი + rest

// პირობა: აიღე ერთი თვისება ცალკე, დანარჩენი ჩასვი restObj ობიექტში. დაბეჭდე ორივე.
let person = { name: "john", age: 30, city: "tbilisi" };
let {name, ...rest1} = person;

console.log(name);
console.log(rest1);
// 3) ფუნქცია + rest

// პირობა: შექმენი ფუნქცია, რომელიც მიიღებს რამდენი რიცხვსაც ჩაუშვებს მომხმარებელი, ჩასვამს მათ rest მასივში და დაბეჭდავს.
let printNumbers = ([...rest]) => {
    console.log(rest);
};

printNumbers([1, 2, 3, 4, 5]);
// 4) გამრავლება + rest

// პირობა: შექმენი ფუნქცია, რომელიც იღებს რამდენი რიცხვსაც მომხმარებელი ჩაუშვებს, ჩასვამს მათ მასივში და გამრავლებს ერთმანეთზე.
let multiplyNumbers = (...nums) => {
    let product = 1;
    for (let num of nums) {
        product *= num;
    }
    console.log(product);
};

multiplyNumbers(2, 3, 4, 5);
// 5) ობიექტი + ფუნქცია + rest

// პირობა: შექმენი ფუნქცია, რომელიც იღებს ობიექტს, ერთ თვისებას ცალკე გამოიტან და დანარჩენს ჩასვამს ახალ ობიექტში. დაბეჭდე ორივე ნაწილი.
let processObject = (obj) => {
    let {name, ...restObj} = obj;
    console.log(name);
    console.log(restObj);
};

let person2 = {
    name: "john", 
    age: 30, 
    city: "tbilisi" 
};
processObject(person2);