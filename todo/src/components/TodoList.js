import React, { useReducer } from 'react'
import {Todo} from './Todo'
import { CLEAR_COMPLETED, initialState } from '../reducers/reducer'
import { reducer } from  '../reducers/reducer'

export const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    return (
        <div>
            {state.todos.map(todo => 
                <Todo key={todo.id} todo={todo}/>
            )}
            <button onClick = {() => dispatch({ type: CLEAR_COMPLETED})}>Clear Completed</button>
        </div>
    )
}