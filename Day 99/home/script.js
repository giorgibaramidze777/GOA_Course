let nums = [1, 2, 3, 4, 5]
let newnums = nums.map((num) => {
    return num * 2;
})
console.log(newnums);

let names = ["ana", "gio", "luka"];
let newnames = names.map((name) => {
    return name.toUpperCase();
})
console.log(newnames);

let prices = [10, 20, 30];
let newprices = prices.map((num) => {
    return num + (num * 0.18);
})

console.log(newprices);

let kknums = [2, 4, 6, 8];