import React from "react";
import useDarkMode from "../hooks/useDarkMode.js";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useDarkMode("darkmode", false);

  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        setDarkMode(!darkMode);
      }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeButton;
