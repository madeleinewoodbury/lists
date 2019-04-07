import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../context";

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
          console.log(dispatch);
          return <div>{name}</div>;
        }}
      </Consumer>
    );
  }
}

Todo.propTypes = {
  item: PropTypes.object.isRequired
};

export default Todo;
