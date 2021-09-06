import Finland from '../../imgs/finland.png';
import Norway from '../../imgs/norway.png';
import Sweden from '../../imgs/sweden.png';
import Denmark from '../../imgs/denmark.png';

const RECEIVE_LOCATIONS = 'locationStore/locations/RECEIVE_LOCATIONS';
const FETCH_CITIES = 'locationStore/locations/FETCH_CITIES';

export const fetchCities = (cities) => ({
  type: FETCH_CITIES,
  cities,
});

const initialState = {
  countries: ['Finland', 'Sweden', 'Norway', 'Denmark'],
  imgs: [Finland, Sweden, Norway, Denmark],
  locations: null,
  cities: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOCATIONS: {
      const { locations } = action;
      return {
        ...state, locations,
      };
    }
    case FETCH_CITIES: {
      const { cities } = action;
      return {
        ...state,
        cities,
      };
    }
    default:
      return state;
  }
};

export default reducer;
