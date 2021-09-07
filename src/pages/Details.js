import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCities } from '../redux/locations/locations';

function Details(props) {
  const dispatch = useDispatch();
  const { locationsReducer } = useSelector((state) => state);
  const { cities } = locationsReducer;
  const [citiesOld, setCitiesOld] = useState(null);

  const { location } = props;
  const { itemProps } = location;
  const { countryName, data, img } = itemProps;

  useEffect(() => {
    if (!cities) {
      dispatch(fetchCities(data));
    }
    if (data !== citiesOld) {
      setCitiesOld(data);
    }
  });

  return (
    <div className="details">
      <div className="head">
        <div className="head-left">
          <img src={img} alt="country" className="continent" />
        </div>
        <div className="head-right">
          <h4 className="title">{countryName}</h4>
          <h6 className="cities">5 Cities</h6>
        </div>
      </div>
      <div className="details-displayer">
        <div className="stats">
          <h6 className="stats">CITY/TOWN BREAKDOWN</h6>
        </div>
        {citiesOld
          ? citiesOld.map((c) => (
            <div className="details-city" key={c.name}>
              <h4 className="city-name">{c.name}</h4>
              <h5 className="city-temp">{c.temp}</h5>
              <div className="city-max-min">
                <h5 className="city-temp-min">{c.tempMin}</h5>
                /
                <h5 className="city-temp-max">{c.tempMax}</h5>
              </div>
            </div>
          ))
          : null}
      </div>
    </div>
  );
}

export default Details;
Details.propTypes = { countryName: PropTypes.string.isRequired };
Details.propTypes = { data: PropTypes.string.isRequired };
Details.propTypes = { img: PropTypes.string.isRequired };
Details.propTypes = { location: PropTypes.string.isRequired };
