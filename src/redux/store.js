import { configureStore } from "@reduxjs/toolkit";
import products from "redux/slices/Products";
export const store = configureStore({
    reducer: {
        products,
    }
})