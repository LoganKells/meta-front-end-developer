// Working with Arrays
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays

// ----------------
// Push and pop to array

var friendsList = ['Wayne', 'Sara', 'Frankie']
friendsList.push('Logan')
console.log(friendsList)
let last = friendsList.pop() // last element
console.log(friendsList, last)
const first = friendsList.shift() // first element
console.log(first, friendsList)

/*
Task:
    1. Create an empty array and store it in a variable named
       presentList.
    2. Push 5 items that you would like to receive as a gift.
    3. Use the pop method to delete all of the items
       (because you received all of the gifts!!)

    Extra: you could use a for loop to pop off all of the items.
    This might be a bit tricky, so I have given you a hint.
*/
function arrayUpdates() {
    let gifts = []
    gifts.push('gift1')
    gifts.push('gift1')
    gifts.push('gift1')
    gifts.push('gift1')
    gifts.push('gift1')
    console.log(`After pushing, gifts: ${gifts}`)
    while (gifts.length > 0) {
        gifts.pop()
    }
    console.log(`After popping, gifts: ${gifts}`)
}
arrayUpdates()

/*
 * Task: Use built in method to print items in an array
 * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods
 * */
function arrayForEach() {
    let data = [1, 2, 3, 4, 5]
    data.forEach((n, i) => {
        console.log(i, n)
    })
}
arrayForEach()
