import './App.css';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import HomePage from './HomePage';
import CheeseList from './CheeseList';
import CheeseDetails from './CheeseDetails';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products/:id">
            <CheeseDetails />
          </Route>
          <Route path="/products">
            <CheeseList />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
