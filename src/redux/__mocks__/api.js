import locations from './locations';

const RECEIVE_LOCATIONS = 'locationStore/locations/RECEIVE_LOCATIONS';

export const receiveLocations = (locations) => ({
  type: RECEIVE_LOCATIONS,
  locations,
});

export const getLocations = () => (dispatch) => {
  dispatch(receiveLocations(locations));
  return locations;
};
