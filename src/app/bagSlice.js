import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bag: [],
  wish: [],
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
      const removeItem = state.bag.filter((item) => item.id != action.payload);
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
    addToWishlist: (state, action) => {
      state.wish.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.wish.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToBag,
  removeFromBag,
  increaseItems,
  decreaseItems,
  addToWishlist,
  removeFromWishlist,
} = bagSlice.actions;

export default bagSlice.reducer;
