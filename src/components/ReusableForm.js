import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="formCard">
      <div className="formSubmission">
        <h2>{props.headerText}</h2>
        <form onSubmit={props.formSubmissionHandler}>
          <label htmlFor="name">BEAN NAME: </label>
          <input 
            type='text'
            name='name'
            placeholder="Bean Name" required
          /><br /><br />
          <label htmlFor="name">ORIGIN: </label>
          <input 
            type='text'
            name='origin'
            placeholder="Origin" required
          /><br /><br />
          <label htmlFor="name">ROAST: </label>
          <input 
            type='text'
            name='roast'
            placeholder="Roast" required
          /><br /><br />
          <label htmlFor="name">DESCRIPTION: </label>
          <textarea 
            name='description'
            placeholder="Description" required
          /><br /><br />
          <label htmlFor="name">PRICE: </label>
          <input 
            type='text'
            name='price'
            placeholder="Price / lb" required
          /><br /><br />
          <button className="form-btn" type="submit">{props.buttonText}</button>
        </form>
      </div>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  headerText: PropTypes.string,
};

export default ReusableForm;