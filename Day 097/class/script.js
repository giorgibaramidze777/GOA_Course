function Car(model, color, year) {
    this.model = model;      
    this.color = color;      
    this.year = year;         
    this.statuss = 'working';  
}

let car1 = new Car('BMW X5', 'Black', 2020);
let car2 = new Car('Audi A4', 'White', 2018);
let car3 = new Car('Mercedes C200', 'Silver', 2021);
let car4 = new Car('Toyota Corolla', 'Blue', 2019);
let car5 = new Car('Honda Civic', 'Red', 2022);

console.log(car1.getInfo());
console.log(car3.getInfo());

//Nested object არის ობიექტი, რომელიც სხვა ობიექტში არის ჩასმული მაგ:
let car = {
    model: 'BMW X5',
    engine: {
        type: 'V8',
        horsepower: 400
    },
    color: 'Black'
};

console.log(car.engine.type);



// of gamoiyeneba masivebze da sxva itereble obiektebze. in gamoiyeneba obiektebze, rom misi mnishveneloba aviღot  

// 2
function func1(name, age) {
    return `my name is ${name} and i am ${age} y/o`;
}

let func2 = function(name, age) {
    return `my name is ${name} and i am ${age} y/o`;
}

let func3 = (name, age) => {
    return `my name is ${name} and i am ${age} y/o`;
}