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

        <h1>{item.name}</h1>
        <p>{item.notification}</p>
        <p>ORIGIN: {item.origin}</p>
        <p>ROAST: {item.roast}</p>
        <p>DESCRIPTION: </p>
        <blockquote>{item.description}</blockquote>
        <p>PRICE: ${item.price} / lb</p>
        <p>QUANTITY AVAILABLE: {item.quantity} pounds</p>
      </div>
      <div style={buttonStyles}>
        <button onClick={onClickingEdit}>Edit Bean</button>
        <button onClick={() => onClickingDelete(item.id)}>Delete Bean</button>
        {/* <button onClick={() => onBuyingItem(1)}>Buy 1 pound</button> */}
        <form onSubmit={ handleQuantityForm }>
          <input 
            type='number'
            name='quantity'
            placeholder="quantity"
          />
          <button type="submit">Buy Beans</button>
        </form>
       
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

