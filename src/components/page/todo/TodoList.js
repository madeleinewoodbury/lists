import React, { Component } from "react";
import { Consumer } from "../../../context";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { todoItems } = value;
          return (
            <React.Fragment>
              <div>
                <h1>Todo List</h1>
                {todoItems.map(item => (
                  <Todo key={item.id} item={item} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default TodoList;
