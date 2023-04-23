import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="formSubmission">
        <form onSubmit={props.formSubmissionHandler}>
          <input 
            type='text'
            name='name'
            placeholder="Bean Name"
          /><br /><br />
          <input 
            type='text'
            name='origin'
            placeholder="Origin"
          /><br />
          <input 
            type='text'
            name='roast'
            placeholder="Roast"
          /><br />
          <textarea 
            name='description'
            placeholder="Description"
          /><br />
          <input 
            type='text'
            name='price'
            placeholder="Price / lb"
          /><br /><br />
          <button type="submit">{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;