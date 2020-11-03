import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import AllCheese from './AllCheese';
import SingleCheese from './SingleCheese';

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products">
            <AllCheese />
          </Route>
          <Route path="/products/:id">
            <SingleCheese />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
