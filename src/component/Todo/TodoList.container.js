import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleTodo, setCurrentTodo, removeTodo} from '../../store/toDo.actions'

import TodoList from './TodoList';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const putStateToProps = (state) => {
  console.log(state);
  return {
    todos: getVisibleTodos(state.todo.todos.todos, state.todo.visibilityFilter),
    currentTask: state.todo.todos.currentTask
  }
}

const putActionsToProps = (dispatch) => {
  return {
    onTodoClick: bindActionCreators(toggleTodo, dispatch),
    onSetCurrentTask: bindActionCreators(setCurrentTodo, dispatch),
    onRemoveTodo: bindActionCreators(removeTodo, dispatch)
  }
}

export default connect(putStateToProps, putActionsToProps)(TodoList);
