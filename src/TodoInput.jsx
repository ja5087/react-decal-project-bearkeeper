import React from 'react';
import '../src/todoInput.css';

export default class AddCollapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoItemValue: '', // initialize to empty string
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      newTodoItemValue: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newTodoItemValue !== '') { // form value is not empty
      this.setState({ newTodoItemValue: '' }); // clear back to empty string
    }
  }

  render() {
    return (
      <div className="todo-input-container">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add Task..."
            value={this.state.newTodoItemValue}
            onChange={this.handleChange}
            className="todo-input"
          />
          <button type="submit" className="todo-input-button">
          </button>
        </form>
      </div>
    );
  }
}
