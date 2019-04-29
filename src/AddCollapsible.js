import React from 'react';
import Course from './Course'
import './styles/addCollapsible.css';

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
    if (this.state.newTodoItemValue !== '') { 
      this.props.addCollapsible(this.state.newTodoItemValue)
      this.setState({ newTodoItemValue: '' });
    }
  }

  render() {
    return (
      <div className="todo-input-container">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add a Course..."
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
