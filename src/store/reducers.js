import { combineReducers } from 'redux'
import todo from './toDo.reducers.js';
import tomatoTimer from './tomatoTimer.reducers.js';
import navbar from './navbar.reducers';

const rootReducer = combineReducers({
  tomatoTimer,
  todo,
  navbar
})

export default rootReducer;
