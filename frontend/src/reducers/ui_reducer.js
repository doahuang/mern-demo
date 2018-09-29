import { combineReducers } from 'redux';
import modal from './modal_reducer';
import map from './map_reducer';
import filters from './filters_reducer';

export default combineReducers({
  modal,
  filters,
  map
});