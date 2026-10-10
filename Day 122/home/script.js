// დავალება 1 — Book კლასი

// შექმენი Book კლასი:

// properties:

// title
// author
// pages
// isRead (true/false)

// methods:

// read() → isRead = true
// getSummary() → "Title by Author, X pages"
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title
        this.author = author
        this.pages = pages
    }
    read() {
        this.isRead = true
    }
    getSummary() {
        return `${this.title} by ${this.author}, ${this.pages} pages`
    }
}



// დავალება 2 — Laptop კლასი

// შექმენი Laptop კლასი:

// properties:

// brand
// ram (GB)
// storage (GB)
// isOn (true/false)

// methods:

// turnOn() → isOn = true
// turnOff() → isOn = false
// upgradeRam(amount) → გაზარდოს ram

class Laptop {
    constructor(brand, ram, storage, isOn) {
        this.brand = brand
        this.ram = ram
        this.storage = storage
    }
    turnOn() {
        this.isOn = true
    }
    turnOff() {
        this.isOn = false
    }
    upgradeRam(amount) {
        this.ram += amount
    }
}

// დავალება 3 — Player კლასი (game style)

// შექმენი Player კლასი:

// properties:

// username
// health (0–100)
// level

// methods:

// takeDamage(amount) → health შემცირდეს
// heal(amount) → health გაიზარდოს (max 100)
// levelUp() → level +1

class Player {
    constructor(username, health, level) {
        this.username = username
        this.health = health
        this.level = level
    }
    takeDamage(amount) {
        this.health -= amount
        if (this.health < 0) {
            this.health = 0
        }
    }
    heal(amount) {
        this.health += amount
        if (this.health > 100) {
            this.health = 100
        }
    }
    levelUp() {
        this.level += 1
    }
}


// დავალება 4 — ShoppingCart კლასი

// შექმენი ShoppingCart კლასი:

// properties:

// items (array)

// methods:

// addItem(item) → დაამატოს item
// removeItem(item) → წაშალოს item
// getTotalItems() → items.length

// 💡 ბონუსი: თითო item იყოს object { name, price }

class ShoppingCart {
    constructor(items) {
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
    }
    removeItem(item) {
        this.items = this.items.filter(dd => dd.name !== item.name)
    }
    
    getTotalItems() {
        return this.items.length
    }
}

// დავალება 5 — Timer კლასი

// შექმენი Timer კლასი:

// properties:

// time (seconds)

// methods:

// start() → დაბეჭდოს countdown (console.log)
// stop() → გააჩეროს
// reset() → time = 0

// 💡 მინიშნება: გამოიყენე setInterval

class Timer {
    constructor(time) {
        this.time = time
    }
    start() {
        let interval = setInterval(() => {
            if (this.time > 0) {
                console.log(this.time)
                this.time--
            } else {
                console.log("Time's up!")
                clearInterval(interval)
            }
        }, 1000)
    }   
    stop() {
        clearInterval(this.interval)
    }
    reset() {
        this.time = 0
    }
}