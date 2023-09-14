// Classes and constructors
// Classes are prototypes for building objects.

class Greeting {
    constructor(name) {
        this.name = name
    }

    playGreeting() {
        console.log(`Hello to you, ${this.name}`)
    }

    getPrototype() {
        console.log(Object.getPrototypeOf(this))
    }
}

class Goodbye extends Greeting {
    playGreeting() {
        // super.playGreeting();
        console.log(`Goodbye to you, ${this.name}`)
    }
}

function main() {
    let greeting = new Greeting('Logan')
    greeting.playGreeting()
    greeting.getPrototype()

    let goodbye = new Goodbye('Logan')
    goodbye.playGreeting()
}
main()

/*
Task:
1. Create a new class called 'Computer' which takes 3 parameters:
    make, model, price.
2. Create a method which logs out a phrase summarising the object.
   For example: This Apple Macbook cost $1800.
3. Create a new instance of Computer passing in the details for
   whatever computer you are working on right now.
*/
class Computer {
    constructor(make, model, price) {
        this.make = make
        this.model = model
        this.price = price
    }

    summarize() {
        console.log(`This ${this.make} ${this.model} costs $${this.price}`)
    }
}

class Laptop extends Computer {
    constructor(make, model, price, screenSize) {
        super(make, model, price)
        this.screenSize = screenSize
    }

    summarize() {
        console.log(
            `This ${this.make} ${this.model} ${this.screenSize}\" costs $${this.price}`
        )
    }
}

let myComputer = new Computer('Apple', 'Mac Mini M1', 1_200)
myComputer.summarize()
let myLaptop = new Laptop('Apple', 'Macbook Pro M1', 1_700, 17)
myLaptop.summarize()

class Book {
    constructor(title, author, isInStock) {
        this.title = title
        this.author = author
        this.isInStock = isInStock
    }
    toggleIsInStock() {
        this.isInStock = !this.isInStock
    }
    getPrototype() {
        console.log(Object.getPrototypeOf(this))
    }
}

class RareBook extends Book {
    constructor(title, author, isInStock, location, isVerified) {
        super(title, author, isInStock)
        this.location = location
        this.isVerified = isVerified
    }
    getLocation() {
        console.log(this.location)
    }
    toggleIsVerified() {
        this.isVerified = !this.isVerified
        if (this.isVerified) {
            console.log(
                `${this.title} has been verified by an independent expert.`
            )
        } else {
            console.log(
                `${this.title} has not been verified by an independent expert.`
            )
        }
    }
    toggleIsInStock() {
        // Calling super class method works!
        super.toggleIsInStock()
        if (this.isInStock) {
            console.log(`${this.title} is in stock.`)
        } else {
            console.log(`${this.title} is not in stock.`)
        }
    }
}

const book3 = new RareBook(
    'Romeo and Juliet',
    'William Shakespeare',
    false,
    'London',
    false
)
book3.toggleIsInStock()

/*
Task:
    1. Extend the 'Book' class with a class called 'BestSeller'.
    2. Give it a 'numberSold' parameter and assign that
       parameter to 'this'.
    3. Add a method which increases the 'numberSold' by
       an integer it takes in when it is called.
    4. If the 'toggleIsInStock' method is called, it should
       log out whether or not the book is in stock and the
       number of copies sold.
*/
class BestSeller extends Book {
    constructor(title, author, isInStock, numberSold) {
        super(title, author, isInStock)
        this.numberSold = numberSold
    }

    // This works too using different syntax (typically for anonymous function) as a test.
    // increaseNumberSold = function (count) {
    //     this.numberSold += 1;
    //     console.log(`Number Sold: ${this.numberSold}`)
    // };

    increaseNumberSold(count) {
        this.numberSold += count
        this.title = 'Hi'
        console.log(
            `Book in Stock: ${this.isInStock}`,
            `Number Sold: ${this.numberSold}`
        )
    }
}

let myBestSellerBook = new BestSeller('', '', true, 100)
myBestSellerBook.increaseNumberSold(10)

// -------------------------------

class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color
        this.energy = energy
    }
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if (this.energy == 0) {
            this.sleep()
        }
    }
    sleep() {
        this.energy += 20
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(
        sound = 'purr',
        canJumpHigh = true,
        canClimbTrees = true,
        color,
        energy
    ) {
        super(color, energy)
        this.sound = sound
        this.canClimbTrees = canClimbTrees
        this.canJumpHigh = canJumpHigh
    }
    makeSound() {
        console.log(this.sound)
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy)
        this.sound = sound
        this.canFly = canFly
    }
    makeSound() {
        console.log(this.sound)
    }
}

class HouseCat extends Cat {
    constructor(
        houseCatSound = 'meow',
        sound,
        canJumpHigh,
        canClimbTrees,
        color,
        energy
    ) {
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.houseCatSound = houseCatSound
    }
    makeSound(option) {
        if (option) {
            super.makeSound()
        }
        console.log(this.houseCatSound)
    }
}

class Tiger extends Cat {
    constructor(
        tigerSound = 'Roar!',
        sound,
        canJumpHigh,
        canClimbTrees,
        color,
        energy
    ) {
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound = tigerSound
    }
    makeSound(option) {
        if (option) {
            super.makeSound()
        }
        console.log(this.tigerSound)
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy)
        this.canTalk = canTalk
    }
    makeSound(option) {
        if (option) {
            super.makeSound()
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!")
        }
    }
}

var fiji = new Parrot(false) // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true) // we're passing `true` to the constructor so that polly can talk

fiji.makeSound() // undefined
fiji.makeSound(true) // chirp

polly.makeSound() // I'm a talking parrot!
polly.makeSound(true) // chirp, I'm a talking parrot!

polly.color // yellow
polly.energy // 100

polly.isActive() // Energy is decreasing, currently at: 80

var penguin = new Bird('shriek', false, 'black and white', 200) // setting all the custom properties
penguin // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound // 'shriek'
penguin.canFly // false
penguin.color // 'black and white'
penguin.energy // 200
penguin.isActive() // Energy is decreasing, currently at: 180

var leo = new HouseCat()

// leo, no purring please:
leo.makeSound(false) // meow
// leo, both purr and meow now:
leo.makeSound(true) // purr, meow

var cuddles = new Tiger()
cuddles.makeSound(false) // Roar!
cuddles.makeSound(true) // purr, Roar!
