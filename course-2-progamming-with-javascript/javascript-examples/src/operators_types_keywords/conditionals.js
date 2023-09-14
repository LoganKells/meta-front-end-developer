/*
Task 1: using if-else statements

Imagine you're creating an app for a movie theater. The app will be for the people who
work in the theater's box office, and it will help them to figure out how much money
customers should pay for their movie tickets. The movie theater has a variable pricing
system that works as follows:

    - If the customer is 65 or older, they get a senior discount and pay $7.
    - If the customer is between the ages of 14 and 24, they get a student discount
      and pay $6.
    - If the customer is under the age of 14, they get a child discount and pay $5.
    - If the customer is an adult between the ages of 25 and 64, they pay a normal
      price of $10.
    - If the customer is a Movie Club member, they pay $0.

    1. Write a series of if-else statements that check the values of the variables
       below and console.log the appropriate price.
    2. Set up the statements so that if an invalid age is provided (such as a string
       of text characters), the message "Invalid input" is returned in the console.
    3. Go through each one of the test cases below and check if you get the correct
       output in the console.

    Hints:
    - The syntax for checking if a number is "greater than or equal to" another number
      is >=
    - The syntax for "lesser than or equal to"  is <=
    - To check multiple conditions at the same time, you can use the && operator.
    - Remember that an output like "$7" is a string, not a number, so it needs quotes.
    - Think carefully about the logic of the order of your if-else statements. The order
      in which you should write them is not necessarily the order in which the system is
      described above.
*/

var customerAge = 10
var movieClubMember = true

/* Test cases */
//customerAge= 41; // expected result: $10
//customerAge = 20; // expected result: $6
//customerAge = "x"; // expected result: Invalid input.
//customerAge = 9; // expected result: $5
//customerAge = 68; // expected result: $7
//movieClubMember = true; // expected result: $0

/* Recap of conditions and results:
    65+: $7
    14-24: $6
    Under 14: $5
    25-64: $10
    Club member: $0
    Invalid customerAge: "invalid input"
*/

/* Write your code below here. */
if (movieClubMember) {
    console.log(0)
} else {
    if (customerAge >= 65) {
        console.log(7)
    } else if (customerAge >= 14 && customerAge <= 24) {
        console.log(6)
    } else if (customerAge < 14) {
        console.log(5)
    } else if (customerAge >= 25 && customerAge <= 64) {
        console.log(10)
    } else {
        console.log('invalid input')
    }
}
