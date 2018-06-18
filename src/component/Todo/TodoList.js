import React from 'react';
import Todo from './Todo';

const TodoList = ({currentTask, todos, onRemoveTodo, onTodoClick, onSetCurrentTask }) => (
  <ul className="collapsible">
    {todos.map((todo, index) =>
      <Todo
        key={index}
        currentTask={(currentTask === index) ? true : false}
        {...todo}
        onCompleted={() => onTodoClick(index)}
        onSetCurrentTask={()=>onSetCurrentTask(index)}  
        onRemove={()=>onRemoveTodo(index)}
      />
    )}
  </ul>
)

export default TodoList;
