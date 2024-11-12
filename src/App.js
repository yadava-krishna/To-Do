// src/App.js
import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
