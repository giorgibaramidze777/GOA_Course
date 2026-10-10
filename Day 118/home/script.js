// პირობა: აიღე პირველი ელემენტი ცალკე და დანარჩენი ჩასვი rest მასივში. დაბეჭდე ორივე.
let arr = [1, 2, 3, 4, 5];
let [first, ...rest] = arr;
console.log(first);
console.log(rest);
// 2) მასივი (გამოტოვება)

// პირობა: მასივიდან აიღე მხოლოდ მეორე და მესამე ელემენტი, დანარჩენი ჩასვი rest-ში.
let [second, third, ...rest1] = arr;
console.log(second);
console.log(third);
console.log(rest1);
// 3) ობიექტი (ორი თვისება)

// პირობა: ობიექტიდან აიღე ორი კონკრეტული თვისება ცალკე, დანარჩენი ჩასვი restObj-ში.
let obj = {
    name: 'john', 
    age: 30, 
    city: 'tbilisi', 
    country: 'georgia' };
let { name, age, ...rest2 } = obj;
console.log(name);
console.log(age);
console.log(rest2);
// 4) ფუნქცია (დათვლა)

// პირობა: შექმენი ფუნქცია, რომელიც იღებს რამდენი რიცხვსაც ჩაუშვებ და აბრუნებს რამდენი რიცხვი მიიღო (სიგრძე).
function countNumbers(...numbers) {
    return numbers.length;
}

console.log(countNumbers(1, 2, 3, 4, 5));
// 5) ფუნქცია (ჯამი)

// პირობა: შექმენი ფუნქცია, რომელიც იღებს რამდენი რიცხვსაც ჩაუშვებ და აბრუნებს მათ ჯამს.
function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num);
}

console.log(sumNumbers(1, 2, 3, 4, 5));