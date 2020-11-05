// import './CheeseList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Cheese from './Cheese';

function CheeseList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  // const [products, dispatch] = useReducer(cheeseReducer, []);

  useEffect(() => {
    async function loadCheese() {
      try {
        setLoading(true);
        const response = await axios.get('/api/products');
        const { data } = await response;
        // dispatch({ type: 'setCheeseList', products: data });
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log('err retrieving data', error);
      }
    }
    loadCheese();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error! Reload page please.</p>}
      <div className="cheese">
        {products.map((product) => (
          <Cheese key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
export default CheeseList;
