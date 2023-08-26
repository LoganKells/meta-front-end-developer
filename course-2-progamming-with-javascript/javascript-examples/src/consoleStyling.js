// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // declare formatted console output message
    let message = "%c" + txt;

    // Style variables
    let styles = `color: ${color};`
    styles += `background: ${background};`
    styles += `font-size: ${fontSize};`

    console.log(message, styles)


}

// Task 2: Build another console log message generator
function celebrateStyler() {

}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {

}
// Call styleAndCelebrate