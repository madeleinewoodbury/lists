import React, { Component } from "react";
import { Consumer } from "../../../context";

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
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <label htmlFor="name">Add Item</label>
                <input type="text" name="name" onChange={this.onChange} />
                <label htmlFor="quantity">Quantity</label>
                <input type="text" name="quantity" onChange={this.onChange} />
                <input type="submit" value="Add Item" />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddShoopingItem;
