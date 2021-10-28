import React from "react";
import "./style.css";

import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

function Productside() {

  const product = useSelector((state) => state.products.productsData);

  return (
    <div className="itemSide">
      <div className="items">
        {product.map((item) => (
          <ProductComponent props={item} key={item.id}></ProductComponent>
        ))}
      </div>
    </div>
  );
}

export default Productside;
