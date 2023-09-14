var petDog = 'Buddy'
let dogSound = 'ruff'
console.log("My pet dog's name is:", petDog, '. He makes the sound:', dogSound)
dogSound = 'bark'
console.log(petDog, 'now says', dogSound)

/*
    🐈 Pet Cat Simulator 🐈

    I.  Give the cat a name
        1. Declare a petCat variable and assign a name for the cat to it.
        2. Console.log the variable to make sure it has been declared correctly.
        3. Use concatenation to console log the message: "My pet cat's name
           is: [your cat's name]."

    II. Create a sound for the cat.
        4. Declare a catSound variable and assign a string for the cat's sound
           to that variable.
        5. Console.log the following message: "[Your cat's name] says [your cat's
           sound]." Use commas, your two variables, and a string to create the message.

    III. Change the sound of the cat.
         6. Reassign a new sound to the catSound variable.
         7. Console.log the following message: "[Your cat's name] now says [your cat's
            sound]." Use commas, both variables, and a string to create the message.
*/
// I.
// 1.
var petCat = 'Colby'
// 2.
console.log(petCat)
// 3.
var catSentenceFragment = "My pet cat's name is: "
console.log(catSentenceFragment + petCat + '.')

// II
// 4.
var catSound = 'meow'
// 5.
console.log(petCat, 'says', catSound + '.')

// III
//6.
catSound = 'huff'
var catAge = 1
//7.
console.log(
    petCat,
    'now says',
    catSound + '. ' + petCat + "'s age is " + catAge
)
const sym1 = Symbol(1)
const sym2 = Symbol(1)
console.log(sym1.valueOf(), sym2.valueOf(), sym1.valueOf() === sym2.valueOf())
console.log(8 - 7.99)
var myLongString = 'hello' + ' how are you?'
console.log(myLongString)
console.log(Number('11') + 12)
console.log('1' + 2)
console.log(1 + '2')
console.log(Number('1') + 2)
var story = 'Story 1'
story += ' is good.'
console.log(story)
