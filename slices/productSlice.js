import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../pages/api/product";
import { setMessage } from "./messageSlice";

export const handlerFetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (param, thunkAPI) => {
    try {
      const data = await fetchProducts(param);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  products: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [handlerFetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [handlerFetchProducts.rejected]: (state, action) => {
      state.products = {};
    },
  },
});

const { reducer } = productSlice;
export default reducer;
