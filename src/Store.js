import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import reducer from "./TodoReducers";
import thunk from "redux-thunk";
import {getFirebase, firebaseReducer,reactReduxFirebase} from "react-redux-firebase";
import firebaseConfig from "./fbConfig";

const rootReducer = combineReducers({
    todoReducer : reducer,
    firebase: firebaseReducer
})
export const Store  = createStore(
    rootReducer,
    compose(
        reactReduxFirebase(firebaseConfig),
        applyMiddleware(thunk.withExtraArgument(getFirebase))
    )
    
);