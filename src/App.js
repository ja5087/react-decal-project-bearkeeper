import React, { Component } from 'react';
import AddCollapsible from './AddCollapsible';
import Course from './Course';
import './styles/App.css';
import TodoItem from './TodoItem';
import img from '../src/Presentation1.png';
import * as firebase from "firebase/app";
import "firebase/firestore";
import uuid from "uuid";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNDmpWoltPlyGkVOzdjpSRzLLk8f_A_RU",
  authDomain: "bearkeeper-4c5db.firebaseapp.com",
  databaseURL: "https://bearkeeper-4c5db.firebaseio.com",
  projectId: "bearkeeper-4c5db",
  storageBucket: "bearkeeper-4c5db.appspot.com",
  messagingSenderId: "354545330167"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore(); 
    this.state = {
      collapsibles: []
    }

    this.db.collection("alltodos").onSnapshot(snapshot => {
      this.setState({
        collapsibles: snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}))
      });
    });

    this.addCollapsible = this.addCollapsible.bind(this);
    this.deleteCollapsible = this.deleteCollapsible.bind(this);
  }
  addCollapsible(title) {
    const newCollapsible = {
      id: uuid(),
      name: title
    };
    this.db.collection("alltodos").add(newCollapsible)
  }
  deleteCollapsible(id) {
    this.db.collection("alltodos").doc(id).delete()
  }
  
  render() {
    return (
      <div className="flex-wrapper">
        <div className="container">
          <header>
            <img src={img} alt="Logo" width="10px" height="5"/>
          </header>
          <div className="items-container">
              {this.state.collapsibles.map(x => (<Course key={x.id} id={x.id} 
                                                    deleteCollapsible={this.deleteCollapsible} title={x.data.name} dbref={this.db.collection("alltodos").doc(x.id)}/>))}
          </div>
        </div>
        <footer>
          <AddCollapsible addCollapsible={this.addCollapsible}/>
        </footer>
      </div>
    );
  }
}

export default App;
