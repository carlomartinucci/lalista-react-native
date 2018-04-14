import { combineReducers } from 'redux';

import people from './people';
import ranking from './ranking';
import words from './words';
import points from './points';
import ui from './ui';
import notification from './notification';

const reducer = combineReducers({
  people,
  ranking,
  words,
  points,
  ui,
  notification,
});

export default reducer;
