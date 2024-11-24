import React, { useState } from "react";
import QRCode from "react-qr-code";

function index() {
  const [url, setUrl] = useState("");
  return (
    <div style={{ background: "blue", height: "100vh", width: "100vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ margin: "40px auto", color: "white" }}>QR GENERATOR</h3>
        <div className="inputs">
          <input
            type="text"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter url"
            color="blue"
            style={{
              border: "1px solid blue",
              margin: "10px",
              width:"300px"
            }}
          />
        </div>
        <QRCode
          value={url}
          style={{
            backgroundColor: "white",
            margin: "10px",
            border: "2px solid blue",
            padding: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default index;
