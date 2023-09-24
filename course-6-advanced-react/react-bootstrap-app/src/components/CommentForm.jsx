import { useState } from "react";

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
        <fieldset>
          <div className={"comment"}>
            <label htmlFor={"value"}>Enter Your Name: </label>
            <textarea id="value" value={value} onChange={handleChange} />
          </div>
          <button disabled={!value} type={"submit"}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export { CommentForm };
