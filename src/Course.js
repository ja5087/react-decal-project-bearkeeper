import React from 'react';
import './styles/addCollapsible.css';
import Collapsible from  'react-collapsible';
import TodoItem from './TodoItem';
import AddTodoItem from './AddTodoItem';
import moment from "moment";
import uuid from "uuid";

export default class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    }
    this.props.dbref.collection("todos").onSnapshot(snapshot => {
      this.setState({
        todoItems: snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}))
      })});


    this.addTodoItem = this.addTodoItem.bind(this);
    this.modifyTodoItem = this.modifyTodoItem.bind(this);
    this.toggleItemIsCompleted = this.toggleItemIsCompleted.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this)
    }
  

  addTodoItem(text, dueDate) {
    let newTodoItem = {
      description: text,
      dueDate: dueDate,
      isComplete: false
    }

    this.props.dbref.collection("todos").add(newTodoItem);
  }

  modifyTodoItem(id, newDescription, newDueDate) {
    this.props.dbref.collection("todos").doc(id).set({
      description: newDescription,
      dueDate: newDueDate
    }, { merge: true });
  }

  toggleItemIsCompleted(id, newIsComplete) {
    this.props.dbref.collection("todos").doc(id).set({
      isComplete: newIsComplete
    }, { merge: true });
  };

  deleteTodoItem(id) {
    this.props.dbref.collection("todos").doc(id).delete()
  };

  render() {

    return (
      <div className="center">
        <Collapsible trigger={this.props.title}>
          {this.state.todoItems.map(item => 
            <TodoItem modifyHandler={this.modifyTodoItem} text={item.data.description} key={item.id} id={item.id} date={item.data.dueDate} 
            toggleIsCompleted={this.toggleItemIsCompleted}
            isComplete={item.data.isComplete} 
            deleteTodoItem={this.deleteTodoItem} />)}
          <AddTodoItem addTodoItem={this.addTodoItem} />
          <button onClick={() => this.props.deleteCollapsible(this.props.id)} class="ui extra icon button"><i aria-hidden="true" class="trash alternate outline icon"></i></button>
        </Collapsible>
      <br/>
      <br></br>
      </div>
    );
  }
}
