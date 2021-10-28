import { configureStore } from "@reduxjs/toolkit";
import products from "redux/slices/Products";
console.log(products)
export const store = configureStore({
    reducer: {
        products,
    }
})