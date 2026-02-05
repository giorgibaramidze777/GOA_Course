// 1)შექმენით სია რიცხვებით. გადამაოეთ და ყველა რიცხვი გაანახევრეთ ( გაყავით ორზე )
let arr1 = [1, 2, 3, 4, 5]
arr1 = arr1.map((num) => {
    return num / 2;
})
console.log(arr1);
// 2)შექმენით  სია სახელებით, გადამაპეთ და მათი სიგრძეები დააბრუნეთ
let arr2 = ['giorgi', 'nino', 'ana', 'luka', 'mari'];
arr2 = arr2.map((name) => {
    return name.length;
})
console.log(arr2);
// 3)შექმენით სია,  სახელებით, და მათი სიგრძე გამრაავლებული მათ ინდექსზე დააბრუნეთ
let arr3 = ['giorgi', 'nino', 'ana', 'luka', 'mari'];
arr3 = arr3.map((name, index) => {
    return name.length * index;
})