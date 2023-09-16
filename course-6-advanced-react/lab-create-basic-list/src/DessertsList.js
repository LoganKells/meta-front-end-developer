// Lab: https://www.coursera.org/learn/advanced-react/ungradedLab/rxczX/exercise-create-a-basic-list-component

function DessertsList(props) {
  // Implement the component here.
  // Create a list to display desserts with less than
  // 500 calories, all sorted by calories from low to high.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // Each item from the list should display the name
  // of the dessert and the number of calories,
  // both separated by a dash character, i.e. Chocolate Mousse - 250 cal.
  const dataList = props.data
    .sort((itemA, itemB) => itemA.calories - itemB.calories)
    .filter((item) => item.calories < 500)
    .map((item) => {
      const itemText = `${item.name} - ${item.calories} cal`;
      return <li>{itemText}</li>;
    });
  return <ul>{dataList}</ul>;
}

export default DessertsList;
