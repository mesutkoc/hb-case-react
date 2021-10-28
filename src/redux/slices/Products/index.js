import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        productsData:JSON.parse(localStorage.getItem("productList"))
    },
    reducers:{}
})

export default productSlice.reducer;