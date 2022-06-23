import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import messageReducer from '../slices/messageSlice';

const reducer = {
  products: productReducer,
  messages: messageReducer
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
