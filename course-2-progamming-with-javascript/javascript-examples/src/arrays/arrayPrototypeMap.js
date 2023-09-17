const data = [
    {
        id: '1',
        title: 'Tiramisu',
        description: 'The best in town',
    },
    {
        id: '2',
        title: 'Lemon Ice Cream',
        description: 'Mind blowing taste',
    },
    {
        id: '3',
        title: 'Chocolate mousse',
        description: 'Unexplored flavours',
    },
]
const topDesserts = data.map((desert) => {
    return { content: `${desert.title} - ${desert.description}` }
})
console.log('topDesserts: ', topDesserts)

const desserts = [
    {
        title: 'Chocolate Cake',
        description: 'Chocolate cake is a cake flavored with melted chocolate',
        calories: 500,
    },
]

const newDesserts = desserts.map((dessert) => {
    return {
        title: dessert.title.toUpperCase(),
        ...dessert, // NOTE - this replaces the value of title in the object literal.
        kCal: dessert.calories / 1000,
    }
})
console.log('newDesserts: ', newDesserts)
