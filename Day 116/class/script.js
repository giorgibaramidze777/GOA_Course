const obj = {
    arr: [
        {
            level: [10, 50, 100],
        },
        {
            level: [20, 40, 60],
            students: [
                {
                    name: "jemala",
                    surname: "barkalaia",
                    score: [8, 8, 10],
                },
                {
                    name: "jumbera",
                    surname: "lamazi",
                    score: [10, 7, 9],
                },
            ],
        },
    ],
};

let [, {students: 
    [{ name: name1, 
       surname: surname1, 
       score: score1 
    }, 
    {name: name2, 
    surname: surname2, 
    score: score2
    }] }] = obj.arr

let [level1, level2, level3] = obj.arr[0].level
let [level4, level5, level6] = obj.arr[1].level
// ამ სიის სრული დესტრუქცია გააკეთეეთ
console.log(name1); 
console.log(surname1);
console.log(score1);
console.log(name2);
console.log(surname2);
console.log(score2);
console.log(level1);
console.log(level2);
console.log(level3);
console.log(level4);
console.log(level5);
console.log(level6);
