import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../context";
import "./Shopping.css";

class Shopping extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };
  render() {
    const { id, name, quantity } = this.props.item;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card">
                <ul className="item-list">
                  <li>Item: {name}</li>
                  <li>Quantity:{quantity}</li>
                  <li>
                    <i
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}
                      className="fas fa-trash"
                    />
                  </li>
                </ul>
              </div>
            </div>
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
