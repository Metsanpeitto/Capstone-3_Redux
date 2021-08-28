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
  const { countriesFiltered, locationsFiltered, imgsFiltered } = filtersReducer;
  const [countriesOld, setCountriesOld] = useState(null);
  const [locationsOld, setLocationsOld] = useState(null);
  const [imgsOld, setImgsOld] = useState(null);

  const filter = (e) => {
    const { value } = e.target;
    const payload = { value, locations, imgs };
    dispatch(filterCountries(payload));
  };

  useEffect(() => {
    if (!countriesFiltered) {
      if (countries !== countriesOld || locations !== locationsOld) {
        setCountriesOld(countries);
        setLocationsOld(locations);
        setImgsOld(imgs);
      }
    } else if (countriesFiltered !== countriesOld) {
      setCountriesOld(countriesFiltered);
      setLocationsOld(locationsFiltered);
      setImgsOld(imgsFiltered);
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

      {locationsOld ? (
        <div className="displayer-countries">
          {countriesOld.map((c, index) => (
            <Link
              key={c}
              to={{
                pathname: `${process.env.PUBLIC_URL}/Details`,
                itemProps: {
                  countryName: c,
                  data: locationsOld[index],
                  img: imgsOld[index],
                },
              }}
              active="true"
              exact="true"
            >
              <Card
                cities={locationsOld[index]}
                img={imgsOld[index]}
                country={c}
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
