//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
ReactDOM.render(
  <div className="entire-part">
    <center>
      <h1 className="heading" contentEditable="true" spellCheck="true">
        My Favourite Foods:
      </h1>
    </center>
    <center>
      <div>
        <img
          className="food-img"
          src="https://www.thespruceeats.com/thmb/t3ZplSDnSWW7fVjdNGx_tJQ3p1k=/1499x1499/smart/filters:no_upscale()/TobiasTitz-56ac68d7a6774c468615106fe7060db5.jpg"
          alt="mutton"
        ></img>
        <img
          className="food-img"
          src="https://www.banglarilish.com/wp-content/uploads/2020/11/salmon-fish-raw-steaks-caviar-icons-set-isolated-white_1284-33354.jpg"
          alt="salmon fish"
        ></img>
        <img
          className="food-img"
          src="https://bakingmischief.com/wp-content/uploads/2022/03/coffee-milkshake-square.jpg"
          alt="milkshake"
        ></img>
        <img
          className="food-img"
          src="https://i5.walmartimages.com/asr/624f8431-b244-4b3a-9864-eca1268d6b37.85304a9e75827db6de5e2da988b22b7e.jpeg"
          alt="watermelon"
        ></img>
      </div>
    </center>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
