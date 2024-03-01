import { useState, useEffect } from "react";

const useDarkMode = () => {
  const savedMode = localStorage.getItem("mode") || "dark";
  const savedTextColor = localStorage.getItem("textColor") || "white";

  const [mode, setMode] = useState(savedMode);
  const [textColor, setTextColor] = useState(savedTextColor);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextColor("white");
    } else if (mode === "dark") {
      setMode("light");
      setTextColor("black");
    }
  };
  useEffect(() => {
    localStorage.setItem("mode", mode);
    localStorage.setItem("textColor", textColor);

    document.body.style.backgroundColor = mode === "dark" ? "black" : "white";
  }, [mode, textColor]);

  return { mode, textColor, toggleMode };
};

export default useDarkMode;
