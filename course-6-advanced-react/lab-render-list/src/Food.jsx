const desserts = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best in town",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    price: "$4.50",
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexplored flavours",
    price: "$6.00",
  },
];

/**
 * Simple Food list
 * */
function Food() {
  // using React key to help React diff algorithm
  // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
  const listItems = desserts.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li key={dessert.id}>{itemText}</li>;
  });
  return <ul>{listItems}</ul>;
}

export { Food };
