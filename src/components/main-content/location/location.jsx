import React from "react";

import "./location.css";

import locationImg from "./images/location.png";

function Location() {
  return (
    <div className="location-container">
      <h3 style={{ textAlign: "center", color: "white" }}>
        Каде се наоѓаме <span>&#10067;</span>
      </h3>
      <div className="text-img-wrapper">
        <div className="location-img-wrapper">
          <img className="img-map" src={locationImg} alt="" />
        </div>
        <div className="location-text-wrapper">
          <h4 style={{ color: "white" }}>
            Улица: Кузнам Јосифоски бр.51 7500 Прилеп, Македонија
          </h4>
          <h5 style={{ color: "white" }}>Исконтактирајте не: 076 450 450</h5>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Location;
