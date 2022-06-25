import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BsX } from 'react-icons/bs';
import { deleteProductFormWishlist } from '../slices/wishlistSlice';
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { wishlist, totalPrice } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const onDeleteProductInWishlist = (e, productItem) => {
    dispatch(deleteProductFormWishlist(productItem));
  }
  return (
    <>
      {wishlist && wishlist.length > 0 && (
        <Card className={styles.wishlist}>
          <Card.Header className={styles.header}>Wishlist</Card.Header>
          <ListGroup className={styles.list}>
            {wishlist.map((item) => (
              <ListGroup.Item className={styles.list_item} key={item.id}>{item.name} <BsX onClick={(e) => onDeleteProductInWishlist(e, item)} /></ListGroup.Item>
            ))}
            <b className={styles.total_price}>
              Total Price: {totalPrice}:-
            </b>

          </ListGroup>
        </Card>
      )}
    </>
  );
};

export default Wishlist;
