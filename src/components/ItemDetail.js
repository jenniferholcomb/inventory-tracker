import React from "react";
import PropTypes from 'prop-types';
import Item from "./Item";

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
  // console.log(item.quantity);
  return (
    <React.Fragment>
      <div className="details">
        <div className="detailContent">
          <Item 
            name={item.name}
            plantImg={props.countryList[props.countryList.findIndex(country => country.origin === item.origin)].cpImg}
            origin={item.origin}
            roast={item.roast}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
            id={item.id}
            key={item.id} 
            detailPg={true}
          />
        </div>
        <div className="detailPriceContainer">  
          <h3 className="cardSubHead" id="detailQuantity">available:&nbsp;&nbsp;<span className="subHeadText">{item.quantity} lbs</span></h3>
          <h3 className="cardSubHead" id="detailPriceSubhead">price per pound:&nbsp;&nbsp;<span className="cardPrice">${item.price}</span></h3>
        </div>
        <div className="detailFlagContainer" id="detailFlagImg" >
          <img className="flag" src={props.countryList[props.countryList.findIndex(country => country.origin === item.origin)].flag} alt="coffee plantation in Colombia" />
        </div>

        <div className="addCartContainer"style={buttonStyles}>

          {/* <button onClick={() => onBuyingItem(1)}>Buy 1 pound</button> */}
          <form onSubmit={ handleQuantityForm }>
            <div className="inputRow">
              <h3 className="cardSubHead" id="inputSubhead">Quantity:</h3>
              <input 
                className="input-quantity"
                type=''
                name='quantity'
                max={item.quantity}
                placeholder="1"
              />
            </div>
            <button type="submit" className="cartButton"><span className="buttonTextSolid">Add to Cart</span></button>
          </form>
          {/* <button onClick={onClickingEdit}>Edit Bean</button><br /><br />
          <button onClick={() => onClickingDelete(item.id)}>Delete Bean</button> */}
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

