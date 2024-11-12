// src/TodoItem.js
import React from 'react';

function TodoItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        className="todo-checkbox"
      />
      <span className={`todo-text ${task.completed ? 'completed' : ''}`}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="todo-delete-button">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
