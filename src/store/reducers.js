import { combineReducers } from 'redux'
import todo from './toDo.reducers.js';
import tomatoTimer from './tomatoTimer.reducers.js';

const rootReducer = combineReducers({
  tomatoTimer,
  todo
})

export default rootReducer;
