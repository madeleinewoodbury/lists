import React, { Component } from "react";
import PropTypes from "prop-types";

class Shopping extends Component {
  render() {
    const { name, quantity } = this.props.item;
    return (
      <div>
        <h1>{name}</h1>
        <p>{quantity}</p>
      </div>
    );
  }
}

Shopping.propTypes = {
  item: PropTypes.object.isRequired
};

export default Shopping;
