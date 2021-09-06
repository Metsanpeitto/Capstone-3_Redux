const FILTER_COUNTRIES = 'locationStore/filter/FILTER_COUNTRIES';
const FILTER_REFRESH = 'locationStore/filter/FILTER_REFRESH';

const initialState = {
  countriesFiltered: null,
  locationsFiltered: null,
  imgs: null,
  value: '-',
  countries: ['Finland', 'Sweden', 'Norway', 'Denmark'],
};

export const filterCountries = (payload) => ({
  type: FILTER_COUNTRIES,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_COUNTRIES: {
      const { value, locations, imgs } = action.payload;
      console.log(action);
      const { countries } = state;
      let newCountries = [];
      let newLocations = [];
      let newImgs = [];
      if (countries.length > 0) {
        if (value === '-') {
          newCountries = null;
          newLocations = null;
          newImgs = null;
        } else {
          countries.forEach((c, index) => {
            if (c === value) {
              newCountries.push(c);
              newLocations.push(locations[index]);
              newImgs.push(imgs[index]);
            }
          });
        }
      }
      return {
        countriesFiltered: newCountries,
        locationsFiltered: newLocations,
        imgsFiltered: newImgs,
        value,
        countries,
      };
    }
    case FILTER_REFRESH: {
      const { value, countries } = state;
      let newCountries = countries;
      if (countries) {
        if (countries.length > 0) {
          if (value !== '-') {
            newCountries = [];
            countries.forEach((c) => {
              if (c.category === value) {
                newCountries.push(c);
              }
            });
          }
        }
      }

      return {
        countriesFiltered: newCountries,
        value,
        countries,
      };
    }
    default:
      return state;
  }
};

export default reducer;
