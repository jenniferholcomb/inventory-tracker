import React, { useState } from "react";
import PropTypes from 'prop-types';

function CartItem(props) {

  const { item } = props;

  return (
    <React.Fragment>
      <div className="cartItemContainer">
        <div className="cartItemDescription">
          <img src={item.plantImg} className="cartImg" alt="product image" />
          <div className="productContainer">
            <h4 className="cartName">{item.name}</h4>
            <h4 className="cartOriginRoast">{item.origin}, {item.roast} roast</h4>
            <h4 className="cartPrice">{`$${item.price}`}</h4>
          </div>
        </div>
        <div className="quantityContainer">
          <form onSubmit="">
            <div className="cartInputRow">
              <button id="cartDecrement" type="button" onClick=''>-</button>
              <input 
                className='cartQuantityInput'
                name='quantityPurchase'
                value={item.quantityPurchase}
                onChange=""
                maxLength='3'
              />
              <button id="cartIncrement" type="button" onClick="">+</button>
            </div>
          </form>
          <h3 className="cartRemove">Remove</h3>
        </div>
        <h4 className="cartProductTotal">{`$${item.price * item.quantityPurchase}`}</h4>
      </div>
    </React.Fragment>
  )
}

CartItem.propTypes = {
  item: PropTypes.object,
  onClickingCheckout: PropTypes.func
};

export default CartItem;

