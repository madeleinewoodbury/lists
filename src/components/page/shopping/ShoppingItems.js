import React, { Component } from "react";
import Shopping from "./Shopping";

class ShoppingItems extends Component {
  constructor() {
    super();
    this.state = {
      shoppingItems: [
        {
          id: 1,
          name: "Milk",
          quantity: 1
        },
        {
          id: 2,
          name: "Beer",
          quantity: 6
        },
        {
          id: 3,
          name: "Coffee",
          quantity: 1
        }
      ]
    };
  }
  render() {
    const { shoppingItems } = this.state;

    return (
      <div>
        {shoppingItems.map(item => (
          <Shopping key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default ShoppingItems;
