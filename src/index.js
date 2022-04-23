//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
ReactDOM.render(
  <div>
    <center>
      <h1>My Favourite Foods:</h1>
    </center>
    <ul>
      <li>Mutton</li>
      <li>Salmon</li>
      <li>Milkshake</li>
      <li>Watermelon</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
