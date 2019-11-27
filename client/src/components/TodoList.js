import React, { useState } from 'react';

const TodoList = () => {
  const [todos] = useState([
    {
      id: 1,
      text: 'Go to supermarket!',
      completed: false,
    },
    {
      id: 2,
      text: 'Take out the trash',
      completed: true,
    },
  ]);

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todos.map(todo => (
          <li className="" key={todo.id}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{todo.text}</label>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
