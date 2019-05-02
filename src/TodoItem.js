import React from 'react';
import './styles/todolist.css';
import { ReactComponent as Check } from '../src/check.svg';
import moment from "moment";
import uuid from "uuid";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDateClickHandler = this.onDateClickHandler.bind(this);
    this.onTodoClickHandler = this.onTodoClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onDateChangeHandler = this.onDateChangeHandler.bind(this)
    this.state = {
        text: this.props.text,
        date: this.props.date,
        "todoEditable": false,
        "dateEditable": false
    }
  }

  onDateClickHandler(e) {
    e.preventDefault();
    if(!this.state.isEditable) {
        this.setState(prevState => ({
            "dateEditable": true
        }));
    }
  }

  onTodoClickHandler(e) {
    e.preventDefault();
    if(!this.state.isEditable) {
        this.setState(prevState => ({
            "todoEditable": true
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
        "todoEditable": false,
        "dateEditable": false
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
                type={this.state.todoEditable ? "text" : "button"} 
                onClick={this.onTodoClickHandler} 
                onChange={this.onChangeHandler}
                value={this.state.text}/>
              <input 
                className={moment().isBefore(this.state.date)? "notdue": "overdue"}
                type={this.state.dateEditable ? "date" : "button"} 
                onClick={this.onDateClickHandler} 
                onChange={this.onDateChangeHandler}
                value={moment(this.state.date).format("YYYY-MM-DD")}/>
              <input type="submit" id="form_submit"/>
              </form>
          </div>
        </div>
    );
  }
}
