import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
