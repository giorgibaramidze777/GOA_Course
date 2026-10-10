import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("white");

  const colors = ["yellow", "blue", "red", "pink", "brown"];

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
    console.log(`div color: ${selectedColor}`);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "50px" }}>
        <div style={{ 
            width: "200px", 
            height: "200px", 
            backgroundColor: color, 
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {color}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          {colors.map((c) => (
            <button key={c} onClick={() => handleColorChange(c)}style={{ padding: "8px 16px", fontSize: "14px", cursor: "pointer" }}>{c}</button>
          ))}
        </div>
      </div>
    </>
  );
}