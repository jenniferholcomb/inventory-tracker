import React from "react";
import lineArt from "./../img/lines.svg"
import PropTypes from 'prop-types';

function Item(props) {
  const quantityNotification = 
    props.quantity <= 0 ?
      "OUT OF STOCK"
    :
    props.quantity <= 10 ?
      "ALMOST SOLD OUT!"
    : "";
  
  return (
    <div onClick = {() => props.whenItemClicked(props.id)}>
    <div className="itemCard">
      <img  className="" src={lineArt}/> 
          <div className="content">
            <h1>{props.name}</h1>
            <p>{quantityNotification}</p>
            <p><strong>ORIGIN:</strong> {props.origin}</p>
            <p><strong>ROAST:</strong> {props.roast}</p>
            <p><strong>DESCRIPTION:</strong> </p>
            <blockquote>{props.description}</blockquote>
            <p><strong>PRICE:</strong> ${props.price} / lb</p>
            <p><strong>QUANTITY AVAILABLE:</strong> {props.quantity} pounds</p>
            </div> 
        </div>
        
    </div>
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
  whenItemClicked: PropTypes.func
}

export default Item;