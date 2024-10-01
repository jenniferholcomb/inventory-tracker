import React from "react";
import PropTypes from 'prop-types';

function InventoryWidget(props) {

  return (
    <React.Fragment>
        <div className="inventory">
          <h2 className="inventoryHeader">Inventory</h2>
          <div className="inv-1">
          {props.itemsList.map((item, index) => 
            <React.Fragment key={item.id}>
              <h4 className="itemName">{item.name}:</h4> 
              <p className="itemPounds">{item.quantity} lbs</p>
              {/* <br /> */}
            </React.Fragment>
          )}
          </div>
          <div className="widgetActions">
            <h3 className="widgetLink" onClick={props.onAddBeanClick}><a>+ add new bean</a></h3>
          </div>
        </div>
      
    </React.Fragment>
  );
}

InventoryWidget.propTypes = {
  itemsList: PropTypes.array,
  onAddBeanClick: PropTypes.func
}

export default InventoryWidget;

