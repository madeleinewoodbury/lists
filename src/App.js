import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";
import Todo from "./components/page/Todo";
import ShoppingItems from "./components/page/shopping/ShoppingItems";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/shopping" component={ShoppingItems} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
