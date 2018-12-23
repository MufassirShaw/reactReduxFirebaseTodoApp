import React, { Component } from 'react';
class Todo extends Component {
    state = {
      text: this.props.todo.text
    }
    handleChange=(e)=>{
      this.setState({
        text: e.target.value
      })
    }
    render() {
      const {text, completed,edit} = this.props.todo;
      const {completeTodo,editItem,updateItem,deleteItem,todoKey} = this.props;
      return (
        <li className="flex">
         { 
           !edit 
            ?
            <div className="items">
                <h4 className="todo-text" style={{textDecoration: completed?"line-through":"none"}}>
                  {text}
                </h4>
              
              <span>
                {
                  !completed
                    ?      
                  <span> 
            
                    <i onClick={()=>{
                        editItem(todoKey);
                    }}
                        className="todo-icon edit">
                    </i> 
                    <i onClick={()=>{
                      completeTodo(todoKey);
                    }} 
                      className="todo-icon done">
                    </i> 
    
                  </span>
                  :""
                }
                <i onClick={()=>{
                  deleteItem(todoKey)
                }} 
                  className="todo-icon close">
                </i> 
              </span>       
            </div>            
            :
            <form onSubmit={
                  (e)=>{
                    e.preventDefault();
                    updateItem({id:todoKey,text:this.state.text})
                  }
                }
            >
                <input value={this.state.text} onChange={(e)=>{this.handleChange(e)}} type="text"/>
                <button type="submit">Update</button>
            </form>
        
        
        }
        </li>
      );
    }
  }
  export default Todo;