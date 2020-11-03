import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cheese, setCheese] = useState([]);

  useEffect(() => {
    async function loadCheese() {
      try {
        setLoading(true);
        const response = await axios.get('/api/products');
        const { data } = await response;
        console.log(data);
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
      <div className="App">
        <p>Hello</p>
      </div>
    </>
  );
}

export default App;
