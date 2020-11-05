import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Cheeses</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
