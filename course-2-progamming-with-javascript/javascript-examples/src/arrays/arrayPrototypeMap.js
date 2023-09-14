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
console.log(topDesserts)
