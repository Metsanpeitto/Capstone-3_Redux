import React from 'react';
import { Link } from 'react-router-dom';
import Next from '../imgs/next.svg';
import Mic from '../imgs/microphone.svg';
import Settings from '../imgs/settings.svg';

const Navbar = () => (
  <nav className="navBar">
    <div className="header">
      <Link
        to="/"
        active="true"
        exact="true"
      >
        <img src={Next} alt="return" className="arrow-left" />
      </Link>
      <h6 className="header-title">cities</h6>
      <img src={Mic} alt="mic" className="mic" />
      <img src={Settings} alt="settings" className="settings" />
    </div>
  </nav>
);
export default Navbar;
