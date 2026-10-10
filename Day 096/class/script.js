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

//როცა ვუწერთ ახალ ცვლადს ძველი ცვლადის სახელს, იქ ინახება გზა ძველ ცვლადში და spread ით ვაკოპირებთ და არ იცვლება ახალი როცა ვცლით ძველს