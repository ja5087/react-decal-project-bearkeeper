import React from 'react';
import './styles/todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
        text: this.props.text,
        "isEditable": false
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

  handleSubmit(e) {
    e.preventDefault();
    let {id} = this.props;
    this.props.modifyHandler(id, this.state.text);
    this.setState(prevState => ({
        "isEditable": false
    }));
  }

  render() {
    let {id, text} = this.props
    return (
        <div>      
            <form onSubmit={this.handleSubmit}>
            <input 
              className="todo-input"
              type={this.state.isEditable ? "text" : "button"} 
              onClick={this.onClickHandler} 
              onChange={this.onChangeHandler}
              value={this.state.text}/>
            </form>
        </div>
    );
  }
}
