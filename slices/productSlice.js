import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../pages/api/product';
import { setMessage } from './messageSlice';
import wishlist from '../components/Wishlist';

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
  products: null,
  wishlist: []
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers:{
    addToWishlist: (state, action) => {
      state.wishlist = [action.payload, ...state.wishlist];
    }
  },
  extraReducers: {
    [handlerFetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [handlerFetchProducts.rejected]: (state, action) => {
      state.products = {};
    }
  },
});

export const { addToWishlist } = productSlice.actions;
const { reducer } = productSlice;
export default reducer;
