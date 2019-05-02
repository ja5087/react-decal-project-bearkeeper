import React from 'react';
import { ReactComponent as Plus } from '../src/plus.svg';
import '../src/styles/todoItem.css';
import moment from "moment";

export default class AddTodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoItemValue: '',
      date: moment().format("YYYY-MM-DD") // initialize to empty string
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
      this.setState({ newTodoItemValue: "", date: moment().format("YYYY-MM-DD") });
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
            required={true}
            className="todo-input"
          />
          <input type="date"
            id="date_picker"
            placeholder="Add the Due Date..."
            onChange={this.handleDateChange}
            value={moment(this.state.date).format("YYYY-MM-DD")}
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
