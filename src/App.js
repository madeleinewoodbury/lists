import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";
import ShoppingItems from "./components/page/shopping/ShoppingItems";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shopping" component={ShoppingItems} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
