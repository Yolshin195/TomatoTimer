import React from 'react';

const Todo = ({currentTask, title, text, completed, completedTomato, lostTomato, onCompleted, onSetCurrentTask, onRemove}) => (
  <li>
    <div className="collapsible-header">
      <i
        className="icon-currentTask"
        style={{display: (currentTask) ? 'block' : 'none'}}
      />
      {
        (currentTask) ? 
          <h5 style={{margin:0}}>{title}</h5>
        :
          <p
            style={{margin:0}}
            className="todo-currentTask__active"
            onClick={onSetCurrentTask}
          >
            {title}
          </p>
      }
      <span className="badge">
      </span>
      <span className="grey-text text-darken-1">
        <i
          className="icon-tomato"
          style={{'margin-right':0}}
        />
      </span>
      <span className="grey-text text-darken-1">
        x {completedTomato}
      </span>
      <span style={{'margin-left': '10px'}}>
        <i
          className="icon-minus"
          style={{'margin-right':0}}
        />
      </span>
      <span className="grey-text text-darken-1">
       x {lostTomato}
      </span>
      <p style={{margin:0, 'margin-left': '15px'}}>
        <label>
          <input
            type="checkbox"
            onChange={onCompleted}
            checked={completed}
          />
          <span
            className="todo-completed_btn"
            style={{'padding-left': '22px'}}
          >Completed</span>
        </label>
      </p>
      <span
        className="grey-text text-darken-1"
        style={{'margin-left': '10px'}}
      >
        <i
          className="icon-delete"
          style={{'margin-right':0}}
          onClick={onRemove}
        />
      </span>
    </div>
    <div className="collapsible-body" style={{display: (currentTask) ? 'block' : 'none'}}>
      <p>{text}</p>
    </div>
  </li>
)

export default Todo;
