import { createSlice } from "@reduxjs/toolkit";

export const setProducts = (data) => {
  return data;
};
export const getFilters = (data) => {
  const brandList = [];
  if (data) {
    data.map((item) =>
      brandList.some((value) => value.brand === item.brand)
        ? brandList.map((data) => data.brand === item.brand && data.count++)
        : brandList.push({ brand: item.brand, count: 1 })
    );
    return brandList;
  }
};
export const getColorFilters = (data) => {
  const colorList = [];
  if (data) {
    data.map((item) =>
      colorList.some((value) => value.color === item.color)
        ? colorList.map((data) => data.color === item.color && data.count++)
        : colorList.push({ color: item.color, count: 1 })
    );
    return colorList;
  }
};

export const productSlice = createSlice({
  name: "products",
  initialState: {
    productsData: setProducts(JSON.parse(localStorage.getItem("productList"))),
    currentPage: 1,
    productPerPage: 12,
    defaultFiltersData: getFilters(
      JSON.parse(localStorage.getItem("productList"))
    ),
    defaultColorsData: getColorFilters(
      JSON.parse(localStorage.getItem("productList"))
    ),
    searchedData: "",
  },
  reducers: {
    setCurrentPage: (state, action) => {
      console.log(action.payload);
      state.currentPage = action.payload;
    },
    setSearchedData: (state, action) => {
      state.searchedData = action.payload;
    },
    setFiltersData: (state, action) => {
      state.defaultFiltersData = getFilters(action.payload);
      state.defaultColorsData = getColorFilters(action.payload);
    },

  },
});
export const { setCurrentPage, setSearchedData, setFiltersData, setProductsData } =
  productSlice.actions;
export default productSlice.reducer;
