import React from 'react';
import {connect} from "react-redux";
import {markTodoAsComplete, editTodo, updateTodo, deleteTodo} from "./../Actions";
import Todo from "./Todo";

const Todos = props => {
  const {completeTodo, editItem,updateItem, deleteItem} = props;
  return (
    <ul className="todo-container">
      {
        props.todos.map((todo, idx) => {
          return todo.value.text
                  ?
                  <Todo 
                    editItem={editItem} 
                    completeTodo={completeTodo}
                    updateItem = {updateItem} 
                    deleteItem = {deleteItem}
                    key={`todo-${idx}`} 
                    todo={todo.value}
                    todoKey={todo.key} 
                  />
                  :
                  false;
          }
        )
      }
    </ul>
  );
};


const mapDispatchToProps = (dispatch)=>{
  return{
    completeTodo: (id)=>(dispatch(markTodoAsComplete(id))),
    editItem: (id)=>(dispatch(editTodo(id))),
    updateItem : (item)=>(dispatch(updateTodo(item))),
    deleteItem : (id)=>(dispatch(deleteTodo(id)))
  }
}
export default connect(null,mapDispatchToProps)(Todos);
