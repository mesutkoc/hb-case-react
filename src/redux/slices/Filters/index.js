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

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filtersData: getFilters(productList),
  },
  reducers: {},
});

export default filterSlice.reducer;
