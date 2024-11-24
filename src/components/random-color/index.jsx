import React, { useState } from "react";

function index() {
  const [typecolor, settypecolor] = useState("hex");
  const [color, setcolor] = useState("#000000");

  function colorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function HEXcolor() {
    var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (i = 0; i < 6; i++) {
      hexColor += hex[colorUtility(hex.length)];
    }
    console.log(hexColor);
    setcolor(hexColor);
  }

  function RGBcolor() {
    let r = colorUtility(255);
    let g = colorUtility * 255;
    let b = colorUtility * 255;

    setcolor(`rgb(${r}${g}${b})`);
  }
  return (
    <div>
      <button onClick={() => settypecolor("rgb")}>rgb color</button>
      <button onClick={() => settypecolor("hex")}>hex color</button>
      <button onClick={typecolor === "hex" ? HEXcolor : RGBcolor}>
        random color
      </button>
      <div>{color}</div>
    </div>
  );
}

export default index;
