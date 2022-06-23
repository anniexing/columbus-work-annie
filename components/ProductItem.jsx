import { Card, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../slices/productSlice';

const ProductItem = ({ productItem }) => {
  const dispatch = useDispatch();
  const onAddProductToWishList = () => {
    dispatch(addToWishlist(productItem));
  }
  return (
    <Col>
      <Card>
        <Card.Img src={productItem.picture} alt={productItem.name} variant="top"  />
        <Card.Body>
          <Card.Title>{productItem.name}</Card.Title>
          <Card.Text>
            {productItem.summary}
          </Card.Text>
          <Card.Text>
            {productItem.details}
          </Card.Text>
          <Button variant="primary" onClick={onAddProductToWishList}>Add to list</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductItem;
