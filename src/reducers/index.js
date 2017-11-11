import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import artworks from './artworks';
import search from './search';

export default combineReducers({
  routing: routerReducer,
  artworks,
  search,
});

