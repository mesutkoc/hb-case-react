import { createSlice } from "@reduxjs/toolkit";

const productList = JSON.parse(localStorage.getItem("productList"));
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

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    defaultFiltersData: getFilters(productList),
    defaultColorsData: getColorFilters(productList),
    searchedData: "",
  },
  reducers: {
    setSearchedData: (state, action) => {
      state.searchedData = action.payload;
    },
  },
});
export const { setSearchedData } = filterSlice.actions;
export default filterSlice.reducer;
