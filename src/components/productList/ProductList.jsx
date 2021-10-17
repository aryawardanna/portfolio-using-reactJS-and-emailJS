import Product from '../product/Product';
import './productList.css';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Arya</h1>
        <p className="pl-desc">
          Arya is a creative portfolio that your word has been waiting Beautiful
          homes, stunning portfolio styles & a whole lot more inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
