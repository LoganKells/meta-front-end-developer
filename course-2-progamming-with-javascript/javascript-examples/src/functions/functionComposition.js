const functionA = (firstName) => {
    return (lastName) => {
        console.log(firstName, lastName)
    }
}

functionA('Logan')('Kells')
