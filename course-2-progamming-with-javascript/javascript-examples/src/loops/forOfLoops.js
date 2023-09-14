/**
 * For of loop over an array.
 * */
function forOfLoopExample1() {
    const employees = ['Wendy Smith', 'Dave Singh', 'Kerry West']

    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i])
    }

    // For of loop is equivalent
    for (let emp of employees) {
        console.log(emp)
    }
}

/**
 * For of loop over object
 * */
function forOfLoopExample2() {
    const employee1 = {
        name: 'Wendy Smith',
        dept: 'engineering',
        salary: 100000,
    }

    // TypeError employee1 is not iterable.
    // for (let key of employee1) {
    //     console.log(key);
    // }

    console.log('-------------')
    // Log an array of keys
    console.log(Object.keys(employee1))

    console.log('-------------')
    for (let key of Object.keys(employee1)) {
        console.log(key + ': ' + employee1[key])
    }

    console.log('-------------')
    for (let value of Object.values(employee1)) {
        console.log(value)
    }

    console.log('-------------')
    for (let entry of Object.entries(employee1)) {
        console.log(entry)
    }
}

/**
Task:
Loop over the properties of the freelancerDev Object and:
    1. Log out an array of all of the keys.
    2. Log out an array of all of the values.
    3. Log out all of the keys and values. Each key/value
    pair should be in it's own array.
    4. Log out the key and value for each property as strings.
*/
function forOfLoopExample3() {
    const freelancerDev = {
        name: 'Frankie Freeman',
        daysWorked: 26,
        dayRate: 300,
    }

    // 1. Log out an array of all of the keys.
    console.log('1. -------------')
    console.log(Object.keys(freelancerDev))

    // 2. Log out an array of all of the values.
    console.log('2. -------------')
    console.log(Object.values(freelancerDev))

    // 3. Log out all of the keys and values. Each key/value
    //    pair should be in it's own array.
    console.log('3. -------------')
    for (let entry of Object.entries(freelancerDev)) {
        console.log(entry)
    }

    // 4. Log out the key and value for each property as strings.
    console.log('4. -------------')
    for (let key of Object.keys(freelancerDev)) {
        console.log(`${key}: ${freelancerDev[key]}`)
    }
    console.log(
        'Equivalently we can use an arrow function and the .forEach method...'
    )
    Object.keys(freelancerDev).forEach((key) => {
        console.log(`${key}: ${freelancerDev[key]}`)
    })
}

// Call loop examples
// forOfLoopExample1();
// forOfLoopExample2();
forOfLoopExample3()
