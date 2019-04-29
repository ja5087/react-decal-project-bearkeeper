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
          dueDate: "4/29/19",
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

  render() {
    return (
      <div>
        <Collapsible trigger={this.props.title}>
          {this.state.todoItems.map(item => 
            <TodoItem modifyHandler={this.modifyTodoItem} text={item.text} key={item.id} date={item.dueDate} />)}
          <AddTodoItem addTodoItem={this.addTodoItem} />
        </Collapsible>
      <br/>
      <br></br>
      </div>
    );
  }
}
