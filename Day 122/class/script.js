// დავალება 1 — Car კლასი

// შექმენი Car კლასი:

// properties:

// brand
// model
// year
// speed

// methods:

// drive() → დააბრუნოს "The car is moving"
// increaseSpeed(amount) → გაზარდოს speed
class Car {
    constructor(brand, model, year, speed) {
        this.brand = brand
        this.model = model
        this.year = year
        this.speed = speed
    }

    drive() {
        return 'The car is moving'
    }

    increaseSpeed(amount) {
        this.speed += amount
    }
}

let myCar = new Car("Toyota", "Camry", 2020, 0)
console.log(myCar.brand)




// დავალება 2 — Student კლასი

// შექმენი Student კლასი:

// properties:

// name
// age
// grade

// methods:

// introduce() → "Hi, my name is ..."
// isPassed() → თუ grade >= 51 → true, სხვა შემთხვევაში false

class Student {
    constructor(name, age, grade) {
        this.name = name
        this.age = age
        this.grade = grade
    }

    introduce() {
        return `Hi, my name is ${this.name}`
    }

    isPassed() {
        return this.grade >= 51
    }
}

console.log(new Student("Gio", 12, 80).introduce())


// დავალება 3 — Rectangle კლასი

// შექმენი Rectangle კლასი:

// properties:

// width
// height

// methods:

// getArea() → ფართობი
// getPerimeter() → პერიმეტრი

class rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    getPerimiter() {
        return 2 * (this.width + this.height)
    }
}

let myRectangle = new rectangle(5, 10)
console.log(myRectangle.getArea())


// დავალება 4 — BankAccount კლასი

// შექმენი BankAccount კლასი:

// properties:

// owner
// balance

// methods:

// deposit(amount) → დაამატოს თანხა
// withdraw(amount) → გამოაკლოს თანხა (თუ საკმარისია)
// getBalance() → დააბრუნოს ბალანსი

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }

    deposit(amount) {
        return this.balance += amount
    }

    withdraw(amount){
        return this.balance -= amount
    }
}

let myAccount = new BankAccount("Gio", 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
console.log(myAccount.deposit(500))
console.log(myAccount.withdraw(200))



// დავალება 5 — Phone კლასი

// შექმენი Phone კლასი:

// properties:

// brand
// model
// battery (0–100)

// methods:

// charge() → battery = 100
// use(amount) → დააკლოს battery
// თუ battery <= 0 → "Phone is dead"

class Phone {
    constructor(brand, model, battery = 100) {
        this.brand = brand
        this.model = model
        this.battery = battery
    }

    charge() {
        this.battery = 100
    }

    use(amount) {
        this.battery -= amount
        if (this.battery <= 0) {
            this.battery = 0
            return 'phone is dead'
        }
        return this.battery
    }
}

let myPhone = new Phone("Apple", "iPhone 14")
console.log(myPhone.use(30))
console.log(myPhone.use(80))
myPhone.charge()
console.log(myPhone.battery)



// დავალება 6 — Animal კლასი

// შექმენი Animal კლასი:

// properties:

// name
// type
// sound

// methods:

// makeSound() → დააბრუნოს sound
// info() → "This is a [type] named [name]"

class Animal {
    constructor(name, type, sound) {
        this.name = name
        this.type = type
        this.sound = sound
    }

    makeSound() {
        return this.sound
    }

    info() {
        return `this is a ${this.type} named ${this.name}`
    }
}
