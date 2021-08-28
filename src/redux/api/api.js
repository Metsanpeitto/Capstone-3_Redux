import api from '../../api/api';

const RECEIVE_LOCATIONS = 'locationStore/locations/RECEIVE_LOCATIONS';

export const receiveLocations = (locations) => ({
  type: RECEIVE_LOCATIONS,
  locations,
});

export const getLocations = () => (dispatch) => {
  let oldLocations = null;
  if (!oldLocations) {
    api.getLocations().then((locations) => {
      dispatch(receiveLocations(locations));
      oldLocations = locations;
    });
  } else {
    setTimeout(() => {
      dispatch(receiveLocations(oldLocations), 1000);
    });
  }
  return oldLocations;
};
