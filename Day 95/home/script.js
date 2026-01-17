// 1 global scope
// როცა ცვლადი არის შექმნილი ყველაფრის გარეთ გლობალურად, და შეგვიძლია მივწდეთ მას ნებისმიერ ადგილას კოდში, და ნებისმიერ scope ში. global scope ში ნებისმიერი ცვლადი არის გლობალური, არააქ მნიშვნელობა var ით იქნება თუ let ით ან const ით
// 2 function scope
// როცა ცვლადი არის შექმნილი ფუნქციის შიგნით, და მას ვერ მივწვდებით მაგ ფუნქციის გარეთ, არააქ მნიშცნელობა var ით იქნება შექმნილი თუ let ით ნ const ით
// 3 block scope
// როცა ცვლადი არის შექმნილი რაიმე კოდის ბლოკში ფუნქციის გარდა, ანუ აი ამ {} ფრჩხილებში,  და მას ვერ მივწვდებით მაგ ფრჩხილების გარეთ, ზუსტად აქ  ვლინდება განსხვავება var სა დაა let შორის, block scope ში შექმნილი var ით ცვლადი მაინც რჩება გლობალური, და ეს არის ძალიან დიდი პრობლემა, ამიტომ var აღარ გამოიყენება
// 4
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, ...rest] = arr // ბონუსად რესთი დავამატე

console.log(rest);
console.log(a5);

// 5
let obj = {
    name: 'elgudja',
    age: 21,
    city: 'dubai',
    hobby: 'football',
    millionaire: false,
    billionaire: true
}

let {name, age, city, hobby, millionaire, billionaire} = obj

console.log(hobby);
console.log(billionaire);