import React from 'react';

function TodoItem({ task, index, removeTask, toggleCompletion }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => toggleCompletion(index)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTask(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
