import { combineReducers } from 'redux'
import { 
  ADD_TODO,
  ADD_TOMATO_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER_TODO,
  SET_CURRENT_TODO,
  REMOVE_TODO,
  VisibilityFilters 
  
} from './toDo.actions';
import { 
  ACTION_NEXT_TIMER,
  ACTION_STOP_TIMER
} from './tomatoTimer.actions.js';

const { SHOW_ALL } = VisibilityFilters
const initState = {
  currentTask: 0,
  todos: [
    {
      title: 'finalize the task list',
      text: 'force the "task completion" button to work',
      completed: true,
      lostTomato: 0,
      completedTomato: 0
    },
    {
      title: 'Test task1',
      text: 'test task text',
      completed: false,
      lostTomato: 0,
      completedTomato: 0
    },
    {
      title: 'Test task2',
      text: 'test task text',
      completed: false,
      lostTomato: 0,
      completedTomato: 0
    }
  ]
}
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER_TODO:
      return action.filter
    default:
      return state
  }
}

function isCurrentTask(currentTask, todos) {
  if (!todos[currentTask] || todos[currentTask].completed) {
    for (let i = 0; i < todos.length; i++) {
      if ( todos[i].completed === false) {
        return i; 
      }
    }
  }

  return currentTask
}

function todos(state = initState, action) {
  let currentTask = state.currentTask;
  let todos = [];

  switch (action.type) {
    case ADD_TODO:
      todos = [
        ...state.todos,
        {
          title: action.title,
          text: action.text,
          completed: false,
          lostTomato: 0,
          completedTomato: 0
        }
      ];
      currentTask = isCurrentTask(currentTask, todos);
      return{
        ...state,
        todos,
        currentTask
      }
    case ADD_TOMATO_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index && !todo.completed) {
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
      }
    case REMOVE_TODO:
        todos = state.todos.filter((todo, index) => 
          index !== action.index
        ) 
        currentTask = isCurrentTask(currentTask, todos); 
      return {
        ...state,
        todos,
        currentTask
      }
    case TOGGLE_TODO:
      todos = state.todos.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      });
      currentTask = isCurrentTask(currentTask, todos);

      return { 
        ...state,
        todos: todos, 
        currentTask
      }
    case SET_CURRENT_TODO:
      return {
        ...state,
        currentTask: action.index
      }
    case ACTION_NEXT_TIMER: {
      console.log(ACTION_NEXT_TIMER, state);
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === state.currentTask && !todo.completed) {
            return Object.assign({}, todo, {
              lostTomato: todo.lostTomato + 1 
            })
          }
          return todo
        })
      };
    } 
    case ACTION_STOP_TIMER: {
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === state.currentTask && !todo.completed) {
            return Object.assign({}, todo, {
              completedTomato: todo.completedTomato + 1 
            })
          }
          return todo
        })
      };
    } 
    default:
      currentTask = isCurrentTask(currentTask, state.todos);
      return {
        ...state,
        currentTask
      } 
  }
}

const todoReducers = combineReducers({
  visibilityFilter,
  todos
})

export default todoReducers;
