import React from "react";
import { useSelector } from "react-redux";

function Brand() {
  const filter = useSelector((state) => state.filters.defaultFiltersData);
  return (
    <div className="brandFilter">
      <span className="filterHeader">Marka</span>
      <ul className="colorList">
        {filter.map((product,index) => (
            <li key={index} className="filterItem">
            {product.brand} <span className="countSpan">({product.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Brand;
