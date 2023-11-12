import "./App.css";
import { useEffect, useState } from "react";

function ClickCounter(props) {
  return (
    <div>
      {/*When clicked, increment the value of 'count'*/}
      <button onClick={() => props.counter()}>Increment</button>
      <p>Clicked: {props.count}</p> {/*Render the value of count*/}
    </div>
  );
}

const withCount = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0); //default value of this state will be 0.

    useEffect(() => {
      console.log("count: ", count);
    }, [count]);

    return (
      <WrappedComponent
        {...props}
        count={count}
        counter={() => setCount((prevState) => prevState + 1)}
      />
    );
  };
};

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PointMouseLogger = ({ mousePosition, ...props }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PointMouseTracker = withMousePosition(PointMouseLogger);
const ClickCounterWithLogging = withCount(ClickCounter);

function App() {
  return (
    <div>
      {/*<header className="App-header">Little Lemon Restaurant</header>*/}
      <PointMouseTracker />
      <ClickCounterWithLogging />
    </div>
  );
}

export default App;
