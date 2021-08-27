import api from '../../api/api';

const RECEIVE_LOCATIONS = 'locationStore/locations/RECEIVE_LOCATIONS';

export const receiveLocations = (locations) => ({
  type: RECEIVE_LOCATIONS,
  locations,
});

export const getLocations = () => (dispatch) => {
  // eslint-disable-next-line spaced-comment
  //let oldLocations = JSON.parse(localStorage.getItem('locations'));
  // eslint-disable-next-line spaced-comment
  let oldLocations = null;
  if (!oldLocations) {
    api.getLocations().then((locations) => {
      dispatch(receiveLocations(locations));
      // eslint-disable-next-line indent
     // localStorage.setItem('locations', JSON.stringify(locations));
      oldLocations = locations;
    });
  } else {
    setTimeout(() => {
      dispatch(receiveLocations(oldLocations), 1000);
    });
  }
  return oldLocations;
};
