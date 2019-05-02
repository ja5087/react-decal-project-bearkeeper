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
    this.props.dbref.collection("todos").get().then(snapshot => {
      this.setState({
        todoItems: snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}))
      })});


    this.addTodoItem = this.addTodoItem.bind(this);
    this.modifyTodoItem = this.modifyTodoItem.bind(this);
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

  toggleItemIsCompleted(itemId) {
    let a = this.state.todoItems
    for (let i = 0; i < a.length; i++) {
      if (a[i].id === itemId) {
        if (a[i].isComplete == true){
          a[i].isComplete = false
        }
        else {
          a[i].isComplete = true
        }
      }
    }
    this.setState(prevState => ({
      todoItems: a
    }));
  };

  render() {
    return (
      <div className="center">
        <Collapsible trigger={this.props.title}>
          {this.state.todoItems.map(item => 
            <TodoItem modifyHandler={this.modifyTodoItem} text={item.data.description} key={item.id} id={item.id} date={item.data.dueDate} 
            toggleIsCompleted={() => this.toggleItemIsCompleted(item.id)}
            isComplete={item.isComplete} />)}
          <AddTodoItem addTodoItem={this.addTodoItem} />
        </Collapsible>
      <br/>
      <br></br>
      </div>
    );
  }
}
