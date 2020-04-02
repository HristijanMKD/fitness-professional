import React from "react";

import "./photo-slider.css";
import img1 from "./images-slider/slider-img-1.jpg";
import img2 from "./images-slider/slider-img-2.jpg";
import img3 from "./images-slider/slider-img-3.jpg";
import img4 from "./images-slider/slider-img-4.jpg";
import img5 from "./images-slider/slider-img-5.jpg";
import img6 from "./images-slider/slider-img-6.jpg";
import img7 from "./images-slider/slider-img-7.jpg";
import img8 from "./images-slider/slider-img-8.jpg";
import img9 from "./images-slider/slider-img-9.jpg";
import img10 from "./images-slider/slider-img-10.jpg";

import { Slide } from "react-slideshow-image";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  scale: 0.4
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <h2 style={{ textAlign: "center", color: "white" }}>Галерија</h2>
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img1})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img2})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img3})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img4})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img5})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img6})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img7})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img8})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img9})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img10})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
