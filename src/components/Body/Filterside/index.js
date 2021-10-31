import React from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import Brand from "./Brand";
import Color from "./Color"
import {
  setSortingFilter
} from "redux/slices/Products/";
function Filterside() {
  const dispatch = useDispatch();
  const setUserSortingFilter = (type) => {
    dispatch(setSortingFilter(type));
  };
  return (
    <div className="filterSide">
      <Color></Color>
      <div className="sorting">
        <span className="filterHeader">Sıralama</span>
        <ul className="colorList">
          <li
            className="filterItem"
            onClick={() => setUserSortingFilter("En Düşük Fiyat")}
          >
            En Düşük Fiyat
          </li>
          <li
            className="filterItem"
            onClick={() => setUserSortingFilter("En Yüksek Fiyat")}
          >
            En Yüksek Fiyat
          </li>
          <li
            className="filterItem"
            onClick={() => setUserSortingFilter("En Yeniler A>Z")}
          >
            En Yeniler (A{">"}Z)
          </li>
          <li
            className="filterItem"
            onClick={() => setUserSortingFilter("En Yeniler Z>A")}
          >
            En Yeniler (Z{">"}A)
          </li>
        </ul>
      </div>
      <Brand></Brand>
    </div>
  );
}

export default Filterside;
