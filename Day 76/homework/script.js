// 1
let insect = {
    name: 'ant',
    color: 'black',
    legs: 6,
    makeSound: function() {
        console.log('buzzzz');
    }
}

// 2

let bird = {
    name: 'parrot',
    color: 'green', 
    legs: 2,
    makeSound: function() {
        console.log('krr krr');
    }
}

// 3
let smartWatch = {
    brand: 'Apple',
    color: 'black',
    size: 'medium',
    features: ['heart rate monitor', 'GPS', 'water resistant'],
    blabla: function() {
        console.log('*farts*');
    }
}
smartWatch.blabla()