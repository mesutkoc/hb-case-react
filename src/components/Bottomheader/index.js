import "./style.css";
import React, { useState } from "react";

function HeaderBottom() {
    const [hover, setHover] = useState(false);
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
            Sıralama
            <i className="vector">
              <svg
                width="11"
                height="5"
                viewBox="0 0 11 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.34375 0L5.34375 5L10.3438 0L0.34375 0Z"
                  fill="#BDBDBD"
                />
              </svg>
            </i>
          </button>
          {hover === true && (
            <div className="sortingList">
              <span className="listItem">
                ✓<span className="listItem1">En Düşük Fiyat</span>
              </span>
              <span className="listItem">
                ✓<span className="listItem1">En Yüksek Fiyat</span>
              </span>
              <span className="listItem">
                ✓<span className="listItem1">En Yeniler (A{">"}Z)</span>
              </span>
              <span className="listItem">
                ✓<span className="listItem1">En Yeniler (Z{">"}A)</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
