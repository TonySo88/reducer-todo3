import React, { useReducer } from 'react';
import { TOGGLE_TODO, initialState } from '../reducers/reducer'
import { reducer } from  '../reducers/reducer'

export const Todo = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    return (
        <div
            className = {`todo${props.todo.completed ? " completed" : ""}`}
            onClick={() => dispatch({ type: TOGGLE_TODO})}
        >
            <p>{props.todo.todo}</p>
        </div>
    )
}