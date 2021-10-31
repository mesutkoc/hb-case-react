import React, { useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  setDefaultFilter,
  setDefaultFiltersData,
} from "redux/slices/Products/";
import ProductComponent from "./ProductComponent";
import { calculateDiscount } from "components/functions";

function Productside() {
  const dispatch = useDispatch();
  let product = useSelector((state) => state.products.productsData);
  let sortingFilter = useSelector((state) => state.products.usersSortingFilter);
  let userColorFilter = useSelector((state) => state.products.usersFilterList);
  const currentPage = useSelector((state) => state.products.currentPage);
  const productPerPage = useSelector((state) => state.products.productPerPage);
  const [hover, setHover] = useState({ index: null, hovers: null });

  let userBrandFilter = useSelector((state) => state.products.usersBrandFilter);

  if (userColorFilter && userBrandFilter) {
    let colorFilter = product.filter(
      (item) => item.color === userColorFilter && item.brand === userBrandFilter
    );
    product = colorFilter;
  } else if (userBrandFilter) {
    let colorFilter = product.filter((item) => item.brand === userBrandFilter);
    product = colorFilter;
    dispatch(setDefaultFilter(product));
  } else if (userColorFilter) {
    let colorFilter = product.filter((item) => item.color === userColorFilter);
    product = colorFilter;
    dispatch(setDefaultFiltersData(product));
  } else if (sortingFilter) {
    switch (sortingFilter) {
      case "En Yüksek Fiyat":
        product = [...product];
        product.sort((a, b) =>
          calculateDiscount(a.price, a.discount)[0] <
          calculateDiscount(b.price, b.discount)[0]
            ? 1
            : -1
        );
        break;
      case "En Düşük Fiyat":
        product = [...product];
        product.sort((a, b) =>
          calculateDiscount(a.price, a.discount)[0] >
          calculateDiscount(b.price, b.discount)[0]
            ? 1
            : -1
        );
        break;
      case "En Yeniler A>Z":
        product = [...product];
        product.sort((a, b) => (a.createdDate < b.createdDate ? 1 : -1));
        break;
      case "En Yeniler Z>A":
        product = [...product];
        product.sort((a, b) => (a.createdDate > b.createdDate ? 1 : -1));
        break;
      default:
        break;
    }
  } else {
    dispatch(setDefaultFilter(product));
    dispatch(setDefaultFiltersData(product));
  }
  const searchedProduct = useSelector((state) => state.products.searchedData);
  if (searchedProduct.length >= 2) {
    const result = product.filter((item) =>
      item.model.toLowerCase().includes(searchedProduct)
    );
    product = result;
  }

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = product.slice(indexOfFirstProduct, indexOfLastProduct);
  const renderProducts = currentProduct.map((product) => {
    return (
      <ProductComponent props={product} key={product.id}></ProductComponent>
    );
  });
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(product.length / productPerPage); i++) {
    pageNumbers.push(i);
  }
  const changePage = (data, id) => {
    dispatch(setCurrentPage(data));
    id !== hover.index ? setHover({ index: id, hovers: true }) : setHover({});
  };
  const renderPageNumbers = pageNumbers.map((number, index) => {
    return (
      <div
        className={`pageNumber ${hover.index === index && hover.hovers}`}
        key={number}
        id={number}
        onClick={(e) => changePage(e.target.id, index)}
      >
        {number}
      </div>
    );
  });
  return (
    <div className="itemSide">
      <div className="items">{renderProducts}</div>
      <div className="pageNumbers">{renderPageNumbers}</div>
    </div>
  );
}

export default Productside;
