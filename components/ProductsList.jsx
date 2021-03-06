import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductsList = () => {
  const { products } = useSelector(state => state.products);

   return (
     <>
       <h3 className="center">{products && products.title}</h3>
       <Row xxs={1} xs={2} s={2} md={3} lg={3}>
         {products && products.lists && products.lists.map(item => (
           <ProductItem key={item.id} productItem={item} />
         ))}
       </Row>
     </>
   )
}

export default ProductsList;
