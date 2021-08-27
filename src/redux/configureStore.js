import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import locationsReducer from './locations/locations';
import filtersReducer from './filter/filter';

const reducer = combineReducers({
  locationsReducer,
  filtersReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
