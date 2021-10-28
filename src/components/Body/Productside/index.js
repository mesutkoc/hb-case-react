import React, { useState } from "react";
import "./style.css";
import Image1 from "../../../assets/image1.png";
// import Image2 from "../../../assets/image2.png";
// import Image3 from "../../../assets/image3.png";
// import Image4 from "../../../assets/image4.png";
import { useSelector } from "react-redux";

function Productside() {
  const [hover, setHover] = useState(false);
  const product = useSelector((state) => state.products.productsData);

  const calculateDiscount = (price, discount) => {
    const discountCash = (parseInt(price) * parseInt(discount)) / 100;
    const newPrice = price - discountCash;
    return [newPrice, discountCash];
  };
  const onMouseEnterHandler = (e) => {
    console.log(e);
    setHover(true);
  };
  const onMouseLeaveHandler = (e) => {
    console.log(e);
    setHover(false);
  };
  return (
    <div className="itemSide">
      <div className="items">
        {product.map((item) => (
          <div
            key={item.id}
            className="item "
            onMouseEnter={() => onMouseEnterHandler(item.id)}
            onMouseLeave={() => onMouseLeaveHandler(item.id)}
          >
            <div className="itemImageDiv">
              <img src={Image1} alt="item1" className="itemImage"></img>
            </div>
            <div className="itemDetail">
              <p className="itemDetailDescription">{item.description}</p>
              {hover === false ? (
                <div className="brandDiv">
                  <div className="brandDetail">
                    <span className="itemBrand">
                      Marka:
                      <span className="itemModelDetail">{item.brand}</span>
                    </span>
                    <span className="itemColor">
                      Renk:<span className="itemModelDetail">{item.color}</span>
                    </span>
                  </div>
                  <div className="priceDetail">
                    <span className="itemPrice">
                      {calculateDiscount(item.price, item.discount)[0]} TL
                    </span>
                    {parseInt(item.discount) !== 0 && (
                      <span className="discount">
                        <span className="itemDiscount">
                          {calculateDiscount(item.price, item.discount)[1]}
                        </span>
                        <span className="itemDiscountDetail">
                          {parseInt(item.discount) !== 0 && item.discount + "%"}
                        </span>
                      </span>
                    )}
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
        ))}
      </div>
    </div>
  );
}

export default Productside;
