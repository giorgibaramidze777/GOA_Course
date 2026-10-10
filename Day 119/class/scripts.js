// 1.
// დაწერე კოდი სადაც const ცვლადს უცვლი მნიშვნელობას (როგორც შენ მაგალითში).
// დაიჭირე ერორი catch-ით და გამოიტანე e.message.
const nn = "luka";
try {
    nn = "giorgi"; 
} catch (e) {
    console.log(e.message); 
}
// 2.
// შექმენი ცვლადი name = "Luka"
// შემდეგ სცადე name() (როგორც ფუნქცია).
// დაიჭირე ერორი და გამოიტანე ტექსტი: "ეს ფუნქცია არ არის"
let name = "Luka";
try {
    name();
} catch (e) {
    console.log("ეს ფუნქცია არ არის");
}
// 3.
// მცდარი JSON:

let data = "{ name: Luka }"

try {
    JSON.parse(data);
} catch (e) {
    console.log("არასწორი JSON");
}
// გამოიყენე JSON.parse(data) try-ში
// და catch-ში დაწერე "არასწორი JSON"


// 4.
// შექმენი მასივი:

let arr = [1, 2, 3]

// სცადე arr.toUpperCase()
// (არასწორი მეთოდია)
// დაიჭირე ერორი და გამოიტანე "არასწორი მეთოდი"
try {
    arr.toUpperCase();
} catch (e) {
    console.log("არასწორი მეთოდი");
}
// 5.
// შექმენი ფუნქცია divide(a, b)
// თუ b === 0, throw ერორი "0-ზე გაყოფა არ შეიძლება"
// და გარედან try/catch-ით დაიჭირე და დაბეჭდე მესიჯი
function divide(a, b){
    if (b === 0) {
        throw Error("0-ზე გაყოფა არ შეიძლება");
    }
}

try {
    divide(10, 0);
} catch (e) {
    console.log(e.message);
}