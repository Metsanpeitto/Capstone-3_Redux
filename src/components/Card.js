import React from 'react';

function Card() {
  return (
    <div className="card">
      <img src="./" alt="imagecountry" className="img-country" />
      <h4 className="name-country">Italy</h4>
      <h5 className="temperature-country">24 C</h5>
      <h5 className="main-country">Clear</h5>
      <h6 className="temperature-min-country">11 C</h6>
      <h6 className="temperature-max-country">30 C</h6>
    </div>
  );
}

export default Card;
