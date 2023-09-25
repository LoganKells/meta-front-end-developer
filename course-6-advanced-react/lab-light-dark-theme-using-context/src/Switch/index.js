import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  // Use the useTheme hook to get access to `theme` and `toggleTheme`
  const { theme, toggleTheme } = useTheme();

  // Add an `onChange` prop to the input element. When them element changes,
  // the `toggleTheme` function should be invoked
  // Change the `checked` prop to be true or false based on the `theme` state.
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
