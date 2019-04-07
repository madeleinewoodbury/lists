import React, { Component } from "react";
import { Consumer } from "../../../context";
import Todo from "./Todo";
import AddTodoItem from "./AddTodoItem";
import "./Todo.css";

class TodoList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { todoItems } = value;
          return (
            <React.Fragment>
              <div id="todo-list">
                <h1>
                  Todo List <i className="far fa-edit" />
                </h1>
                <AddTodoItem />
                <ul className="todo-list">
                  {todoItems.map(item => (
                    <Todo key={item.id} item={item} />
                  ))}
                </ul>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default TodoList;
