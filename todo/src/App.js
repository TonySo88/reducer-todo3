import './App.css';
import React, { useState, useReducer } from 'react'
import { initialState, reducer } from './reducers/reducer'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <TodoForm />
    </div>
  );
}

export default App;
