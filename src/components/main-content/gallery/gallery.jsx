import React from "react";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

import "./gallery.css";

import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="container">
      <hr></hr>
      <h3 style={{ color: "white" }}>Мини галерија</h3>
      <div className="img-wrapper">
        <img className="gallery-img" src={img1} alt="" />
        <img className="gallery-img" src={img2} alt="" />
        <img className="gallery-img" src={img3} alt="" />
      </div>
      <h4>
        <Link to="/gallery">Види повеќе слики</Link>
      </h4>
      <hr></hr>
    </div>
  );
}

export default Gallery;
