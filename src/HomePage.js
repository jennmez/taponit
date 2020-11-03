import './App.css';
import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import AllCheese from './AllCheese';

// function cheeseReducer(state, action) {
//   switch (action.type) {
//     case 'setCheeseList': {
//       return action.data;
//     }
//     default:
//       return state;
//   }
// }

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cheese, setCheese] = useState([]);
  // const [products, dispatch] = useReducer(cheeseReducer, []);

  useEffect(() => {
    async function loadCheese() {
      try {
        setLoading(true);
        const response = await axios.get('/api/products');
        const { data } = await response;
        // dispatch({ type: 'setCheeseList', products: data });
        setCheese(data);
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
      <h1>Cheeses Too Gouda To Pass Up!</h1>
      <AllCheese products={cheese} />
    </>
  );
}

export default HomePage;
