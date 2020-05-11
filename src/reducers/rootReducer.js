import {combineReducers} from 'redux';
import inReducer from './inReducer.js';
import deReducer from './deReducer.js';
var rootReducer = combineReducers({
  inReducer,
  deReducer
});
export default rootReducer;
