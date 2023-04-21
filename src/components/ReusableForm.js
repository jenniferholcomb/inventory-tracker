import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='name'
          placeholder="Bean Name"
        />
        <input 
          type='text'
          name='origin'
          placeholder="Origin"
        />
        <input 
          type='text'
          name='roast'
          placeholder="Roast"
        />
        <textarea 
          name='description'
          placeholder="Description"
        />
        <input 
          type='text'
          name='price'
          placeholder="Price / lb"
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;