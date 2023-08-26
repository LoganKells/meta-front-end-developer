// Error Handling
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
let data = 4;
console.log(data.toPrecision(10))

// Try catch blocks
function tryExceptExample1() {
    try {
        console.log(c + d);
        // throw new ReferenceError();
    } catch(err) {
        console.log(err);
    }
}

/*
Defensive programming example.
This function adds a $10 tourist surcharge to every hotel
booking. But there's a problem. If we pass in an argument
that is not a number, we get weird and unexpected results.
Let's refactor it to fix that!
*/
function addTouristSurcharge(payment){
    /*
    Task:
        1. Add a try block.
        2. Inside the try block, check if 'payment' is a number.
           If it's not a number, throw a reference error stating
           'payment is not a number'.
           If it is a number, perform the calculation and log out
           the result.
        3. Add a catch block to log out the error.

    */
    try {
        let testType = typeof payment;
        if (typeof payment !== "number") {
            throw ReferenceError("payment is not a number type.");
        } else {
            console.log("payment is correctly a Number type.");
            console.log(payment + 10);
        }
    } catch(err) {
        console.log(err);
    }

}

function letterFinder(word, letterToMatch){
    /*
    Task:

        1. Inside the function body, set up two variables called
           'condition1' and 'condition2'.
        2. 'condition1' needs to hold a boolean which is true if
           the 'word' parameter is of the data type of string
           AND has a length of 2 or more.
        3. 'condition2' needs to hold a boolean which is true if
           the 'letterToMatch' parameter is of the data type of
           string AND has a length of exactly 1.
        4. Wrap the rest of the logic in the function in an if
           statement so it only executes if BOTH 'condition1' AND
           'condition2' are true.
        5. Add an else statement that logs out "Please pass in
           correct arguments." if condition1 and condition2 don't
           both return true.

        Expected output when letterFinder is called with 'test' and 't':

            Found letter t at index 0
            ---No match found at index 1
            ---No match found at index 2
            Found letter t at index 3

        Expected output when letterFinder is called with [6, 7] and 't':

            Please pass in correct arguments
    */
    // Validate input
    try {
        if (typeof word !== 'string') {
            throw TypeError("word must be String type.");
        }
        if (typeof letterToMatch !== 'string') {
            throw TypeError("letterToMatch must be String type.");
        }
        if (letterToMatch.length !== 1) {
            throw TypeError("letterToMatch must be a String of length 1.");
        }

        for (let i = 0; i < word.length; i++){
            if(word[i] === letterToMatch){
                console.log('Found the letter ' + letterToMatch + ' at index ' + i)
            }
            else {
                console.log('No match found at index ' + i)
            }
        }
    } catch(err) {
        console.log(err);
    }

}

// Run examples:
// tryExceptExample1();
// addTouristSurcharge('60');  // Error
// addTouristSurcharge(Number('60'));
letterFinder([6,7], 'o');  // Error
letterFinder('dog', 'o')
