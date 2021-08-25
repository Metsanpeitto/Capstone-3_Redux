import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import locationsReducer from './locations/locations';

const reducer = combineReducers({
  locationsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
