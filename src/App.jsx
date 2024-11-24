import React from "react";
import {
  Accord,
  Calc,
  Calculator,
  Color,
  Dynamic,
  Imageslider,
  QRgenerator,
  Starrating,
} from "./components/import";
import { slides } from "./data/images.json";

function App() {
  return (
    <>
       <Accord />
       <Dynamic />
       <Starrating />
       <Imageslider data={slides} />
       <Calculator />
       <QRgenerator />
       <Calc />
      <Color/>
    </>
  );
}

export default App;
