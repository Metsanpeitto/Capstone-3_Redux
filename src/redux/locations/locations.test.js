import reducer from './locations';
import { receiveLocations } from '../__mocks__/api';
import locations from '../__mocks__/locations';
import Finland from '../../imgs/finland.png';
import Norway from '../../imgs/norway.png';
import Sweden from '../../imgs/sweden.png';
import Denmark from '../../imgs/denmark.png';

test('returns the initial state', () => {
  const initialState = {
    countries: ['Finland', 'Sweden', 'Norway', 'Denmark'],
    imgs: [Finland, Sweden, Norway, Denmark],
    locations: null,
    cities: null,
  };

  const stateNew = reducer(undefined, {});

  expect(stateNew).toEqual(initialState);
});

test('returns the received locations', () => {
  const initialState = {
    countries: ['Finland', 'Sweden', 'Norway', 'Denmark'],
    imgs: [Finland, Sweden, Norway, Denmark],
    locations: null,
    cities: null,
  };

  const stateNew = reducer(initialState, receiveLocations(locations));
  expect(stateNew).toEqual({
    countries: ['Finland', 'Sweden', 'Norway', 'Denmark'],
    imgs: [Finland, Sweden, Norway, Denmark],
    locations,
    cities: null,
  });
});
