import React, { Component } from "react";
import { Consumer } from "../../../context";
import "./Shopping.css";

class AddShoopingItem extends Component {
  state = {
    name: "",
    quantity: ""
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, quantity } = this.state;

    const newItem = {
      id: 12,
      name,
      quantity
    };

    dispatch({ type: "ADD_SHOPPING_ITEM", payload: newItem });

    // Clear State
    this.setState({
      name: "",
      quantity: ""
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
              <div className="form-inputs">
                <input
                  type="text"
                  name="name"
                  placeholder="Item"
                  onChange={this.onChange}
                />
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  onChange={this.onChange}
                />
              </div>

              <button type="submit">Add Item</button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default AddShoopingItem;
