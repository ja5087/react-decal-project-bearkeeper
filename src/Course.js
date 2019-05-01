import React from 'react';
import './styles/addCollapsible.css';
import Collapsible from  'react-collapsible';
import TodoItem from './TodoItem';
import AddTodoItem from './AddTodoItem';

export default class Course extends React.Component {
  constructor(props) {
    super(props);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.modifyTodoItem = this.modifyTodoItem.bind(this);
    this.state = {
      nextId: 1,
      todoItems: [
        {
          id: 0,
          text: "This is the first todo for this class!",
          dueDate: new Date(),
          isComplete: false
        }
      ]
    }
    };

  addTodoItem(text, dueDate) {
    let newTodoItem = {
      id: this.state.nextId,
      text: text,
      dueDate: dueDate,
      isComplete: false
    }
    this.setState(prevState => ({
      nextId: prevState.nextId + 1,
      todoItems: [...prevState.todoItems, newTodoItem]
    }));
  }

  modifyTodoItem(id, newText, newDueDate) {
    this.setState(prevState => {

      let newTodoItems = [...prevState.todoItems];
      for(let i = 0; i < newTodoItems.length; i++) {
        if(newTodoItems[i].id == id) {
          newTodoItems[i].text = newText;
          newTodoItems[i].dueDate = newDueDate || newTodoItems[i].dueDate;
        }
      }

      return newTodoItems;

    });
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
            <TodoItem modifyHandler={this.modifyTodoItem} text={item.text} key={item.id} date={item.dueDate} 
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
