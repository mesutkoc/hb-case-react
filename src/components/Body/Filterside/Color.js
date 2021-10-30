import React from "react";
import { useSelector } from "react-redux";

function Color() {
  const color = useSelector((state) => state.products.defaultColorsData);

  return (
    <div className="colorFilter">
      <span className="filterHeader">Renk</span>
      <ul className="colorList">
        {color.map((item,index) => (
          <li className="filterItem" key={index}>
            {item.color} <span className="countSpan">({item.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Color;
