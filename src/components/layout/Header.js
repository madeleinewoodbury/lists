import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <a href="/" className="brand">
        Lists
      </a>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="/shopping">Shopping List</a>
        </li>
        <li className="nav-link">
          <a href="/todo">Todo List</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
