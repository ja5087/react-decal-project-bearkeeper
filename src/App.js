import React, { Component } from 'react';
import AddCollapsible from './AddCollapsible';
import Course from './Course';
import './styles/App.css';
import TodoItem from './TodoItem';
import img from '../src/Slide2.JPG';


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
      <div className="flex-wrapper">
        <div className="container">
          <header>
            <img src={img} alt="Logo" width="10px" height="5"/>
          </header>
          <div className="items-container">
              {this.state.collapsibles.map(x => (<Course title={x.course} />))}
          </div>
        </div>
        <footer>
          <AddCollapsible addCollapsible={this.addCollapsible}  />
        </footer>
      </div>
    );
  }
}

export default App;
