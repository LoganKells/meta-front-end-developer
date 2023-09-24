import "../styles/App.css";
import { useState } from "react";
import { SubmitButton } from "./SubmitButton";

function ScoreForm() {
  const defaultScore = 5;
  let [score, setScore] = useState(defaultScore);

  function onScoreChange(e) {
    setScore(e.target.value);
    console.log("score changed to:", e.target.value);
  }

  function submitCallback(e) {
    e.preventDefault();
    console.log("submitted score:", score);
    setScore(defaultScore);
  }

  return (
    // <div className={"form"}>
    <form onSubmit={submitCallback} className={"form"}>
      <fieldset className={"inputFieldset"}>
        <h2>Feedback Score</h2>
        <div>
          <label>Score: {score}</label>
          <input
            className={"fieldsetContent"}
            type={"range"}
            min={0}
            max={10}
            value={score}
            onChange={onScoreChange}
          />
        </div>
        <SubmitButton type={"submit"} textValue={"Submit"} disabled={false} />
      </fieldset>
    </form>
    // </div>
  );
}

export { ScoreForm };
