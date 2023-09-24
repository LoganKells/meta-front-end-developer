function SubmitButton(props) {
  return (
    <div>
      <button
        className={"fieldsetContent"}
        disabled={props.disabled}
        type={props.type}
      >
        {props.textValue}
      </button>
    </div>
  );
}

export { SubmitButton };
