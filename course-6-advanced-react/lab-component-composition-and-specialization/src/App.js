import logo from "./logo.svg";
import "./App.css";

const Button = ({ children, backgroundColor }) => {
  console.log("backgroundColor:", backgroundColor);
  console.log("{backgroundColor}:", { backgroundColor });
  console.log("children:", children);
  const styles = { backgroundColor };
  return <button style={{ backgroundColor }}>{children}</button>;
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header>Little Lemon Restaurant</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>Are you sure you want to proceed?</p>
        <DeleteButton />
      </Alert>
    </div>
  );
}

export default App;
