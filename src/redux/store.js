import { configureStore } from "@reduxjs/toolkit";
import products from "redux/slices/Products";
import filters from "redux/slices/Filters";

export const store = configureStore({
    reducer: {
        products,
        filters
    }
})