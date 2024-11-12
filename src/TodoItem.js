// src/TodoItem.js
import React from 'react';

function TodoItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        style={{ marginRight: '10px' }}
      />
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          flex: 1,
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ color: 'red' }}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
