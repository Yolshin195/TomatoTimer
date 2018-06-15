import React from 'react';

const Todo = ({title, text, completed, completedTomato, lostTomato, onClick}) => (
  <li>
    <div class="collapsible-header">
      {title}
      <span class="badge">{completedTomato}</span>
      <span class="badge">{lostTomato}</span></div>
    <div class="collapsible-body"><p>{text}</p></div>
  </li>
)

export default Todo;
