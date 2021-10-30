import React from "react";
import "./style.css";
import Brand from "./Brand";
import Color from "./Color"

function Filterside() {
  return (
    <div className="filterSide">
      <Color></Color>
      <div className="sorting">
        <span className="filterHeader">Sıralama</span>
        <ul className="colorList">
          <li className="filterItem">En Düşük Fiyat</li>
          <li className="filterItem">En Yüksek Fiyat</li>
          <li className="filterItem">En Yeniler (A{">"}Z)</li>
          <li className="filterItem">En Yeniler (Z{">"}A)</li>
        </ul>
      </div>
      <Brand></Brand>
    </div>
  );
}

export default Filterside;
