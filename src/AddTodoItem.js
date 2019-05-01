import React from 'react';
import { ReactComponent as Plus } from '../src/plus.svg';
import '../src/styles/todoItem.css';


export default class AddTodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoItemValue: '',
      date: 0 // initialize to empty string
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      newTodoItemValue: e.target.value
    });
  }
  handleDateChange(e) {
    this.setState({
      date: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newTodoItemValue !== '') { 
      this.props.addTodoItem(this.state.newTodoItemValue, this.state.date);
      this.setState({ newTodoItemValue: '', date: 0 });
    }
  }

  render() {
    return (
      <div className="card todo-input-container">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add a new todo for this course..."
            value={this.state.newTodoItemValue}
            onChange={this.handleChange}
            className="todo-input"
          />
          <input type="date"
            placeholder="Add the Due Date..."
            value={this.state.date}
            onChange={this.handleDateChange}
            className="todo-input"
          />
          <button type="submit" className="todo-input-button">
          <Plus />
          </button>
        </form>
      </div>
    );
  }
}
