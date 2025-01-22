import React from "react";
import { useTheme } from "../store/Themes";

const Child: React.FC = () => {
  const { color, toggleColor } = useTheme();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color === "light" ? "#fff" : "#333",
        color: color === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Current theme: {color}</h1>
      <button onClick={toggleColor}>Toggle Theme</button>
    </div>
  );
};

export default Child;
