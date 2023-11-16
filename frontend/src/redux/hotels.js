import { createSlice } from "@reduxjs/toolkit";

export const hotelsInCartSlice = createSlice({
  name: "hotelInCart",
  initialState: {
    hotels: [],
    loading: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.hotels.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.hotels = state.hotels.filter(
        (hotels) => hotels.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart, setHotelsInCart } =
  hotelsInCartSlice.actions;

export default hotelsInCartSlice.reducer;