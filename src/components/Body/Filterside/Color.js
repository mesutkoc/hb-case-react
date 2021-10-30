import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsersFilterList,
  setCurrentPage,
} from "../../../redux/slices/Products";

function Color() {
  const dispatch = useDispatch();
  const [hover, setHover] = useState({ index: null, hovers: null });
  const color = useSelector((state) => state.products.defaultColorsData);
  const setFilterWithColor = (color, id) => {
    dispatch(setUsersFilterList(color));
    dispatch(setCurrentPage(1));
    id !== hover.index ? setHover({ index: id, hovers: true }) : setHover({});
  };

  return (
    <div className="colorFilter">
      <span className="filterHeader">Renk</span>
      <ul className="colorList">
        {color.map((item, index) => (
          <li
            className={`filterItem ${hover.index === index && hover.hovers}`}
            key={index}
            onClick={() => setFilterWithColor(item.color, index)}
          >
            {item.color} ({item.count})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Color;
