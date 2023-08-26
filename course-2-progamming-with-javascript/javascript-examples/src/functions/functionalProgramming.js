function addTwoNums(a, b) {
    console.log(a() + b())
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 }

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

// addTwoNums(getNumber(), getNumber())


addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number