import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <header id="home">
        <h1>Welcome to Your Lists</h1>
        <p>
          Keep track of what you need to get done today! <br />
          Select a list to get started.
        </p>
        <div className="home-links">
          <a href="/shopping" className="btn">
            Shopping List
          </a>
          <a href="/todo" className="btn">
            Todo List
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;
