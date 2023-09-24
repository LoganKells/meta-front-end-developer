import { useState } from "react";
import { SubmitButton } from "./SubmitButton";

function CommentForm() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // do not refresh
    console.log("Form submitted.");
    console.log("value:", value);
    setValue("");
  }

  return (
    <div className={"form"}>
      <form onSubmit={handleSubmit}>
        <fieldset className={"inputFieldset"}>
          <div>
            <label htmlFor={"value"}>Leave a comment: </label>
          </div>
          <div>
            <textarea
              className={"fieldsetContent"}
              id="value"
              value={value}
              onChange={handleChange}
            />
          </div>
          <SubmitButton
            type={"submit"}
            textValue={"Submit"}
            disabled={!value}
          />
        </fieldset>
      </form>
    </div>
  );
}

export { CommentForm };
