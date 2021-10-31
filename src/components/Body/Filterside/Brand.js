import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsersBrandFilter,
  setCurrentPage,
  setSearchedData,
} from "../../../redux/slices/Products";



function Brand() {
  const filter = useSelector((state) => state.products.defaultFiltersData);
  const dispatch = useDispatch();
  const [hover, setHover] = useState({ index: null, hovers: null });
  const setFilterWithBrand = (brand, id) => {
    dispatch(setUsersBrandFilter(brand));
    dispatch(setSearchedData(""));
    dispatch(setCurrentPage(1));
    id !== hover.index ? setHover({ index: id, hovers: true }) : setHover({});
  };

  return (
    <div className="brandFilter">
      <span className="filterHeader">Marka</span>
      <ul className="colorList">
        {filter.map((product, index) => (
          <li
            key={index}
            className={`filterItem ${hover.index === index && hover.hovers}`}
            onClick={() => setFilterWithBrand(product.brand, index)}
          >
            {product.brand} <span className="countSpan">({product.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Brand;
