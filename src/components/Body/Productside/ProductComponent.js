import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/slices/Basket";

import Image1 from "../../../assets/image1.png";
// import Image2 from "../../../assets/image2.png";
// import Image3 from "../../../assets/image3.png";
// import Image4 from "../../../assets/image4.png";

function ProductComponent(item) {
  const dispatch = useDispatch();
  const [hover, setHover] = useState({ id: null, hovers: null });
  const calculateDiscount = (price, discount) => {
    const discountCash = (parseInt(price) * parseInt(discount)) / 100;
    const newPrice = price - discountCash;
    return [newPrice, discountCash];
  };
  const onMouseEnterHandler = (id) => {
    setHover({ id: id, hovers: true });
  };
  const onMouseLeaveHandler = () => {
    setHover({ id: null, hovers: false });
  };
  const addItemToBasket = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <div
        key={item.props.id}
        className={`item ${hover.id === item.props.id && hover.hovers}`}
        onMouseEnter={() => onMouseEnterHandler(item.props.id)}
        onMouseLeave={() => onMouseLeaveHandler()}
      >
        <div
          className={`itemImageDiv ${
            hover.id === item.props.id && hover.hovers
          }`}
        >
          <img src={Image1} alt="item1" className="itemImage"></img>
        </div>
        <div className="itemDetail">
          <p className="itemDetailDescription">{item.props.description}</p>

          <div
            className={`brandDiv ${hover.id === item.props.id && hover.hovers}`}
          >
            <div className="brandDetail">
              <span className="itemBrand">
                Marka:
                <span className="itemModelDetail">{item.props.brand}</span>
              </span>
              <span className="itemColor">
                Renk:<span className="itemModelDetail">{item.props.color}</span>
              </span>
            </div>
            <div className="priceDetail">
              <span className="itemPrice">
                {calculateDiscount(item.props.price, item.props.discount)[0]} TL
              </span>
              {parseInt(item.props.discount) !== 0 && (
                <span className="discount">
                  <span className="itemDiscount">
                    {calculateDiscount(
                      item.props.price,
                      item.props.discount
                    )[1] + " TL"}
                  </span>
                  <span className="itemDiscountDetail">
                    {parseInt(item.props.discount) !== 0 &&
                      item.props.discount + "%"}
                  </span>
                </span>
              )}
            </div>
          </div>
          <div
            className={`addBasketButton ${
              hover.id === item.props.id && hover.hovers
            }`}
          >
            <button
              className="addButton"
              onClick={() => addItemToBasket(item.props)}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
