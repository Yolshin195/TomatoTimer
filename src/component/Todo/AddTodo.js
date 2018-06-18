import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/toDo.actions';

class AddTodo extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  onToggle() {
    if(this.state.toggle) {
      this.setState({toggle: false});
    } else {
      this.setState({toggle: true});
    }
  }

  render() {
    let input;
    let textarea;
    const { dispatch } = this.props;
    const { toggle } = this.state;
    if(toggle === true)
      return(
        <div>
          <div className="modal open modal__open">
            <form
             onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim() || !textarea.value.trim()) {
                return
              }
              dispatch(addTodo(input.value, textarea.value));
              input.value = '';
              textarea.value = '';
              this.onToggle.call(this);
            }}>
              <div className="modal-content">
                <h3>New task</h3>
                <input
                  type="text"
                  ref={node => {input = node}}
                  placeholder="Task title"
                />
                <textarea
                  ref={node => {textarea = node}}
                  placeholder="Task description"
                >
                </textarea>
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Add
                </button>
                <a
                  className="modal-close waves-effect waves-green btn-flat"
                  onClick={this.onToggle.bind(this)}
                >Close</a>
          
              </div>
            </form>
          </div>
          <div
            className="modal-overlay modal-overlay__open"
            onClick={this.onToggle.bind(this)}
          ></div>
        </div>
      );
    else
      return(
        <a
          class="todo-add__position btn-floating btn-large waves-effect waves-light white"
          onClick={this.onToggle.bind(this)}
        >
          <i class="material-icons material-icons__white">add</i>
        </a> 
      );
  }
};

export default connect()(AddTodo);
