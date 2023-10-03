import React, { useReducer } from "react";
import "./App.css";

type moneyData = { money: number };
type moneyAction = { type: string };

const reducer = (state: moneyData, action: moneyAction) => {
  if (action.type === "plus") return { money: state.money + 100 };
  if (action.type === "minus") return { money: state.money - 100 };
  return state;
};

function App() {
  const initialState: moneyData = { money: 1000 };
  const [data, dataDispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Account Balance: {`$${data.money}`}</h1>
      <div>
        <button
          onClick={() => {
            dataDispatch({ type: "plus" });
          }}
        >
          {"+ 100"}
        </button>
        <button
          onClick={() => {
            dataDispatch({ type: "minus" });
          }}
        >
          {"-100"}
        </button>
      </div>
    </div>
  );
}

export default App;
