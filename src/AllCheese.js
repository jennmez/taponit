import './AllCheese.css';
import { Link } from 'react-router-dom';

function AllCheese({ products }) {
  return (
    <>
      <div className="cheese">
        {products.map((product) => (
          <div key={product.id}>
            <img className="pic" alt="cheese" src={product.imageUrl} />
            <h2 className="title">
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h2>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default AllCheese;
