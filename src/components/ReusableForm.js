import React, { useState } from "react";
import PropTypes from 'prop-types';

import styles from './ReusableForm.module.css';

function ReusableForm(props) {

  const [nameText, setNameText] = useState(props.name.length);
  const [descText, setDescText] = useState(props.description.length);
  const [roastValue, setRoastValue] = useState('');
  const [originValue, setOriginValue] = useState(props.origin);
  const [originImg, setOriginImg] = useState(props.plantImg);
  const [priceValue, setPriceValue] = useState(props.price);
  const [quanValue, setQuanValue] = useState(props.quantity);
  const nameMaxLength = 40;
  const descMaxLength = 259;

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    if (name === "name") {
      setNameText(value.length);
    } else if (name === "description") {
      setDescText(value.length);
    } else if (name === "roast") {
      setRoastValue(value);
    } else if (name === "origin") {
      setOriginValue(value);
      setOriginImg(props.originImg[props.originImg.findIndex(country => country.origin === value)].cpImg); 
    }
  };

  const handleNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    event.target.name === "price" ? 
      setPriceValue(value !== "" ? parseInt(value) : '0')
      : setQuanValue(value !== "" ? parseInt(value) : '0')
  };

  const handleDecrement = () => {
    const value = (priceValue > 0 ? parseInt(priceValue) - 1 : 0);
    setPriceValue(value.toString());
  };

  const handleIncrement = () => {
    const value = (priceValue < 999 ? parseInt(priceValue) + 1 : 999);
    setPriceValue(value.toString());
  };

  const handleQDecrement = () => {
    const value = (quanValue > 0 ? parseInt(quanValue) - 1 : 0);
    setQuanValue(value.toString());
  };

  const handleQIncrement = () => {
    const value = (quanValue < 999 ? parseInt(quanValue) + 1 : 999);
    setQuanValue(value.toString());
  };

  return (
    <React.Fragment>
      <div className="formCard">
        <h2  className={`${"cardHeader"} ${"formHeader"}`}>{props.headerText}</h2>
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
                  value={originValue} 
                  onChange={handleChange} 
                  className={`${styles.nameInput} ${styles.originInput} ${originValue === 'Brazil' ? styles.nameInputBrazil : originValue === 'Colombia' ? styles.nameInputColombia : originValue === 'India' ? styles.nameInputIndia : styles.nameInputPhillipines}`}>
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
                  className={`${styles.nameInput} ${styles.roastInput}`}>
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
                <button id="decrement" type="button" onClick={handleDecrement}>-</button>
                <span className="currencyIcon">
                  <input 
                    className='priceQuantityInput1'
                    name='price'
                    value={priceValue}
                    onChange={handleNumberChange}
                    maxLength='3'
                  />
                </span>
                <button id="increment" type="button" onClick={handleIncrement}>+</button>
              </div>
            </div>
            <div className="formCol2Content">
              <div className="formLine">
                <label htmlFor="available" className="available">POUNDS AVAILABLE: </label>
                <button id="decrement" type="button" onClick={handleQDecrement}>-</button>
                <input 
                  className='priceQuantityInput2'
                  name='quantity'
                  value={quanValue}
                  onChange={handleNumberChange}
                  maxLength='3'
                />
                <button id="increment" type="button" onClick={handleQIncrement}>+</button>
              </div>
            </div>
            <div className="formImage">
              <img src={originImg} alt="coffee plantation"/>
            </div>
            <div className="breakLine3">
              <svg xmlns="http://www.w3.org/2000/svg" width="525" height="2" viewBox="0 0 525 2" fill="none">
                <path d="M525 1L9.53674e-07 1" stroke="#857E75"/>
              </svg>
            </div>
            
            <div className="btn2">
              <button className="saveFormButton" id="formSaveButton" type="submit" onClick={props.formSubmissionHandler}><span className="buttonTextSolid">{props.buttonText}</span></button>
            </div>
            <div className="btn1">
              <button className="cancelFormButton" id="formCancelButton" type="button" onClick={props.onClickingCancel}><span className="buttonText">Cancel</span></button>
            </div>
          </div>
        </form>
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