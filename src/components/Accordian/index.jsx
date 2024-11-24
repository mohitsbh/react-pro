import React, { useState } from "react";
import data from "./data";
import "./style.css";

function index() {
  const [select, setselect] = useState(null);
  const [enablemulti, setenablemulti] = useState(false);
  const [multiselect, setmultiselect] = useState([]);
  function singleClick(getid) {
    // console.log(getid);
    setselect(getid === select ? null : getid);
  }

  function multiClick(getid) {
    let cpymultiple = [...multiselect];
    const findindexofgetid = cpymultiple.indexOf(getid);
    console.log(findindexofgetid);
    if (findindexofgetid === -1) cpymultiple.push(getid);
    else cpymultiple.splice(findindexofgetid, 1);
    setmultiselect(cpymultiple);
  }
  console.log(select, multiselect);
  return (
    <div
      className="wrapper"
      style={{
        border: "1px solid red",
        margin: "10px",
      }}
    >
   
      <button onClick={() => setenablemulti(!enablemulti)} className="btn">
        enable multiselection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enablemulti
                    ? () => multiClick(dataItem.id)
                    : () => singleClick(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>

                {enablemulti
                  ? multiselect.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : select === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}

                {/* {select === dataItem.id ||
                multiselect.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
              </div>
            </div>
          ))
        ) : (
          <div>Data Not Found</div>
        )}
      </div>
    </div>
  );
}

export default index;
