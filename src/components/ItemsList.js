import React from "react";
import Item from "./Item";
import PropTypes from 'prop-types';

function ItemsList(props) {
  return (
    <React.Fragment>
      {props.itemsList.map(item => 
        <Item 
          whenItemClicked={props.onItemSelection}
          name={item.name}
          origin={item.origin}
          roast={item.roast}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          id={item.id}
          key={item.id} 
        />
      )}
    </React.Fragment>
  );
}

ItemsList.propTypes = {
  itemsList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemsList;