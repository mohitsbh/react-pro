import React, { useState } from "react";
import "./style.css";
function index() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px",
        border:"2px solid"
      }}
    >
      <h3>RATING STARS</h3>
      <div className="stars">
        {[...Array(5)].map((_, index) => {
          return (
            <span
              key={index}
              className={`${index + 1 <= count ? "selected" : ""}`}
              style={{
                fontSize: "45px",
                cursor: "pointer",
              }}
              onClick={() => setCount(index + 1)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <h4>RATING COUNT:{count}</h4>
    </div>
  );
}

export default index;
