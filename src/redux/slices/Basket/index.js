import { createSlice } from "@reduxjs/toolkit";

export const removeItem = (currentData, removedData) => {
  const userBasket = currentData.filter((item) => item.id !== removedData.id);
  return userBasket;
};
export const addItemToBasket = (currentData, addedData) => {
  currentData = [...currentData, addedData];
  return currentData;
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    userBasket: [],
    modalStatus: false,
    deletedItem:[]
  },
  reducers: {
    addItem: (state, action) => {
      const userBasket = addItemToBasket(state.userBasket, action.payload);
      state.userBasket = userBasket;
      localStorage.setItem("basket", JSON.stringify(state.userBasket));
    },
    deleteItem: (state, action) => {
      const userBasket = removeItem(state.userBasket, action.payload[0]);
      state.userBasket = userBasket;
      localStorage.setItem("basket", JSON.stringify(state.userBasket));
    },
    setModalStatus: (state, action) => {
      state.modalStatus = action.payload;
    },
    setDeletedItem: (state, action) => {
      state.deletedItem.push(action.payload);
    },
    setDeletedItemClear: (state, action) => {
      state.deletedItem.length=action.payload;
    }
  },
});

export const {
  addItem,
  deleteItem,
  setModalStatus,
  setDeletedItem,
  setDeletedItemClear,
} = basketSlice.actions;
export default basketSlice.reducer;
