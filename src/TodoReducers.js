const initState = {
  todos: [
    {
      text:null,
      completed: null,
      edit: null,
      storedToDB: null
    },

  ]
}

export default (state = initState , action) => {
    switch(action.type){
      case"TODO_CREATED":{
        const newItem = action.todo;
        return {
          ...state,
          todos: [...state.todos, newItem]
        };   
      }
      case"MARK_AS_COMPLETE":{
        return{
          ...state,
        }     
      }
      case "EDIT_TODO":{
        return{
          ...state,
        }
      }
      case "UPDATE_TODO":{
        return{
          ...state,
        }     
      }
      case "DELETE_TODO":{
       return{
          ...state,
        }     
      } 
      default:
        return{
          ...state
        }
    }
  };
  