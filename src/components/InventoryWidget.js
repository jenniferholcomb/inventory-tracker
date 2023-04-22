import React from "react";
import PropTypes from 'prop-types';

function InventoryWidget(props) {
  return (
    <React.Fragment>
      {props.itemsList.map(item => 
        <React.Fragment>
          {item.name} : ${item.quantity}
          <br />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

InventoryWidget.propTypes = {
  itemsList: PropTypes.object
}

export default InventoryWidget;

