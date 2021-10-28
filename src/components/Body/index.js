import React from "react";
import "./style.css";
import Filterside from "./Filterside";
import Productside from "./Productside";

function Body() {
  return (
    <div className="screen">
      <Filterside></Filterside>
      <Productside></Productside>
    </div>
  );
}

export default Body;
