import React, { Component } from "react";
import Form from "./Components/Form";
import Todos from "./Components/Todos";
import "./App.css";
import { connect } from "react-redux";
import {firebaseConnect} from "react-redux-firebase";
import {compose} from "redux";
class App extends Component {
  
  render() {
    const todos = this.props.todos;
    return (
    
      <div className="App">
        <h1> React Redux Firebase Todo App</h1>
        {
         // console.log(this.props)
          !todos||todos===undefined
          ? 
            "Loading"
          : 
          <Todos todos={todos}/>
        }
    
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.firebase.ordered.todo,
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([
    'todo'
  ])
)(App)
