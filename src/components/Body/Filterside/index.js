import React from "react";
import "./style.css"
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
      <div className="brandFilter">
        <span className="filterHeader">Marka</span>
        <ul className="colorList">
          <li className="filterItem">
            Samsung <span className="countSpan">(5)</span>
          </li>
          <li className="filterItem">
            Apple <span className="countSpan">(5)</span>
          </li>
          <li className="filterItem">
            LG <span className="countSpan">(5)</span>
          </li>
          <li className="filterItem">
            Xiaomi <span className="countSpan">(5)</span>
          </li>
          <li className="filterItem">
            Huawei <span className="countSpan">(5)</span>
          </li>
          <li className="filterItem">
            General Mobile <span className="countSpan">(5)</span>
          </li>
          <li className="filterItem">
            Nokia <span className="countSpan">(5)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filterside;
