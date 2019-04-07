import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../context";
import "./Todo.css";

class Todo extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_TODO_ITEM", payload: id });
  };
  render() {
    const { id, name } = this.props.item;
    console.log(id);
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <li className="todo-item">
              <span className="delete">
                <i
                  className="fas fa-trash-alt"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </span>
              {name}
            </li>
          );
        }}
      </Consumer>
    );
  }
}

Todo.propTypes = {
  item: PropTypes.object.isRequired
};

export default Todo;
