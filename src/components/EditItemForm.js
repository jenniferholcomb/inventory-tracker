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
        buttonText="Save Changes" 
        headerText="EDIT BEAN" 
        name={item.name}
        flag={props.countryList[props.countryList.findIndex(country => country.origin === item.origin)].flag}
        plantImg={props.countryList[props.countryList.findIndex(country => country.origin === item.origin)].cpImg}
        origin={item.origin}
        roast={item.roast}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
        key={item.id}/>
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditingItem: PropTypes.func,
  item: PropTypes.object,
  countryList: PropTypes.object
};

export default EditItemForm;