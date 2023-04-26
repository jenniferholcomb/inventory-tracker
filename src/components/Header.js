import React from "react";
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <React.Fragment>
      <header>
        <h1 id="header"><strong>BOUTIQUE BEANS</strong></h1> 
        <div className="inventory-widget">
          {props.widgetAreaComponent}
        </div>
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  widgetAreaComponent: PropTypes.object
};

export default Header;