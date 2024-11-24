import React, { useState } from "react";

function index() {
  const [color, setColor] = useState("");
  return (
    <div
      style={{
        display: "flex",
        margin: "30px auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "5px solid green",
        padding: "20px",
      }}
    >
      <h3>Dynamic color changer</h3>
      <div
        style={{
          height: "50vh",
          width: "50vw",
          backgroundColor: color,
        }}
      ></div>
      <div>
        <input
        style={{border:"1px solid"}}
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default index;
