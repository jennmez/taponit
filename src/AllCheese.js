import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllCheese({ products }) {
  console.log(products);
  return (
    <>
      <div>all cheese </div>
      {/* <div className="Cheese">
        {products.map((product) => (
          <div key={product.id}>
            <img alt="cheese" src={product.imageUrl} />
            <Link to={`/products/${product.id}`}>{product.title}</Link>
            <p>${(product.price / 100).toFixed(2)}</p>
          </div>
        ))}
      </div> */}
    </>
  );
}
export default AllCheese;
