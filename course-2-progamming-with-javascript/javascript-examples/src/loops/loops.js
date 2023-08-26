/* Task 1: Incrementing with a for loop

Imagine you're programming an educational math app for children.
For one of the lessons, the app needs to show the children a list
of all of the numbers from 0 to 100. It then needs to show them
the message "Count complete!"

    1. Set up a for loop that will console.log all of the numbers
       from 0 to 100, in ascending order.

    2. Once the sequence of numbers is complete, console.log the
       message ("Count complete!").

The final results should be the same as if you wrote the following:
        console.log(0);
        console.log(1);
        console.log(2);
        ...etc...
        console.log(100);
        console.log("Count complete!"); */
function exampleLoop1() {
    for (var i = 0; i <= 100; i++) {
        console.log(i);
    }
    console.log("Count complete!");
}


/* Task 2: Decrementing with a for loop

Imagine you're writing the code that will control a count down
display for New Year's Eve. For the last minute of the year,
the display is supposed to count from 60 to 1. After that, it
shows the message "Happy New Year!"

    1. Set up a for loop that will console.log all of the
       numbers from 60 to 1, in descending order.

    2. Once the sequence of numbers is complete, console.log
       the message ("Happy New Year!").

The final results should be the same as if you wrote the
following:
        console.log(60);
        console.log(59);
        console.log(58);
        ...etc...
        console.log(1);
        console.log("Happy New Year!");
*/
function exampleLoop2() {
    for (var i = 60; i > 0; i--) {
        console.log(i);
    }
    console.log("Happy New Year!");
}


/* Task 3: Incrementing with a while loop

    Imagine you're creating a flight simulator, and you're
    programming the part that will control the plane's acceleration.
    Starting at a speed of 200 MPH, the plane accelerates to its
    maximum speed of 500 MPH. Your task is display the plane's speed
    as it accelerates.

    1. Set up a while loop that will console.log all of the numbers
    from 200 to 500, in ascending order.

    2. Once the sequence of numbers is complete, console.log the message
    ("Maximum speed reached!").

    The final results should be the same as if you wrote the following:

        console.log(200);
        console.log(201);
        console.log(202);
        ...etc...
        console.log(500);
        console.log("Maximum speed reached!");
*/
function exampleLoop3() {
    var i = 200;
    while (i <= 500) {
        console.log(i);
        i++;
    }
    console.log("Maximum speed reached!");
}


/* Task 4: Decrementing with a while loop

    Imagine you're creating a calendar app, and it needs to count down
    the number of days until the new year. The day is currently January
    1, and it's a non-leap year, so it will need to count down from 365
    to 1.

    1. Set up a while loop that will console.log all of the numbers from
    365 to 1, in descending order.

    2. Once the sequence of numbers is complete, console.log the message
    ("The year is over!").

    The final results should be the same as if you wrote the following:

        console.log(365);
        console.log(364);
        console.log(363);
        ...etc...
        console.log(1);
        console.log("The year is over!");
*/
function exampleLoop4() {
    var i = 365;
    while(i >= 1) {
        console.log(i);
        i--;
    }
    console.log("The year is over!")
}


let currentYear = 1982;
/* Task 5: Using a while loop with an already-declared variable.

    Imagine you're creating a life simulator game. In the game, the player
    watches in fast-motion as a character grows up from a baby to an adult,
    following them from birth to the present day. For this task, imagine the
    character was born in 1982. You need to keep track  of every year she has
    lived between her birth and the present (2023).

    1. Set up a while loop that will console.log all of the years from 1982
       to 2022, in ascending order. Use the existing currentYear value to do this.

    2. Once the sequence of years is complete, console.log the message ("Welcome
       to the present, Sarah! The year is 2023.").

    The final results should be the same as if you wrote the following:

        console.log(1982);
        console.log(1983);
        console.log(1984);
        ...etc...
        console.log(2022);
        console.log("Welcome to the present! The year is " + currentYear + ".");
*/
function exampleLoop5() {
    while(currentYear <= 2022) {
        console.log(currentYear);
        currentYear++;
    }
    console.log("Welcome to the present! The year is " + currentYear + ".");
}

/* Challenge

    Imagine you're creating an app that helps children practice the multiplication tables.
    You need to create a list of all of the multiplications for the numbers 1 to 10.

    Task:
        - Use a nested loop to console log the multiplications for each table, in ascending order,
        displaying each multiplication as a string.
        - At the start of each table, console log a string that says which number the table is for.

    Expected Results:

        "----- 1 Times Table ----- "
        "1 times 1 equals 1"
        "1 times 2 equals 2"
        "1 times 3 equals 3"
        "1 times 4 equals 4"
        "1 times 5 equals 5"
        "1 times 6 equals 6"
        "1 times 7 equals 7"
        "1 times 8 equals 8"
        "1 times 9 equals 9"
        "1 times 10 equals 10"
         "----- 2 Times Table ----- "
        "2 times 1 equals 2"
        "2 times 2 equals 4"
        "2 times 3 equals 6"
        "2 times 4 equals 8"
        etc...
*/
function exampleLoop6() {
    for (var i = 1; i <= 10; i++) {
        console.log(`----- ${i} Times Table ----- `);
        for (var j = 1; j <= 10; j++) {
            console.log(`${i} times ${j} equals ${i * j}`);
        }

    }
}

/* Challenge

    Imagine the app also allows children to practice custom tables
    — for examples, multiples of 10 in descended order, each one divided by 5 and 10.

    Task:
        - Use a nested loop to console log each of the divisions for each of the multiples between
          100 and 10, in the following format.

    Expected Results:

        "100 divided by 5 equals 20"
        "100 divided by 10 equals 10"
        "90 divided by 5 equals 18"
        "90 divided by 10 equals 9"
        "80 divided by 5 equals 16"
        "80 divided by 10 equals 8"
        etc...
        "10 divided by 10 equals 1 "
*/
function exampleLoop7() {
    for (let i = 100; i >= 10; i-= 10) {
        for (let j = 5; j <= 10; j += 5) {
            console.log(`${i} divided by ${j} equals ${i / j}`);
        }
    }
}

function exampleLoop8() {
let cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
    for (var i = 0; i < cubes.length; i++) {
        let styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
        console.log("%c" + cubes[i], styles)
    }
}



// Call loop examples
// exampleLoop1();
// exampleLoop2();
// exampleLoop3();
// exampleLoop4();
// exampleLoop5();
// exampleLoop6();
// exampleLoop7();
// exampleLoop8();
