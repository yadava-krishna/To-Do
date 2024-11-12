// src/App.js
import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="todo-container">
      <h1 className="todo-header">React To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
