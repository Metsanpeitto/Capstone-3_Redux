import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <h1 className="title">Weather App</h1>
    <ul className="menuNav">
      <li key={1}>
        <Link to="/" active="true" exact="true">
          LOCATIONS
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
