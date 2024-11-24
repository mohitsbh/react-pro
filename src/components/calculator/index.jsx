import React, { useState } from "react";
// import "./style.css";
import "./style.css";

function index() {
  const [value, setvalue] = useState('');
  return (
    <div className="container">
      <div className="calculator">
      
        <div className="input">
          <input value={value} type="text" />
        </div>

        <div className="button">
          <button className="btn-1" onClick={() => setvalue("")}>
            AC
          </button>
          <button
            className="btn-1"
            onClick={() => setvalue(value.slice(0, -1))}
          >
            DEL
          </button>
          <button
            className="btn-1"
            value="."
            onClick={(e) => setvalue(value + e.target.value)}
          >
            .
          </button>
          <button
            className="btn-1"
            value="/"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            /
          </button>
        </div>
        <div>
          <button
            className="btn-1"
            value="7"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            7
          </button>
          <button
            className="btn-1"
            value="8"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            8
          </button>
          <button
            className="btn-1"
            value="9"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            9
          </button>
          <button
            className="btn-1"
            value="*"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            *
          </button>
        </div>
        <div>
          <button
            className="btn-1"
            value="4"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            4
          </button>
          <button
            className="btn-1"
            value="5"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            5
          </button>
          <button
            className="btn-1"
            value="6"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            6
          </button>
          <button
            className="btn-1"
            value="+"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="btn-1"
            value="1"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            1
          </button>
          <button
            className="btn-1"
            value="2"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            2
          </button>
          <button
            className="btn-1"
            value="3"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            3
          </button>
          <button
            className="btn-1"
            value="-"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            -
          </button>
        </div>
        <div>
          <button
            className="btn-1"
            value="00"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            00
          </button>
          <button
            className="btn-1"
            value="0"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            0
          </button>
          <button
            className="btn-1 equal"
            onClick={() => setvalue(eval(value))}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
