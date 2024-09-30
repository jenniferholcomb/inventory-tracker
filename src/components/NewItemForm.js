import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';

function NewItemForm(props) {

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: 130,
      notification: '',
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <div className="formCard">
      <ReusableForm formSubmissionHandler={ handleNewItemFormSubmission } 
                    // onClickingCancel={onClickingCancel}
                    buttonText="Save" 
                    headerText="Add new bean" />
      </div>
    </React.Fragment>
  );
}

NewItemForm.propTypes ={
  onNewItemCreation: PropTypes.func,
  onClickingCancel: PropTypes.func
};

export default NewItemForm;