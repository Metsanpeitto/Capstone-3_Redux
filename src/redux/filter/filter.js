const FILTER_COUNTRIES = 'locationStore/filter/FILTER_COUNTRIES';
const FILTER_REFRESH = 'locationStore/filter/FILTER_REFRESH';

const initialState = {
  countriesFiltered: null,
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
      const value = action.payload;
      const { countries } = state;
      let newCountries = [];
      if (countries.length > 0) {
        if (value === '-') {
          newCountries = null;
        } else {
          countries.forEach((c) => {
            if (c === value) {
              newCountries.push(c);
            }
          });
        }
      }
      return {
        countriesFiltered: newCountries,
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
