import React from "react";
import PropTypes from 'prop-types';

function Cart(props) {
  return (
    <React.Fragment>
      <div className="formCard">
        <h2  className={`${"cardHeader"} ${"formHeader"}`}>Cart</h2>
        <div className="breakLine1">
          <svg xmlns="http://www.w3.org/2000/svg" width="525" height="2" viewBox="0 0 525 2" fill="none">
            <path d="M525 1L9.53674e-07 1" stroke="#857E75"/>
          </svg>
        </div>
        <div className="cartContents">
          <div className="contentCategories">
            <h3 className="categoryHeader" id="product">Product</h3>
            <h3 className={`${"categoryHeader"} ${"quantity"}`}>Quantity</h3>
            <h3 className={`${"categoryHeader"} ${"total"}`}>Total</h3>
          </div>
        </div>
        <div className="breakLine2">
          <svg xmlns="http://www.w3.org/2000/svg" width="525" height="2" viewBox="0 0 525 2" fill="none">
            <path d="M525 1L9.53674e-07 1" stroke="#857E75"/>
          </svg>
        </div>
        <div className="subtotalRow">
          <div className="empty"></div>
          <h3 className="subtotalHeader">cart subtotal</h3>
          <h4 className="subtotal">$56</h4>
        </div>
        <div className="cartButtons">
          <div className="updateBtnContainer">
            <button className="cancelFormButton" id="formCancelButton" type="button" onClick=''><span className="buttonText">Update</span></button>
          </div>
          <div className="saveBtnContainer">
            <button className={`${"saveFormButton"} ${"cartSaveButton"}`} id="formSaveButton" type="submit" onClick=''><span className="buttonTextSolid">Checkout</span></button>
          </div>
          </div>
      </div>
    </React.Fragment>
  );
}

Cart.propTypes = {
  
};

export default Cart;