import './App.css';
import React, { useState, useReducer } from 'react'
import { initialState, reducer } from './reducers/reducer'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from './reducers/reducer'

function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <TodoForm />
      <TodoList /> 
    </div>
  );
}

export default App;
