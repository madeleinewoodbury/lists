import React, { Component } from "react";
import Shopping from "./Shopping";
import { Consumer } from "../../../context";

class ShoppingItems extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { shoppingItems } = value;
          return (
            <React.Fragment>
              {shoppingItems.map(item => (
                <Shopping key={item.id} item={item} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ShoppingItems;
