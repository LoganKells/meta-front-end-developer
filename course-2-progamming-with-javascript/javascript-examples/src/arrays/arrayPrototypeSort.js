const desserts = [
    {
        name: 'Chocolate Cake',
        calories: 400,
        createdAt: '2022-09-01',
    },
    {
        name: 'Ice Cream',
        calories: 200,
        createdAt: '2022-01-02',
    },
    {
        name: 'Tiramisu',
        calories: 300,
        createdAt: '2021-10-03',
    },
    {
        name: 'Cheesecake',
        calories: 600,
        createdAt: '2022-01-04',
    },
]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Sort by calories, low to high.
const dataList = desserts.sort(
    (itemA, itemB) => itemA.calories - itemB.calories
)
console.log(dataList)
