import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  setFiltersData,
} from "redux/slices/Products/";

import ProductComponent from "./ProductComponent";

function Productside() {
  const dispatch = useDispatch();
  let product = useSelector((state) => state.products.productsData);
  const searchedProduct = useSelector((state) => state.products.searchedData);
  if (searchedProduct.length >= 2) {
    const result = product.filter((item) =>
      item.model.includes(searchedProduct)
    );
    product = result;
    dispatch(setFiltersData(product));
  }
  else {
    dispatch(setFiltersData(product))
  }

  const currentPage = useSelector((state) => state.products.currentPage);
  const productPerPage = useSelector((state) => state.products.productPerPage);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = product.slice(indexOfFirstProduct, indexOfLastProduct);
  const renderProducts = currentProduct.map((product, index) => {
    return (
      <ProductComponent props={product} key={product.id}></ProductComponent>
    );
  });
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(product.length / productPerPage); i++) {
    pageNumbers.push(i);
  }
  const changePage = (data) => {
    dispatch(setCurrentPage(data));
  };
  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <div key={number} id={number} onClick={(e) => changePage(e.target.id)}>
        {number}
      </div>
    );
  });
  return (
    <div className="itemSide">
      <div className="items">{renderProducts}</div>
      {renderPageNumbers}
    </div>
  );
}

export default Productside;
