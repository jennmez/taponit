import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SingleCheese({ product }) {
  console.log(product);
  return (
    <>
      <div>single cheese</div>
      {/* <div className="Cheese">
        <img alt="cheese" src={product.imageUrl} />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>${(product.price / 100).toFixed(2)}</p>
        <p>{product.likes}</p>
        <button>Add Like</button>
      </div> */}
    </>
  );
}
export default SingleCheese;
