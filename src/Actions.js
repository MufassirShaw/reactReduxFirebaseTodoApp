export const createTodo =(text)=>(
    (dispatch,getState,getFirebase)=>{
        const firebase  = getFirebase();
        const newTodo ={
            text: text,
            completed: false,
            edit: false,
        }
        firebase
        .push("todo", newTodo)
        .then(()=>{
            dispatch({
                type: "TODO_CREATED",
                todo: newTodo
            })
        })
        .catch((err)=>{
            console.error("Oops! something bad happend");
        })

    }
)
export const markTodoAsComplete = (id)=>{
    return (dispatch,getState,getFirebase)=>{
        const firebase  = getFirebase();
        firebase
        .update(`todo/${id}`,{completed:true})
        .then(()=>{
            dispatch({
                type:"MARK_AS_COMPLETE"
            })
        });
    }
}

export const editTodo = (id)=>((dispatch,getState,getFirebase)=>{
    const firebase  = getFirebase();
    firebase
    .update(`todo/${id}/edit`,{edit:true})
    .then(()=>{
        dispatch({
            type:"EDIT_TODO"
        })
    })
})

export const updateTodo =({id,text}) =>((dispatch,getState,getFirebase)=>{
    const firebase  = getFirebase();
    firebase
    .update(`todo/${id}`,{text:text, edit:false})
    .then(
        dispatch({
            type:"UPDATE_TODO"
        })
    )
})

export const deleteTodo = (id)=>((dispatch,getState,getFirebase)=>{
    const firebase = getFirebase();
    firebase.remove(`todo/${id}`).then(
        dispatch({
            type:"DELETE_TODO"
        })
    )


})

