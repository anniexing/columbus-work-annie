import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductsList = () => {
  const { products } = useSelector(state => state.products);

   return (
     <>
       <h4>{products && products.title}</h4>
       <Row xxs={1} xs={1} md={3} lg={3}  className="g-4">
         {products && products.lists && products.lists.map(item => (
           <ProductItem key={item.id} productItem={item} />
         ))}
       </Row>
     </>
   )
}

export default ProductsList;
