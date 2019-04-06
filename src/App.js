import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";
import Todo from "./components/page/Todo";
import Shopping from "./components/page/Shopping";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/shopping" component={Shopping} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
