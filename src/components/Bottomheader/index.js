import "./style.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
function HeaderBottom() {
  const [hover, setHover] = useState(false);
  const searchedDataHeader = useSelector(state => state.products.searchedData)
  const userBrandFilterHeader = useSelector(
    (state) => state.products.usersBrandFilter
  );
  
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
          <span className="searchResultBold">
            {userBrandFilterHeader ? userBrandFilterHeader + " cep telefonları ": "Cep Telefonları"}
          </span>
          <span className="searchResultSpan">
            Aranan kelime:
            <span className="modelSpan"> {searchedDataHeader}</span>
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
