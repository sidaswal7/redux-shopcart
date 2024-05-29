import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [{
  id:'a1',
  title:'first book',
  description:'This is a book about attaining mastery',
  price: 10
},{
  id:'a2',
  title:'Second book',
  description:'This is a book about managing emotions',
  price: 8
},{
  id:'a3',
  title:'Third book',
  description:'This is a book about consistency',
  price: 12
}]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(product =>(
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
