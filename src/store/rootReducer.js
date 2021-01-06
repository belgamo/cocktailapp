import { combineReducers } from 'redux';

import favorites from './modules/favorites/reducer';

export default combineReducers({
  favorites,
});
