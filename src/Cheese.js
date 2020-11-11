import React from 'react';
import { Link } from 'react-router-dom';

function Cheese(props) {
  const { title, imageUrl, price, id } = props.product;

  return (
    <>
      <div className="cheese">
        <img className="pic" alt="cheese" src={imageUrl} />
        <h3 className="title">
          <Link to={`/products/${id}`}>{title}</Link>
        </h3>
        <p>Price: ${price.toFixed(2)}</p>
      </div>
    </>
  );
}
export default Cheese;
