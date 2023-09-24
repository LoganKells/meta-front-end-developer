import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsPasswordValid = () => {
    // Implement this function
    return password.value.length >= 8 && password.isTouched;
  };

  const getisRoleValid = () => {
    return role === "individual" || role === "business";
  };

  const getIsEmailValid = () => {
    let validationResult = validateEmail(email);
    if (validationResult !== null && validateEmail(email).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const getIsFirstNameValid = () => {
    return firstName.length > 0;
  };

  const getIsFormValid = () => {
    let valid =
      getIsFirstNameValid() &&
      getIsEmailValid() &&
      getIsPasswordValid() &&
      getisRoleValid();
    console.log("getIsEmailValid():", getIsEmailValid());
    console.log("getIsFirstNameValid():", getIsFirstNameValid());
    console.log("getIsPasswordValid():", getIsPasswordValid());
    console.log("getisRoleValid():", getisRoleValid());
    console.log("form is valid:", valid);
    return valid;
  };

  function handleEmailChange(e) {
    let valid = validateEmail(e.target.value);
    console.log("email valid:", valid);
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword({ value: e.target.value, isTouched: true });
    if (!getIsPasswordValid(e)) {
      return PasswordErrorMessage();
    }
  }

  const clearForm = () => {
    // Implement this function
    setPassword({ value: "", isTouched: false });
    setEmail("");
    setLastName("");
    setFirstName("");
    setRole("Role");
    console.log("role", role);
    console.log("password", password.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    alert("Account created!");
  };

  let passwordWarning = getIsPasswordValid() ? "" : <PasswordErrorMessage />;

  // let passwordWarning = <PasswordErrorMessage />;
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type={"password"}
              placeholder="Password"
              value={password.value}
              onChange={handlePasswordChange}
            />
            {passwordWarning}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
