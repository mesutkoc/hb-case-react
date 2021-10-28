import React, { useState } from "react";
import "./style.css"
import Image1 from "../../../assets/image1.png";
// import Image2 from "../../../assets/image2.png";
// import Image3 from "../../../assets/image3.png";
// import Image4 from "../../../assets/image4.png";

function Productside() {
  const [hover, setHover] = useState(false);
  const onMouseEnterHandler = () => {
    setHover(true);
  };

  const onMouseLeaveHandler = () => {
    setHover(false);
  };
  return (
    <div className="itemSide">
      <div className="items">
        <div
          className="item"
          onMouseEnter={() => onMouseEnterHandler()}
          onMouseLeave={() => onMouseLeaveHandler()}
        >
          <div className="itemImageDiv">
            <img src={Image1} alt="item1" className="itemImage"></img>
          </div>
          <div className="itemDetail">
            <p className="itemDetailDescription">
              Iphone 11 128 GB Kırmızı Iphone 11 128 GB Kırmızı Iphone 11 128 GB
              Kırmızı
            </p>
            {hover === false ? (
              <div>
                <div className="brandDetail">
                  <span className="itemBrand">
                    Marka:<span className="itemModelDetail">Apple</span>
                  </span>
                  <span className="itemColor">
                    Renk:<span className="itemModelDetail">Siyah</span>
                  </span>
                </div>
                <div className="priceDetail">
                  <span className="itemPrice">2000 TL</span>
                  <span className="itemDiscount">
                    124,00 TL<span className="itemDiscountDetail">27%</span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="addBasketButton">
                <button
                  className="addButton"
                  onClick={() => console.log("done")}
                >
                  Sepete Ekle
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productside;
