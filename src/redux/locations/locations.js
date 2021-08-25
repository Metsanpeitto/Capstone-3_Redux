const RECEIVE_LOCATIONS = 'locationStore/locations/RECEIVE_LOCATIONS';

const initialState = { locations: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOCATIONS: {
      const { locaitons } = action;
      return { locaitons };
    }
    default:
      return state;
  }
};

export default reducer;
