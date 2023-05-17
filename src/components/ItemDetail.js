import React from "react";
import PropTypes from 'prop-types';

function ItemDetail(props) {

  const { item, onClickingDelete, onClickingEdit, onQuantityCreation } = props;

  const buttonStyles = {
    paddingLeft: '2rem',
    // display: 'flex',
    justifyContent: 'space-between'
  };
  
  function handleQuantityForm (event) {
    event.preventDefault();
    onQuantityCreation(
      event.target.quantity.value
    );
  }
  console.log(item.quantity);
  return (
    <React.Fragment>
      <div className="details">
        <h1>ITEM DETAILS</h1>
        <div className="details-info">
          <h1>{item.name}</h1>
          <p>{item.notification}</p>
          <p>ORIGIN: {item.origin}</p>
          <p>ROAST: {item.roast}</p>
          <p>DESCRIPTION: </p>
          <blockquote>{item.description}</blockquote>
          <p>PRICE: ${item.price} / lb</p>
          <p>QUANTITY AVAILABLE: {item.quantity} pounds</p>
        </div>
        <div className="button-column"style={buttonStyles}>

          {/* <button onClick={() => onBuyingItem(1)}>Buy 1 pound</button> */}
          <form onSubmit={ handleQuantityForm }>
            <input 
              className="input-quantity"
              type='number'
              name='quantity'
              max={item.quantity}
              placeholder="Purchase Quantity"
            /><br /><br />
            <button type="submit">Buy Beans</button>
          </form><br /><br /><br />
          <button onClick={onClickingEdit}>Edit Bean</button><br /><br />
          <button onClick={() => onClickingDelete(item.id)}>Delete Bean</button>
        </div>
      </div>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onQuantityCreation: PropTypes.func
};

export default ItemDetail;

