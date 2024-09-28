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
      <div className="cardImgContainer">
        <img className="cardImg" src={props.plantImg} alt="coffee plantation in Colombia" />
      </div>
      <div className="content">
        <div className="cardTopContainer">
          <h1 className="cardHeader">{props.name}</h1>
          <h3 className="cardSubHead">ORIGIN:&nbsp;&nbsp;<span className="subHeadText">{props.origin}</span></h3>
          <h3 className="cardSubHead">ROAST:&nbsp;&nbsp;<span className="subHeadTextB">{props.roast}</span></h3>
        </div>
        <div className="flagContainer">          
          <img className="flag" src={props.flag} alt="Colombia flag" />
        </div>
        {/* <p>{quantityNotification}</p> */}
        <div className="desColumn"> 
          <h3 className={`${"cardSubHead"}`}>DESCRIPTION:</h3>
          <blockquote className="description">{props.description}</blockquote>
        </div>
        <h4 className="cardPrice">${props.price}<span className="priceUnit">/lb</span></h4>
        {/* <h3 className="cardSubHead">QUANTITY AVAILABLE: {props.quantity} pounds</h3> */}
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