export const ADD_TODO = 'ADD_TODO';
export const ADD_TOMATO_TODO = 'ADD_TOMATO_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER_TODO = 'SET_VISIBILITY_FILTER_TODO';
export const SET_ACTIVE_TODO = 'SET_ACTIVE_TODO';

/*
 * другие константы
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * генераторы действий
 */

export function addTodo(title, text) {
  return { type: ADD_TODO, text, title }
}

export function addTomatoTodo(index, tomato) {
  return { type: ADD_TOMATO_TODO, index, tomato }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER_TODO, filter }
}

export function setActiveTodo(index) {
  return { type: SET_ACTIVE_TODO, index }
}
