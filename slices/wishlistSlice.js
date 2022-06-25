import { createSlice } from '@reduxjs/toolkit';

const calculateTotalPrice = (list) => {
  let total = 0;
  if(list){
    total = list.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.current_price,
      0
    );
  }

  return total;
}

const initialState = {
  wishlist: [],
  totalPrice: 0
}
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist = [action.payload, ...state.wishlist];
      state.totalPrice = calculateTotalPrice(state.wishlist);
    },
    deleteProductFormWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
      state.totalPrice = calculateTotalPrice(state.wishlist);
    }
  },
});

export const { addToWishlist, deleteProductFormWishlist} = wishlistSlice.actions;
const { reducer } = wishlistSlice;
export default reducer;
