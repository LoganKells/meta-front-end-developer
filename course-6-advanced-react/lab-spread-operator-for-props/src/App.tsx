import logo from "./logo.svg";
import "./App.css";
import React from "react";

interface ButtonProps {
  buttonType: String;
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ buttonType, children, ...buttonProps }: ButtonProps) => {
  const className =
    buttonType === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ buttonType, children, ...buttonProps }: ButtonProps) => {
  return (
    <Button
      buttonType="secondary"
      {...buttonProps}
      onClick={() => alert("Logging in now!")}
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Login Page</header>
      <Button buttonType="primary" onClick={() => alert("Signing up now!")}>
        Sign up
      </Button>
      <LoginButton
        buttonType="secondary"
        onClick={() => alert("This is NOT displayed")}
      >
        Log in
      </LoginButton>
    </div>
  );
}

export default App;
