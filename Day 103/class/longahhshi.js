// შექმენით რიცხვების სია. , filter-ით გაფილტრეთ ისინი კენტი რიცხვებისგან და reduce-ით დაითვალეთ მათი ჯამი.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filterNums = nums.filter(num => num % 2 !== 0)
let reduceNums = filterNums.reduce((a, b) => a + b)
console.log(reduceNums)
// შექმენით სტუდენტების ობიექტების სია, {name: "giorgi",  score:70} ბევრი ასეთი ობიექტით. map-ის გამოყენებით დაამატეთ თითოეულს status (score > 50 ? "Pass" : "Fail"). შემდეგ filter-ით დააბრუნეთ მხოლოდ ჩაჭრილები.
let students = [{name: "giorgi",  score:100}, {name: "luka",  score:-10}, {name: "andria",  score:45}, {name: "tornike",  score:100}, {name: "demna",  score:100}, {name: "jambuli",  score:85}, {name: "aleqsandre",  score:100}]
let mappedStudents = students.map(item => item.score > 50 ? score = "pass" : item = "fail")
let filteredMappedStudents = mappedStudents.filter(item => score == "pass")
console.log(filteredMappedStudents)

// while loop-ის გამოყენებით შექმენით სია 1-დან 20-მდე რიცხვებით. შემდეგ reduce-ით იპოვეთ მათი ნამრავლი.
// let list = []
// while (list.length !== 20){for (let i = 0; i < 21; i++) {
//     list.push(i)
// }}
// console.log(list)
//VERAAAAAAAAAAAAAAAAAAAAAA
// შექმენით პროდუქტების სია ობიექტებით, {name: "apple", price:50}. filter-ით დატოვეთ მხოლოდ ის პროდუქტები, რომლის ფასი > 100. შემდეგ map-ით დააბრუნეთ მხოლოდ მათი სახელები.
let products = [
    { name: "apple", price: 50 },
    { name: "pineapple", price: 110 },
    { name: "raspberry", price: 25 },
    { name: "blueberry", price: 105 },
    { name: "banana", price: 91 },
];

let filteredProducts = products.filter(item => {
    return typeof item.price === "number" && item.price > 100;
})

console.log(filteredProducts);
// შექმენით კონსტრუქტორი (brand, year). და შექმენითობიექტი car ("bmw", 2005). switch case-ის გამოყენებით year-ის მიხედვით დააბრუნეთ ტექსტი: "Old", "Modern", "New".
//vera
// შექმენით სია რიცხვებით. map-ით თითოეულ ელემენტს დაუმატეთ მისი ინდექსი. გამოიყენეთ ternary იმის შესამოწმებლად, არის თუ არა შედეგი 10-ზე მეტი.
let numss = [1, 2, 3, 5, 6, 7, 8, 9, 10]
let mappedNumss = numss.map((item, index) => item + index < 10 ? item + index : item)
console.log(mappedNumss)
// დაწერეთ კონსტრუქტორი ფუნქცია User(name, age). შექმენით რამდენიმე ობიექტი შეინახე სიაში და filter-ით დააბრუნეთ მხოლოდ სრულწლოვნები.
//veraaaa
// შექმენით ორი სია და spread operator-ით გააერთიანეთ. შემდეგ for loop-ით დაბეჭდეთ ყველა ელემენტი.
let idk = [1, 2, 3, 4, 5]
let dik = [6, 7, 8, 9, 10]
let dihh = [...idk, ...dik]
console.log(dihh)
// შექმენით ფუნქცია, რომელიც იღებს ობიექტს და destructuring + spread-ის გამოყენებით ამატებს ახალ property-ს (isActive: true).
//veeraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// შექმენით სია სიტყვებით. filter-ით დატოვეთ მხოლოდ ის სიტყვები, რომლის სიგრძე > 5. შემდეგ map-ით გადააკეთეთ ისინი დიდ ასოებად.
let words = ['dih', 'ig', 'kys', 'nigger']
let fiterWords = words.filter(item => item.length > 5)
let mapped = fiterWords.map(item => item.toUpperCase())
console.log(mapped)
// while loop-ის გამოყენებით დაითვალეთ რამდენი რიცხვია სიაში 10-ზე მეტი. გამოიყენეთ if else.

// შექმენით ობიექტების სია (name, role). switch case-ის გამოყენებით თითოეულს დაუმატეთ ხელფასი role-ის მიხედვით (map-ით).

// დაწერეთ ფუნქცია, რომელიც იღებს სიას და აბრუნებს ახალ სიას, სადაც მხოლოდ ლუწი ელემენტებია (for loop-ის გამოყენებით).

// შექმენით კონსტრუქტორი ფუნქცია Product(name, price). შექმენით რამდენიმე პროდუქტი  შეინახეთ სიაში და reduce-ით დაითვალეთ მათი საერთო ფასი.

// დაწერეთ ფუნქცია, რომელიც იღებს ობიექტს და ამოწმებს აქვს თუ არა age property (if else). თუ არ აქვს, დაამატეთ spread operator-ით age: 0.

// შექმენით მომხმარებლების სია (name, isAdmin). filter-ით გამოიტანეთ მხოლოდ ადმინები, შემდეგ map-ით დააბრუნეთ მათი სახელები.