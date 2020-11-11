import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CheeseDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setSingleProduct] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function loadCheese() {
      try {
        setLoading(true);
        const response = await axios.get(`/api/products/${id}`, {
          likes: likes,
        });
        const { data } = await response;
        console.log(data);
        setSingleProduct(data);
        setLoading(false);
      } catch (error) {
        console.log('err retrieving data', error);
      }
    }
    loadCheese();
  }, []);

  const { title, imageUrl, price, likes } = product;

  function handleClick(id, likes) {
    likes += 1;
    console.log(likes);
    updateLikes(id, likes);
  }

  async function updateLikes(id, likes) {
    try {
      setLoading(true);
      const response = await axios.put(`/api/products/${id}`, {
        likes: likes,
      });
      const { data } = await response;
      setSingleProduct(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log('err retrieving data', error);
    }
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error! Reload page please.</p>}
      {product && (
        <div className="cheese">
          <h1>{title}</h1>
          <img alt="cheese" src={imageUrl} />
          <p>Description: {product.description}</p>
          <p>Price: ${price.toFixed(2)}</p>
          <p>No. of Likes: {likes}</p>
          <button onClick={() => handleClick(id, likes)}>Add Like</button>
        </div>
      )}
    </>
  );
}
export default CheeseDetails;
