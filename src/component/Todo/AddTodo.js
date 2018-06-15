import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/toDo.actions';

const AddTodo = ({dispatch}) => { 
  let input;
  let textarea;

  return(
    <div>
      <form
       onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim() || !textarea.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, textarea.value));
        input.value = '';
        textarea.value = '';
      }}>
        <input type="text" ref={node => {input = node}}/>
        <textarea ref={node => {textarea = node}}>
        </textarea>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
