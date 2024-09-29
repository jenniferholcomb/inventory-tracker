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
      <div className={props.detailPg ? "details-info" : "itemCard"}>
        <div className="cardImgContainer" id={props.detailPg ? "detailImg" : null}>
          <img className={props.detailPg ? "" : "cardImg"} src={props.plantImg} alt="coffee plantation in Colombia" />
        </div>
        <div className="content" id={props.detailPg ? "detailContent" : null}>
          <div className="cardTopContainer">
            <h1 className="cardHeader" id={props.detailPg ? "detailHeader" : null}>{props.name}</h1>
            <h3 className="cardSubHead">ORIGIN:&nbsp;&nbsp;<span className="subHeadText">{props.origin}</span></h3>
            <h3 className="cardSubHead">ROAST:&nbsp;&nbsp;<span className="subHeadTextB">{props.roast}</span></h3>
            <h3 className="cardSubHead" id="desSubHead">DESCRIPTION:</h3>
          </div>
          <div className="flagContainer" id="detailFlagHide">          
            <img className="flag" src={props.flag} alt="Colombia flag" />
          </div>
          {/* <p>{quantityNotification}</p> */}
          <div className="desColumn"> 
            <blockquote className="description" id={props.detailPg ? "detailDescription" : null}>{props.description}</blockquote>
          </div>
          <h4 className="cardPrice" id={props.detailPg ? "detailPrice" : null}>${props.price}<span className="priceUnit">/lb</span></h4>
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