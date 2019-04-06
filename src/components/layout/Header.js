import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <a href="/" className="brand">
        Lists
      </a>
      <ul className="nav-links">
        <li className="nav-link">Shopping List</li>
        <li className="nav-link">Todo List</li>
      </ul>
    </nav>
  );
};

export default Header;
