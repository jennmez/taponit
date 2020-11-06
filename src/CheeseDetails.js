import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import UpdateLikesForm from './UpdateLikesForm';

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
        // dispatch({ type: 'setCheeseList', products: data });
        console.log(data);
        setSingleProduct(data);
        // console.log(data);
        setLoading(false);
      } catch (error) {
        console.log('err retrieving data', error);
      }
    }
    loadCheese();
  }, []);

  const { title, imageUrl, price, likes } = product;

  function handleClick(id, likes) {
    console.log('hello');
    likes += 1;
    console.log(likes);
    updateLikes(id, likes);
  }

  // useEffect(() => {
  async function updateLikes(id, likes) {
    try {
      setLoading(true);
      const response = await axios.put(`/api/products/${id}`, {
        likes: likes,
      });
      const { data } = await response;
      // dispatch({ type: 'setCheeseList', products: data });
      setSingleProduct(data);
      // console.log('response', data);
      setLoading(false);
    } catch (error) {
      console.log('err retrieving data', error);
    }
  }
  // }, [id, likes]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error! Reload page please.</p>}
      {product && (
        <div className="Cheese">
          Hello
          <h1>{title}</h1>
          <img alt="cheese" src={imageUrl} />
          <p>Description: {product.description}</p>
          <p>Price: ${price.toFixed(2)}</p>
          {/* <UpdateLikesForm likes={likes} id={id} /> */}
          <p>No. of Likes: {likes}</p>
          <button onClick={() => handleClick(id, likes)}>Add Like</button>
        </div>
      )}
    </>
  );
}
export default CheeseDetails;
