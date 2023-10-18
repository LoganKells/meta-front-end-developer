import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

/**
 * App displays a radio group built using component composition dynamically.
 * */
function App() {
  const [selected, setSelected] = useState("");
  // console.log("selected:", selected);
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;
