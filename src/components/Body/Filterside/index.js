import React from "react";
import "./style.css";
import Brand from "./Brand";

function Filterside() {
  return (
    <div className="filterSide">
      <div className="colorFilter">
        <span className="filterHeader">Renk</span>
        <ul className="colorList">
          <li className="filterItem">
            Pembe <span className="countSpan">(5)</span>
          </li>
          <li className="filterItem">
            Siyah <span className="countSpan">(5)</span>
          </li>
          <li className="filterItem">
            Beyaz <span className="countSpan">(5)</span>
          </li>
          <li className="filterItem">
            Kırmızı <span className="countSpan">(5)</span>
          </li>
        </ul>
      </div>
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
