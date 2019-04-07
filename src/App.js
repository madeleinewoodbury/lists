import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";
import ShoppingList from "./components/page/shopping/ShoppingList";
import { Provider } from "./context";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shopping" component={ShoppingList} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
