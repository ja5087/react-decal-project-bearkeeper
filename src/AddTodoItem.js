import React from 'react';

export default class AddTodoItem extends React.Component {
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
    if (this.state.newTodoItemValue !== '') { 
      this.props.addTodoItem(this.state.newTodoItemValue);
      this.setState({ newTodoItemValue: '' });
    }
  }

  render() {
    return (
      <div className="todo-input-container">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add a new todo for this course..."
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
