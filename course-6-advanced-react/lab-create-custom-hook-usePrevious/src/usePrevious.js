import { useEffect, useRef } from "react";

/**
 * usePrevious is a custom hook. The value input is stored in an object,
 * prevVal, and returned when the hook is called. The hook is called
 * anytime the val value changes in the component because useEffect is
 * observing the dependency [val].
 * */
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
