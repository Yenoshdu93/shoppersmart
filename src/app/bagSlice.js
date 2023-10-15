import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bag: [],
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addToBag: (state, action) => {
      const exists = state.bag.find((item) => item.id === action.payload.id);
      if (exists) {
        exists.quantity++;
      } else {
        const item = { ...action.payload, quantity: 1 };
        state.bag.push(item);
      }
    },

    removeFromBag: (state, action) => {
      const removeItem = state.bag.filter((item) => item != action.payload);
      state.bag = removeItem;
    },
    increaseItems: (state, action) => {
      const item = state.bag.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decreaseItems: (state, action) => {
      const item = state.bag.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const { addToBag, removeFromBag, increaseItems, decreaseItems } =
  bagSlice.actions;

export default bagSlice.reducer;
