/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { img, cities, country } = props;
  const city = cities[0];
  const {
    temp, tempMax, tempMin, main,
  } = city;
  return (
    <div className="card">
      <img src={img} alt="imagecountry" className="img-country" />
      <h4 className="name-country">{country}</h4>
      <h5 className="temperature-country">{temp}</h5>
      <h5 className="main-country">{main}</h5>
      <div className="max-min">
        <h6 className="temperature-min-country">{tempMin}</h6>
        <h6 className="temperature-max-country">{tempMax}</h6>
      </div>
    </div>
  );
}

export default Card;
Card.propTypes = { img: PropTypes.string.isRequired };
Card.propTypes = { cities: PropTypes.string.isRequired };
Card.propTypes = { country: PropTypes.string.isRequired };
