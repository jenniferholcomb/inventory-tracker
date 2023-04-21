import React from "react";
import PropTypes from 'prop-types';

function ItemDetail(props) {

  const { item } = props;

  const quantityNotification = 
    props.quantity <= 10 ?
      "ALMOST SOLD OUT!"
    :
    props.quantity <= 0 ?
      "OUT OF STOCK"
    : "";

  return (
    <React.Fragment>
      <div>
        <h1>Item Details</h1>

        <h1>{item.name}</h1>
        <p>{quantityNotification}</p>
        <p>ORIGIN: {item.origin}</p>
        <p>ROAST: {item.roast}</p>
        <p>DESCRIPTION: </p>
        <blockquote>{item.description}</blockquote>
        <p>PRICE: ${item.price} / lb</p>
        <p>QUANTITY AVAILABLE: {item.quantity} pounds</p>
      </div>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;

