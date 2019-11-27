import React from 'react';

const Footer = () => (
  <footer className="footer">
    <span className="todo-count">
      <strong>1</strong>
      <span> </span>
      <span>item </span>
      <span>left</span>
    </span>
    <ul className="filters">
      <li>
        <a href="/" className="selected">
          All
        </a>
      </li>
      <li>
        <a href="/" className="">
          Active
        </a>
      </li>
      <li>
        <a href="/" className="">
          Completed
        </a>
      </li>
    </ul>
    <button className="clear-completed">Clear completed</button>
  </footer>
);

export default Footer;
