/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';
import { filterCountries } from '../redux/filter/filter';

function Displayer() {
  const dispatch = useDispatch();
  const { locationsReducer } = useSelector((state) => state);
  const { filtersReducer } = useSelector((state) => state);
  const { countries, imgs, locations } = locationsReducer;
  const { countriesFiltered } = filtersReducer;
  const [countriesOld, setCountriesOld] = useState(null);

  const filter = (e) => {
    const { value } = e.target;
    dispatch(filterCountries(value));
  };

  useEffect(() => {
    console.log(countries);
    if (!countriesFiltered) {
      if (countries !== countriesOld) {
        setCountriesOld(countries);
      }
    } else if (countriesFiltered !== countriesOld) {
      setCountriesOld(countriesFiltered);
    }
  });

  return (
    <div className="locations-displayer">
      <div className="stats">
        <h6 className="stats">STATS BY COUNTRY</h6>
        <select
          className="filter-category"
          placeholder="Category"
          onChange={filter}
          id="input-category"
          name="input-category"
        >
          <option value="-"> - </option>
          <option value="Finland">Finland</option>
          <option value="Sweden">Sweden</option>
          <option value="Norway">Norway</option>
          <option value="Denmark">Denmark</option>
        </select>
      </div>

      {locations ? (
        <div className="displayer-countries">
          {countries.map((c, index) => (
            <Link
              key={countries[index]}
              to={{
                pathname: './Details',
                itemProps: {
                  countryName: countries[index],
                  data: locations[0][countries[index]],
                  img: imgs[index],
                },
              }}
              active="true"
              exact="true"
            >
              <Card
                cities={locations[0].Finland}
                img={imgs[index]}
                country={countries[index]}
              />
            </Link>
          ))}
        </div>
      ) : (
        <h5 className="empty">Empty Collection</h5>
      )}
    </div>
  );
}

export default Displayer;
