import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../context";
import "./Todo.css";

class Todo extends Component {
  // onDeleteClick = (id, dispatch) => {
  //   dispatch({ type: "DELETE_SHOPPING_ITEM", payload: id });
  // };
  render() {
    const { name } = this.props.item;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <li className="todo-item">
              <span className="delete">
                <i className="fas fa-trash-alt" />
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
