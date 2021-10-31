import "./style.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
function HeaderBottom() {
  const [hover, setHover] = useState(false);
  const filterStatus = useSelector(
    (state) => state.products.usersSortingFilter
  );
  const toggleSorting = (hover) => {
    setHover(hover);
  };
  return (
    <div className="headerBottomContainer">
      <div className="headerBottomElements">
        <div className="searchContent">
          <span className="searchResultBold"> iPhone iOS cep telefonu</span>
          <span className="searchResultSpan">
            Aranan kelime: <span className="modelSpan">iphone 11</span>
          </span>
        </div>
        <div className="headerBottomSorting">
          <button
            type="button"
            className="sortingButton"
            onClick={() => toggleSorting(!hover)}
          >
            {filterStatus === null ? "Sıralama" : filterStatus}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
