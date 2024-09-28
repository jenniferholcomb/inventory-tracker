import React from "react";
import PropTypes from 'prop-types';

function InventoryWidget(props) {
  console.log(props)
  return (
    <React.Fragment>
      
        
        <div className="inventory">
          <h2 className="inventoryHeader">Inventory</h2>
          <div className="widgetActions">
            <h3 className="widgetLink"><a href="">+ add inventory</a></h3>
            <h3 className={`${"widgetLink"} ${"linkB"}` } onClick={props.onAddBeanClick}><a>+ add new bean</a></h3>
          </div>
          <div className="inv-1">
          {props.itemsList.map((item, index) => 
            <React.Fragment key={item.id}>
              <h4 className="itemName">{item.name}:</h4> 
              <p className="itemPounds">{item.quantity} lbs</p>
              {/* <br /> */}
            </React.Fragment>
          )}
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

