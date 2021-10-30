import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    userBasket: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.userBasket=[...state.userBasket,action.payload]
    },
    deleteItem: (state, action) => {
    const userBasket=  state.userBasket.filter(item => item.id !== action.payload.id);
      state.userBasket = userBasket;
    }
  },
});

export const { addItem, deleteItem } = basketSlice.actions;
export default basketSlice.reducer;
