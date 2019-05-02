import React from 'react';
import './styles/todolist.css';
import { ReactComponent as Check } from '../src/check.svg';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onDateChangeHandler = this.onDateChangeHandler.bind(this)
    this.state = {
        text: this.props.text,
        "isEditable": false,
        date: this.props.date
    }
  }

  onClickHandler(e) {
    e.preventDefault();
    if(!this.state.isEditable) {
        this.setState(prevState => ({
            "isEditable": true
        }));
    }
  }

  onChangeHandler(e) {
    e.preventDefault();
    this.setState({text: e.target.value});
  }
  onDateChangeHandler(e) {
    e.preventDefault();
    this.setState({date: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    let {id} = this.props;
    this.props.modifyHandler(id, this.state.text, this.state.date);
    this.setState(prevState => ({
        "isEditable": false
    }));
  }

  render() {
    let {id, text} = this.props
    return (
        <div className="card todo-item-container">
            <div className="todo-item-container-left">  
              <button onClick={this.props.toggleIsCompleted} type="button" className="todo-item-complete-button">
              { this.props.isComplete
                ? <div className="todo-item-circle todo-item-circle-check"><Check /></div>
                : <div className="todo-item-circle todo-item-circle-empty" />
              }
            </button>
              <form onSubmit={this.handleSubmit}>
              <input 
                className="todo-item-description"
                type={this.state.isEditable ? "text" : "button"} 
                onClick={this.onClickHandler} 
                onChange={this.onChangeHandler}
                value={this.state.text}/>
              <input 
                className="todo-item-description-date"
                type={this.state.isEditable ? "text" : "button"} 
                onClick={this.onClickHandler} 
                onChange={this.onDateChangeHandler}
                value={new Date(this.state.date).toLocaleDateString()}/>
              </form>
          </div>
        </div>
    );
  }
}
