import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props) {
  console.log(props)
  return (
    <React.Fragment>
      <div className="formCard">
        <h2 className="formHeader">{props.headerText}</h2>
        <div className="breakLine1">
          <svg xmlns="http://www.w3.org/2000/svg" width="525" height="2" viewBox="0 0 525 2" fill="none">
            <path d="M525 1L9.53674e-07 1" stroke="#857E75"/>
          </svg>
        </div>
        <form onSubmit={props.formSubmissionHandler}>
          <div className="reuseForm">
            <div className="formCol1Content">
              <div className="formLine" id="formTopRow">
                <label htmlFor="name">NAME: </label>
                <input 
                  type='text'
                  className='nameInput'
                  name='name'
                  placeholder={props.name ? props.name : 'Name'} required
                />
              </div>
              <h5 className="characterCountText">8 / 20 characters</h5>
              <div className="formLine">
                <label htmlFor="name">ORIGIN: </label>
                {/* <div className="inputDiv"> */}
                  <input 
                    type='text'
                    className='nameInput'
                    name='origin'
                    placeholder={props.name ? props.origin : "Origin"} required
                  />
                {/* </div> */}
              </div>
              <div className="formLine">
                <label htmlFor="name">ROAST: </label>
                <input 
                  type='text'
                  className='nameInput'
                  name='roast'
                  placeholder={props.name ? props.roast : 'Roast'} required
                />
              </div>
              <div className="formDescription">
                <div className="descLab"> 
                  <label htmlFor="name">DESCRIPTION: </label>
                </div>
                <textarea 
                  name='description'
                  className='descriptForm'
                  placeholder={props.name ? props.description : 'Description'} required
                />
              </div>
              <h5 className="characterCountText">183 / 259 characters</h5>
            </div>
            <div className="formPrice">
              <div className="formLine">
                <label htmlFor="name">PRICE PER POUND: </label>
                <input 
                  type='text'
                  className='priceQuantityInput'
                  name='price'
                  placeholder={props.name ? (`$${props.price}`) : 'Price'} required
                />
              </div>
            </div>
            <div className="formCol2Content">
              <div className="formLine">
                <label htmlFor="name">POUNDS AVAILABLE: </label>
                <input 
                  type='text'
                  className='priceQuantityInput'
                  name='quantity'
                  placeholder={props.name ? props.quantity : 'Quantity Available'} required
                />
              </div>
            </div>
            <div className="formImage">
              <img src={props.plantImg} alt="coffee plantation"/>
            </div>
            <div className="breakLine2">
              <svg xmlns="http://www.w3.org/2000/svg" width="525" height="2" viewBox="0 0 525 2" fill="none">
                <path d="M525 1L9.53674e-07 1" stroke="#857E75"/>
              </svg>
            </div>
            <div className="breakLine3">
              <svg xmlns="http://www.w3.org/2000/svg" width="525" height="2" viewBox="0 0 525 2" fill="none">
                <path d="M525 1L9.53674e-07 1" stroke="#857E75"/>
              </svg>
            </div>
          </div>
          <div className="btn2">
            <button className="saveFormButton" id="formSaveButton" type="submit" onClick={props.formSubmissionHandler}><span className="buttonTextSolid">{props.buttonText}</span></button>
          </div>
        </form>
        <div className="btn1">
          <button className="cancelFormButton" id="formCancelButton" onClick={props.onClickingCancel}><span className="buttonText">Cancel</span></button>
        </div>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  headerText: PropTypes.string,
  onClickingCancel: PropTypes.func
};

export default ReusableForm;