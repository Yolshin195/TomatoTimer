import { combineReducers } from 'redux'
import { 
  ADD_TODO,
  ADD_TOMATO_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER_TODO,
  SET_ACTIVE_TODO,
  VisibilityFilters 
} from './toDo.actions';
const { SHOW_ALL } = VisibilityFilters
const initState = [
  {
    title: 'Test task',
    text: 'test task text',
    completed: false,
    lostTomato: 0,
    completedTomato: 0
  }
];

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER_TODO:
      return action.filter
    default:
      return state
  }
}

function todos(state = initState,action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          title: action.title,
          text: action.text,
          completed: false,
          lostTomato: 0,
          completedTomato: 0
        }
      ]
    case ADD_TOMATO_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          var obj = {};
          if(action.tomato) {
            obj.completedTomato = todo.completedTomato + 1; 
          } else {
            obj.lostTomato = todo.lostTomato + 1;
          }
          return Object.assign({}, todo, obj);
        }
        return todo;
      }) 
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoReducers = combineReducers({
  visibilityFilter,
  todos
})

export default todoReducers;
