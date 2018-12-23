import React from 'react';
import {connect} from "react-redux";
import {createTodo} from "./../Actions";
const Form = (props) => {
    return (
        <div>
 
            <form className="form" 
            onSubmit={(e)=>{
                e.preventDefault();
                let text = e.target.name.value;
                e.target.name.value ="";
                props.newTodo(text);
             }
            }>
                <input placeholder="Type Todo Here" name="name" id="name" type="text" />
                <button className="btn" type="submit" >Add Todo</button>

            </form>

        </div>
    );
}
const mapDispatchToProps = (dispatch) =>(
    {
        newTodo: (text)=>(dispatch(createTodo(text))),
    }
)

export default connect(null,mapDispatchToProps)(Form);
