let arr = [3, 4, 5]
let newarr = [1, 2, ...arr]
console.log(newarr);

//2
let obj1 = {
    name: 'elgudja',
    surname: 'dddadze',
    age: 52000,
    height: "6'8",    
}

let obj2 = {EyeColor : 'blue', ...obj1}

//3
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let [a, b, c, d, e, f, g, h, i, j, ...rest] = arr1
console.log(a, b, c, d, e, f, g, h, i, j);
console.log(rest);

// 4
let obj3 = {
    sgr: 'kys(keep yourslef safe/keep your smile)',
    title: 'Learning',
    items: ['javascript', 'react', 'node']
}

let { id, title, items: [first, second, third] } = obj3
console.log(id, title, first, second, third);

// done