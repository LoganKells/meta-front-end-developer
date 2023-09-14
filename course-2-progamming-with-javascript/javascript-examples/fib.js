function fibonacciIterative(n) {
    let data = []
    // 0, 1, 1, 2, 3, 5, 8, 13
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            data[i] = 0
        } else if (i === 1) {
            data[i] = 1
        } else {
            let n0 = data[i - 2]
            let n1 = data[i - 1]

            let sum = n0 + n1 // i = 1 -> 0 + 1 ... i = 2 -> 1 + 1
            data[i] = sum // n1 = sum; // i = 1 -> 1  ... i = 2 -> n1 = 2
            data[i - 1] = n1 // n0 = n1; // i =1 -> n0 = 1 ... i = 2 -> n0 = 1
        }
    }
    return data
}

// function fibonacciRecursive(n) {
//     const fibonacciRecursive = (n) => (n <= 2 ? 1 : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2));
//
//     console.log(fibonacciRecursive(3));
//
// }
const fibonacciRecursive = (n) =>
    n <= 2 ? 1 : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)

console.log(fibonacciRecursive(3))

/**
 * Run Fibonacci functions.
 * @param {function} fib function that calculates fibonacci sequence, given n.
 * */
function main(fib) {
    if (typeof fib != 'function') {
        throw TypeError('fib must be a function type.')
    }

    for (let i = 0; i <= 4; i++) {
        console.log(fib(i))
    }
}
console.log('Running iterative')
main(fibonacciIterative)
console.log('Running recursive...')
main(fibonacciRecursive)
