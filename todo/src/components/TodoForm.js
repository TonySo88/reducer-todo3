import React, { useState, useReducer } from 'react';
import { initialState, reducer, ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from '../reducers/reducer'

export const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const handleChanges = e => {
      setNewTodo(e.target.value)
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      dispatch({ type: ADD_TODO, payload: newTodo })
    
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="item"
                value={newTodo}
                onChange={handleChanges}
            />
            <button>Add</button>
        </form>
    )
}