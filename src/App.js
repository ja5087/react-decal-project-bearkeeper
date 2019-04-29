import React, { Component } from 'react';
import AddCollapsible from './AddCollapsible';
import Course from './Course';
import './styles/App.css';
import TodoItem from './TodoItem';


class App extends Component {
  constructor(props) {
    super(props);
    this.addCollapsible = this.addCollapsible.bind(this);
      this.state = {
        collapsibles: []
      };
    }
    addCollapsible(title){
      const newCollapsible = {
        course: title
      };
      this.setState(prevState => ({
        collapsibles:[...prevState.collapsibles, newCollapsible],
      }));
    }
  render() {
    return (
      <div>
        <header>
          <h4>Welcome to BearKeeper! Your time saviour at Berkeley </h4>
        </header>
        <div className="items-container">
            {this.state.collapsibles.map(x => (<Course title={x.course} />))}
          </div>
        <footer>
          <AddCollapsible addCollapsible={this.addCollapsible}  />
        </footer>
      </div>
    );
  }
}

export default App;
