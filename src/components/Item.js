import React from "react";
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <p>ORIGIN: {props.origin}</p>
      <p>ROAST: {props.roast}</p>
      <p>DESCRIPTION: </p>
      <blockquote>{props.description}</blockquote>
      <p>PRICE: ${props.price}</p>
      <p>QUANTITY: {props.quantity}</p>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  key: PropTypes.string,
}

export default Item;