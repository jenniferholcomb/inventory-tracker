import React from "react";
import PropTypes from 'prop-types';

function InventoryWidget(props) {
  return (
    <React.Fragment>
      <div className="widget-items">
        <h3>INVENTORY</h3>
        {props.itemsList.map((item, index) => 
          <React.Fragment key={item.id}>
            {item.name} : {item.quantity} lbs
            <br />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

InventoryWidget.propTypes = {
  itemsList: PropTypes.array
}

export default InventoryWidget;

