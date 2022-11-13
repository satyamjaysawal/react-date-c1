import React from "react";
import ReactDom from "react-dom";

let curDate = new Date();
curDate = curDate.getHours();
ReactDom.render(
  <h1> Hello Sir its current date, {curDate} </h1>,
  document.getElementById("root")
);
