import React from "react";

import "./mini-about.css";

function MiniAbout() {
  return (
    <div className="mini-about-container">
      <div className="text-wrapper">
        <h3 style={{ color: "white" }} className="mini-about-h3">
          Што добивате доколку се <br></br> зачлените во нашиот клуб?
        </h3>
      </div>
      <h5>
        <ul className="li-container">
          <li style={{ color: "white" }} className="individual-li">
            Одлични услови за тренинг &#10004;
          </li>
          <li style={{ color: "white" }} className="individual-li">
            Прифатлива цена &#10004;
          </li>
          <li style={{ color: "white" }} className="individual-li">
            Професионални инструктори &#10004;
          </li>
          <li style={{ color: "white" }} className="individual-li">
            Хигиена &#10004;
          </li>
          <li style={{ color: "white" }} className="individual-li">
            Одлично опремена теретана &#10004;
          </li>
          <li style={{ color: "white" }} className="individual-li">
            Бесплатни планови за тренинг &#10004;
          </li>
        </ul>
      </h5>
      <hr />
    </div>
  );
}

export default MiniAbout;
