import { useEffect, useRef } from "react";

function usePrevious(val) {
  // useRef() is used to create an object that won't cause a re-render
  // when the value of obj.current is changed. By comparison, a string update would
  // cause a re-render.
  const prevVal = useRef("");
  useEffect(() => {
    console.log("next previous value:", val);
    prevVal.current = val;
  }, [val]);
  return prevVal.current;
}

export { usePrevious };
