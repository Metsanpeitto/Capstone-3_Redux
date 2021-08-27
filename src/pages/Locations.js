/* eslint-disable no-unused-vars */
import React from 'react';
import Displayer from '../components/Displayer';
import Scandinavia from '../imgs/scandinavia.png';

const Locations = () => (
  <div className="locations">
    <div className="head">
      <div className="head-left">
        <img src={Scandinavia} alt="continent" className="continent" />
      </div>
      <div className="head-right">
        <h4 className="title">Scandinavia</h4>
        <h6 className="Countries">4 Countries</h6>
      </div>
    </div>
    <Displayer />
  </div>
);
export default Locations;
