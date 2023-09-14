// Object-Oriented Programming (OOP)

// Encapsulation
let shoePurchase = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function () {
        return this.shoes * this.stateTax
    },
}
console.log(shoePurchase.totalPrice())

// Inheritance, abstraction, polymorphism
class Bird {
    useWings() {
        console.log('Flying!')
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log('Barely flapping!')
    }
}
class Penguin extends Bird {
    useWings() {
        console.log('Diving!')
    }
}
let baldEagle = new Eagle()
let kingPenguin = new Penguin()
baldEagle.useWings() // "Flying! Barely flapping!"
kingPenguin.useWings() // "Diving!"
