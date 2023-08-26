let hotel = {};

hotel.name = "The Grand";
hotel.price = 200;
hotel.stars = 5;
hotel.isFull = false;
hotel.isOpen = true;
console.log(hotel);

// Creating object methods
hotel.summarizeHotel = function() {
    console.log(`${this.name} is a ${this.stars} star hotel.`)
}
hotel.summarizeHotel();

/*
Task:
    1. Add a new method to the object called 'hotelClosed'.
    2. When called, this new method should log out the phrase 'I'm sorry,
       the hotel is currently closed.'
    3. Call the method to check it works.
*/

hotel.hotelClosed = function() {
    this.isOpen = false;
    console.log(`The hotel is ${this.isOpen}`);
}
hotel.hotelClosed();