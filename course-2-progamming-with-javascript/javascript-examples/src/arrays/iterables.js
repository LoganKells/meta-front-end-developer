let myName = "Logan";

// Iterating a String.
for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}

// Popping a String is a TypeError
// myName.pop();

// Concat on Array and Strings
myName = myName.concat(' Kells');
console.log(myName);

// IndexOf
console.log(myName.indexOf("K"));
console.log("01231".lastIndexOf("1"));

// String splitting
console.log(myName.split(" "));

/*
Task:
You are preparing costumes for a theatre, and JavaScript is going
to help!

    1. Create an empty array literal and store it in a variable
       named 'costumeItems'.
    2. Use the push method to add 3 items of clothing.
    3. Use the pop method to delete one item.
    4. Log out 'costumeItems' each time to check your results .
    5. Log out just the 2nd item in the array.
*/
function arrayExample1() {
    let costumeItems = [];
    costumeItems.push('helmet');
    costumeItems.push('blouse');
    costumeItems.push('shoes');
    costumeItems.pop();
    console.log(costumeItems);
    console.log(costumeItems[1]);
}
arrayExample1();