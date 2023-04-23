import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditItemForm(props) {
  
  const { item } = props;

  function handleEditItemSubmission(event) {
    event.preventDefault();
    props.onEditingItem({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      description: event.target.description.value,
      price: parseInt(event.target.price.value),
      quantity: item.quantity,
      notification: item.notification,
      id: item.id
    })
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditItemSubmission}
        buttonText="Edit Bean" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditingItem: PropTypes.func,
  item: PropTypes.object
};

export default EditItemForm;