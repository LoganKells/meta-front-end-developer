import "../styles/App.css";
import { useState } from "react";

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
    <div className={"scoreForm"}>
      <form onSubmit={submitCallback}>
        <fieldset>
          <h2>Feedback Score</h2>
          <div className={"field"}>
            <label>Score: {score}</label>
            <input
              type={"range"}
              min={0}
              max={10}
              value={score}
              onChange={onScoreChange}
            />
          </div>
          <button type={"submit"}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export { ScoreForm };
