import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './../index.css';

function ReusableForm(props) {
  console.log(props)

  const [nameText, setNameText] = useState(props.name.length);
  const [descText, setDescText] = useState(props.description.length);
  const [roastValue, setRoastValue] = useState('');
  const [originValue, setOriginValue] = useState(props.origin);
  const nameMaxLength = 40;
  const descMaxLength = 259;

  const handleChange = (event) => {
    event.target.name === "name" ?
      setNameText(event.target.value.length)
    : event.target.name === "description" ?
        setDescText(event.target.value.length)
      :
        setRoastValue(event.target.value);
  };

  // const handleRoastChange = (event) => {
  //   setRoastValue(event.target.value);
  // }

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
                  // placeholder={props.name ? props.name : 'Name'} required
                  defaultValue={props.name ? props.name : 'Name'}
                  onChange={handleChange}
                  maxLength={nameMaxLength}
                />
              </div>
              <h5 className="characterCountText">{nameText} / {nameMaxLength} characters</h5>
              <div className="formLine">
                <label htmlFor="origin">ORIGIN: </label>
                <select 
                  name='origin' 
                  value={roastValue} 
                  onChange={handleChange} 
                  className={`styles.nameInput styles.originInput ${originValue === "Brazil" ? styles.nameInputBrazil : null} }`}>
                  <option value="Brazil">Brazil</option>
                  <option value="Colombia">Colombia</option>
                  <option value="India">India</option>
                  <option value="Phillipines">Phillipines</option>
                </select>
              </div>
              <div className="formLine">
                <label htmlFor="roast">ROAST: </label>
                <select 
                  name='roast' 
                  defaultValue={props.name ? props.roast : 'Roast'} 
                  value={roastValue} 
                  onChange={handleChange} 
                  className={`${'nameInput'} ${'roastInput'}`}>
                  <option value="light">light</option>
                  <option value="medium">medium</option>
                  <option value="dark">dark</option>
                </select>
              </div>
              <div className="formDescription">
                <div className="descLab"> 
                  <label htmlFor="description">DESCRIPTION: </label>
                </div>
                <textarea 
                  name='description'
                  className='descriptForm'
                  placeholder={props.name ? props.description : 'Description'} required
                  defaultValue={props.name ? props.description : 'Description'}
                  onChange={handleChange}
                  maxLength={descMaxLength}
                />
              </div>
              <h5 className="characterCountText">{descText} / 259 characters</h5>
            </div>
            <div className="formPrice">
              <div className="formLine">
                <label htmlFor="price">PRICE PER POUND: </label>
                <input 
                  type='text'
                  className='priceQuantityInput'
                  name='price'
                  placeholder={props.name ? (`$${props.price}`) : 'Price'} required
                  defaultValue={props.name ? (`$${props.price}`) : 'Price'}
                />
              </div>
            </div>
            <div className="formCol2Content">
              <div className="formLine">
                <label htmlFor="available">POUNDS AVAILABLE: </label>
                <input 
                  type='text'
                  className='priceQuantityInput'
                  name='quantity'
                  placeholder={props.name ? props.quantity : 'Quantity Available'} required
                  defaultValue={props.name ? props.quantity : 'Quantity Available'}
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
          <button className="cancelFormButton" id="formCancelButton"><span className="buttonText">Cancel</span></button>
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