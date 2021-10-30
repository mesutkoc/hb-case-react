import { configureStore } from "@reduxjs/toolkit";
import products from "redux/slices/Products";
import basket from "redux/slices/Basket";

export const store = configureStore({
    reducer: {
        products,
        basket
        
    }
})