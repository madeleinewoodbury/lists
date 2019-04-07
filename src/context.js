import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_SHOPPING_ITEM":
      return {
        ...state,
        shoppingItems: state.shoppingItems.filter(
          item => item.id !== action.payload
        )
      };
    case "ADD_SHOPPING_ITEM":
      return {
        ...state,
        shoppingItems: [action.payload, ...state.shoppingItems]
      };
    case "DELETE_TODO_ITEM":
      return {
        ...state,
        todoItems: state.todoItems.filter(item => item.id !== action.payload)
      };
    case "ADD_TODO_ITEM":
      return {
        ...state,
        todoItems: [action.payload, ...state.todoItems]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    shoppingItems: [
      {
        id: 1,
        name: "Milk",
        quantity: "1"
      },
      {
        id: 2,
        name: "Beer",
        quantity: "6"
      },
      {
        id: 3,
        name: "Coffee",
        quantity: "1"
      }
    ],

    todoItems: [
      {
        id: 201,
        name: "Make Pizza"
      },
      {
        id: 202,
        name: "Watch Movie"
      }
    ],

    // Calls the action from the reducer
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
