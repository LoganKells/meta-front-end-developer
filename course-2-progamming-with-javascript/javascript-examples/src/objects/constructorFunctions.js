// Constructors even work independently of a class.

function Furniture(type, price, deliveryCharge){
    this.type = type;
    this.price = price;
    this.deliveryCharge = deliveryCharge;
    // console.log(this)

    this.summarize = function () {
        console.log(`${this.type} costs ${this.price} with delivery cost of ${this.deliveryCharge}`);
    }
}

const furnitureItem1 = new Furniture('chair', 500, 25);
const furnitureItem2 = new Furniture('sofa', 800, 55);
furnitureItem1.summarize();
furnitureItem2.summarize();

/*
Task:
    1. Write a constructor function called 'Attraction' that
       creates objects with details of a tourist attraction
       (name, price, description).
    2. Add a method to that constructor which summarises the
       attraction.

    When calling that method, you should get something like this:

    'Disneyland is a world famous theme park with hundreds of rides
    and activities. It costs $60 to enter.'
*/
function Attraction(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;

    this.summarize = function() {
        console.log(`${this.name} is ${this.description}. The cost is $${this.price}.`);
    }
}

let disney = new Attraction("Disney", 60, "a world famous theme park with hundreds of rides and activities")
disney.summarize();