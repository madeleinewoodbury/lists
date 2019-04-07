import React, { Component } from "react";
import { Consumer } from "../../../context";
import uuid from "uuid";
import "./Todo.css";

class AddTodoItem extends Component {
  state = {
    name: ""
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name } = this.state;

    const newItem = {
      id: uuid(),
      name
    };

    dispatch({ type: "ADD_TODO_ITEM", payload: newItem });

    // Clear State
    this.setState({
      name: ""
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
              <input
                type="text"
                name="name"
                placeholder="Add Todo"
                onChange={this.onChange}
              />
              <button type="submit">Add</button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default AddTodoItem;
