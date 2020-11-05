import React from 'react';
import { Link, useHistory, useRouteMatch, useParams } from 'react-router-dom';

function Cheese(props) {
  // console.log(product);
  const { title, imageUrl, price, id } = props.product;
  // let history= useHistory()
  // let { url } =useRouteMatch()
  return (
    <>
      <div className="cheese">
        <img className="pic" alt="cheese" src={imageUrl} />
        <h2 className="title">
          <Link to={`/products/${id}`}>{title}</Link>
        </h2>
        <p>Price: ${price.toFixed(2)}</p>
      </div>
    </>
  );
}
export default Cheese;
