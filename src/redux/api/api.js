import api from '../../api/api';

const RECEIVE_LOCATIONS = 'locationStore/locations/RECEIVE_LOCATIONS';

export const receiveLocations = (locations) => ({
  type: RECEIVE_LOCATIONS,
  locations,
});

export const getLocations = () => (dispatch) => {
  api.getLocations().then((locations) => {
    dispatch(receiveLocations(locations));
    return locations;
  });
};
