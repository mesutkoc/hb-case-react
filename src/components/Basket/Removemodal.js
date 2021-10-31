import React from "react";
import Image from "../../assets/image1.png";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItem,
  setModalStatus,
  setDeletedItemClear,
} from "redux/slices/Basket";
function Removemodal() {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.basket.modalStatus);
  const deletedProduct = useSelector((state) => state.basket.deletedItem);
  const removeItem = () => {
    dispatch(deleteItem(deletedProduct));
    dispatch(setModalStatus(false));
    dispatch(setDeletedItemClear(0));
  };
  const cancelModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setDeletedItemClear(0));
  };
  return (
    <div className={`removeModal ${modalStatus}`}>
      <div className="modalMessage">
        Ürünü silmek istediğinize emin misiniz?
      </div>
      <div className="productDescription">
        {deletedProduct.map((item) => (
          <div className="description" key={item.id}>
            <div className="imageDiv">
              <img src={Image} alt="modalImage" className="modalImage"></img>
            </div>
            <div className="productDetail">
              <p className="description">{item.description}</p>
              <p className="price">{item.price} TL</p>
            </div>
          </div>
        ))}
      </div>
      <div className="buttonGroup">
        <button className="acceptDelete" onClick={() => removeItem()}>
          Evet
        </button>
        <button className="cancelDelete" onClick={() => cancelModal()}>
          Hayır
        </button>
      </div>
    </div>
  );
}

export default Removemodal;
