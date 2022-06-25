import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import messageReducer from '../slices/messageSlice';
import wishlistReducer from '../slices/wishlistSlice';
import { loadState } from '../utils/localStorage';

const reducer = {
  products: productReducer,
  wishlist: wishlistReducer,
  messages: messageReducer
};

console.log(loadState());

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
