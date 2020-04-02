import React from "react";

import "./instructor.css";

import certificate from "./images/certificate.jpg";
import trainer from "./images/instructor.jpg";

function Instructor() {
  return (
    <div className="instructor-container">
      <h3 style={{ textAlign: "center", color: "white" }}>Инструктор</h3>
      <div className="instructor-img">
        <img className="individual-img-instructor" src={trainer} alt="" />
        <img className="individual-img-instructor-2" src={certificate} alt="" />
      </div>
      <h5 style={{ textAlign: "center", color: "white" }}>
        Теретаната располага со одличен инструкор, кој <br></br> e достапен во
        секое време за клиентите. Тој се стекна <br></br>со сертификат за фитнес
        инструкор на 23 Август 2019-та година!
      </h5>
      <hr></hr>
    </div>
  );
}

export default Instructor;
