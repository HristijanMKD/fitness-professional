import React from "react";

import Bedge from "./bedge/begde";
import Gallery from "./gallery/gallery";
import MiniAbout from "./mini-about/mini-about";
import Instructor from "./instructor/insctructor";
import Introducing from "./introducing/introdoucing";
import Location from "./location/location";

function Main() {
  return (
    <div>
      <Bedge />
      <Introducing />
      <MiniAbout />
      <Gallery />
      <Instructor />
      <Location />
    </div>
  );
}

export default Main;
