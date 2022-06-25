import { useEffect, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { addToWishlist } from "../slices/wishlistSlice";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import styles from "./ProductItem.module.css";

const ProductItem = ({ productItem }) => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const productInWishlist = wishlist.filter(
      (item) => item.id === productItem.id
    );
    if (productInWishlist && productInWishlist.length > 0) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [wishlist]);

  const onAddProductToWishList = () => {
    dispatch(addToWishlist(productItem));
  };

  const onToggleDetails = (e) => {
    e.preventDefault();
    setIsShowDetails(!isShowDetails);
  };

  return (
    <Col className={styles.product}>
      <Card>
        <Card.Img
          src={productItem.picture}
          alt={productItem.name}
          variant="top"
        />
        <Card.Body>
          <Card.Title>{productItem.name}</Card.Title>
          <Card.Text>{productItem.summary}</Card.Text>
        </Card.Body>
        <Card.Body className={styles.detail}>
          <Card.Header
            className={styles.detail_header}
            onClick={(e) => onToggleDetails(e)}
          >
            {isShowDetails && <BsChevronUp />}
            {!isShowDetails && <BsChevronDown />} See Information
          </Card.Header>
          {isShowDetails && <Card.Text>{productItem.details}</Card.Text>}
        </Card.Body>
        <Card.Body>
          <Card.Text as="div">
            <b
              className={cn(
                styles.current_price,
                productItem.current_price === productItem.original_price
                  ? styles.black_color
                  : ""
              )}
            >{`${productItem.current_price}:-`}</b>
            {productItem.current_price !== productItem.original_price && (
              <b className={styles.original_price}>
                {productItem.original_price}
              </b>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Body className="center">
          <Button variant="primary" onClick={onAddProductToWishList} disabled={isButtonDisabled}>
            Add to list
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
