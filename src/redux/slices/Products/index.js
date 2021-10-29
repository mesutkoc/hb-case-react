import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        productsData: JSON.parse(localStorage.getItem("productList")),
        currentPage: 1,
        productPerPage:12,
    },
    reducers: {
        setCurrentPage: (state, action) => {
            console.log(action.payload)
            state.currentPage = action.payload
        }
    }
})
export const { setCurrentPage } = productSlice.actions;
export default productSlice.reducer;