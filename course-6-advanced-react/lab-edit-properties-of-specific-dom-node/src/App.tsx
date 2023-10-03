import React, { useRef } from "react";
import "./App.css";
import { Simulate } from "react-dom/test-utils";

function App() {
  const formInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="App">
        <h1>{"Lab to access <input> in underlying DOM."}</h1>
        <input ref={formInputRef} type="text" />
        <button onClick={() => formInputRef.current?.focus()}>
          Focus cursor to Input
        </button>
      </div>
    </>
  );
}

export default App;
