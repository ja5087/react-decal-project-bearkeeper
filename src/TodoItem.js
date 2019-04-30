import React from 'react';
import './styles/todoItem.css';

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
            <form onSubmit={this.handleSubmit}>
            <input 
              className="todo-input"
              type={this.state.isEditable ? "text" : "button"} 
              onClick={this.onClickHandler} 
              onChange={this.onChangeHandler}
              value={this.state.text}/>
            <input 
              className="todo-input"
              type={this.state.isEditable ? "text" : "button"} 
              onClick={this.onClickHandler} 
              onChange={this.onDateChangeHandler}
              value={this.state.date}/>

            </form>
          </div>
        </div>
    );
  }
}
