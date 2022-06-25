import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handlerFetchProducts } from "../slices/productSlice";
import ProductsList from "./ProductsList";
import Wishlist from './Wishlist';


const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handlerFetchProducts());
  }, []);

  return (
    <>
      <ProductsList />
      <Wishlist />
    </>
  );
};

export default Product;
