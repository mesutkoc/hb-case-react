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
export const getSortingFilter = (data, type) => {
  data = type;
  return data;
};
export const getCurrentPage = (data, type) => {
  data = type;
  return data;
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
    usersFilterList: "",
    usersBrandFilter: "",
    usersSortingFilter: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = getCurrentPage(state.currentPage,action.payload);
    },
    setDefaultFilter: (state, action) => {
      state.defaultColorsData = getColorFilters(action.payload);
    },
    setDefaultFiltersData: (state, action) => {
      state.defaultFiltersData = getFilters(action.payload);
    },
    setSearchedData: (state, action) => {
      state.searchedData = action.payload;
    },
    setUsersFilterList: (state, action) => {
      if (state.usersFilterList !== action.payload) {
        state.usersFilterList = action.payload;
      } else {
        state.usersFilterList = "";
      }
    },
    setUsersBrandFilter: (state, action) => {
      if (state.usersBrandFilter !== action.payload) {
        state.usersBrandFilter = action.payload;
      } else {
        state.usersBrandFilter = "";
      }
    },
    setSortingFilter: (state, action) => {
      state.usersSortingFilter = getSortingFilter(state.usersSortingFilter,action.payload);
    }
  },
});
export const {
  setCurrentPage,
  setSearchedData,
  setProductsData,
  setUsersFilterList,
  setUsersBrandFilter,
  setDefaultFilter,
  setDefaultFiltersData,
  setSortingFilter,
} = productSlice.actions;
export default productSlice.reducer;
