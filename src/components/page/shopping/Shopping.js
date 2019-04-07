import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../context";
import "./Shopping.css";

class Shopping extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_SHOPPING_ITEM", payload: id });
  };
  render() {
    const { id, name, quantity } = this.props.item;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          console.log(value);
          return (
            <li className="shopping-item">
              <span className="delete">
                <i
                  className="fas fa-trash-alt"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </span>
              <span className="quantity">{quantity}</span>
              {name}
            </li>
          );
        }}
      </Consumer>
    );
  }
}

Shopping.propTypes = {
  item: PropTypes.object.isRequired
};

export default Shopping;
