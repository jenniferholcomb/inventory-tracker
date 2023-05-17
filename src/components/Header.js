import React from "react";
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <React.Fragment>
      <header>
        <div className='mast-head'>
          <div className="logo-B">
            <h1><strong>B</strong></h1> 
          </div>
          <div className="logo">
            <h1>OUTIQUE<br/>&nbsp;EANS</h1>
          </div>
          <div className="inventory-widget"> 
            {props.widgetAreaComponent}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  widgetAreaComponent: PropTypes.object
};

export default Header;