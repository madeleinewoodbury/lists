import React, { Component } from "react";
import { Consumer } from "../../../context";
import Shopping from "./Shopping";
import AddShoppingItem from "./AddShoopingItem";
import "./Shopping.css";

class ShoppingList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { shoppingItems } = value;
          return (
            <React.Fragment>
              <div id="shopping-list">
                <h1>
                  Shopping List <i className="far fa-edit" />
                </h1>
                <AddShoppingItem />
                {/* <input type="text" placeholder="Add item" name="item" /> */}
                <ul className="shopping-list">
                  {shoppingItems.map(item => (
                    <Shopping key={item.id} item={item} />
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

export default ShoppingList;
