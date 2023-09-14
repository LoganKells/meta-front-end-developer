/*

Task 1: Working with if-else statements and loops

    Imagine you're creating a wedding planning app. Someone is using the app
    to help them plan the seating arrangements for a wedding reception. As
    part of those arrangements, the user wants the placemats at the tables to
    match the theme colors of the wedding, which are white, pink, and blue. There
    are 10 placemats at each table. They want the first and last placemats
    at each table to be white, and they want the rest of the placemats to
    alternate between pink and blue.

    1. Using a for loop and if-else conditional statements, console.log
       the colors and their corresponding placemat numbers.
    2. Check that your results appear as follows:

        Placemat 1: white
        Placemat 2: pink
        Placemat 3: blue
        Placemat 4: pink
        Placemat 5: blue
        Placemat 6: pink
        Placemat 7: blue
        Placemat 8: pink
        Placemat 9: blue
        Placemat 10: white

    Hint: You can use an operator you learned earlier in the course to
    check if a number is odd or even!
*/
function exampleLoop1() {
    for (let i = 1; i <= 10; i++) {
        let color
        if (i === 1 || i === 10) {
            color = 'white'
        } else if (i % 2 === 0) {
            color = 'pink'
        } else {
            color = 'blue'
        }
        console.log(`Placemat ${i}: ${color}`)
    }
}

/*

Task 2: Working with switch statements and loops

    Imagine you're creating a racing video game, and you need to display
    the results of each race. There are 8 racers and therefore 8 places
    in each race. The places need to be displayed as abbreviated
    ordinal numbers — 1st, 2nd, 3rd, 4th, etc.

    1. Using a for loop and a switch statement, console.log
       the places with abbreviated ordinal numbers from 1 to 8.
    2. Check that your results appear as follow:

        1st place
        2nd place
        3rd place
        4th place
        5th place
        6th place
        7th place
        8th place
  */
function exampleLoop2() {
    for (let i = 1; i <= 8; i++) {
        let syntax
        switch (i) {
            case 1:
                syntax = 'st'
                break
            case 2:
                syntax = 'nd'
                break
            case 3:
                syntax = 'rd'
                break
            default:
                syntax = 'th'
                break
        }
        console.log(`${i}${syntax} place`)
    }
}

// Call function examples.
// exampleLoop1();
exampleLoop2()
