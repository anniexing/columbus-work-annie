import { Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Wishlist = () => {
  const { wishlist } = useSelector(state => state.products);
  return (
    <Card className="wishlist">
      <Card.Header>Wishlist</Card.Header>
      <ListGroup className="list-group-flush">
        {wishlist.map(item => (
          <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}

export default Wishlist;
