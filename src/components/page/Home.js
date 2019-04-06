import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Your Lists</h1>
      <p>Keep track of what you need to get done today!</p>
      <div className="home-links">
        <a href="/" className="btn">
          Shopping List
        </a>
        <a href="/" className="btn">
          Todo List
        </a>
      </div>
    </div>
  );
};

export default Home;
