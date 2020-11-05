import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function CheeseDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setSingleProduct] = useState('');
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function loadCheese() {
      try {
        setLoading(true);
        const response = await axios.get(`/api/products/${id}`);
        const { data } = await response;
        // dispatch({ type: 'setCheeseList', products: data });
        setSingleProduct(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log('err retrieving data', error);
      }
    }
    loadCheese();
  }, [id]);

  // console.log(product);
  const { title, imageUrl, price, likes } = product;

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error! Reload page please.</p>}
      <div className="Cheese">
        Hello
        <h1>{title}</h1>
        <img alt="cheese" src={imageUrl} />
        <p>Description: {product.description}</p>
        <p>${price.toFixed(2)}</p>
        <p>No. of Likes: {likes}</p>
        <button>Add Like</button>
      </div>
    </>
  );
}
export default CheeseDetails;
