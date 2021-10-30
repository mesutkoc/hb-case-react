import React from "react";
import Image from "../../assets/image1.png";
import Cart from "../../assets/cart.png";

import { useSelector, useDispatch } from "react-redux";
import { basketSlice, deleteItem } from "redux/slices/Basket";

function Basket(hover) {
  const basketItems = useSelector((state) => state.basket.userBasket);
  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(deleteItem(item));
  };
  return (
    <div className={`userBasket ${hover.props}`}>
      {basketItems.length > 0 ? (
        basketItems.map((item) => (
          <div className="basketItem" key={item.id}>
            <div className="basketImageDiv">
              <img className="basketImage" src={Image} alt="basketImage" />
            </div>
            <div>
              <div className="basketItemDescription">{item.description}</div>
              <div className="basketItemRemove">
                <button
                  className="basketItemRemoveButton"
                  onClick={() => removeItem(item)}
                >
                  Kaldır
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="emptyCart">
          <div>
            <img src={Cart} alt="cartimage" className="cartImage"></img>
          </div>
          <div className="emptyCartMessage">Sepetin şu an boş</div>
        </div>
      )}
    </div>
  );
}

export default Basket;
