// 1) შექმენი try/catch ბლოკი სადაც ცვლადს მინიჭების შემდეგ შეცვლი const-ს მნიშვნელობას და catch-ში გამოიტანე ერორის message.
try {
    const x = 5;
    x = 10;
} catch (error) {
    console.log(error.message);
}
// 2) try ბლოკში სცადე JSON.parse() არასწორი string-ის (მაგ: "{name: 'nika'}") და catch-ში გამოიტანე "Invalid JSON".
try {
    JSON.parse("{name: 'nika'}");
} catch (error) {
    console.log("Invalid JSON");
}
// 3) შექმენი ფუნქცია divide(a, b), რომელიც try/catch-ს იყენებს:
//    - თუ b = 0, throw ახალი Error("Cannot divide by zero")
//    - catch-ში გამოიტანე error.message
function divide(a, b) {
    try {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    } catch (error) {
        console.log(error.message);
    }
}
divide(10, 0);
// 4) try ბლოკში მიმართე ობიექტის property-ს რომელიც არ არსებობს (მაგ: obj.name როცა obj = null)
//    - catch-ში დაბეჭდე "Property error"
try {
    const obj = null;
    obj.name;
} catch (error) {
    console.log("Property error");
}
// 5) შექმენი მასივი და try ბლოკში სცადე ისეთი index-ის აღება რომელიც არ არსებობს და შემდეგ მასზე .toUpperCase() გამოძახება
//    - catch-ში გამოიტანე "Out of bounds or invalid operation"
try {
    const arr = ["hello"];
    arr[5].toUpperCase();
} catch (error) {
    console.log("Out of bounds or invalid operation");
}