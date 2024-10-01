import React from "react";
import Header from './Header';
import EditItemForm from "./EditItemForm";
import ItemDetail from "./ItemDetail";
import NewItemForm from "./NewItemForm";
import ItemsList from "./ItemsList";
import InventoryWidget from "./InventoryWidget";
import { v4 } from 'uuid';

import colImg from "./../img/colombiaImg.png";
import colImgNo from "./../img/ccpNo.png";
import colFlag from "./../img/colombiaFlag.png";
import brazilImg from "./../img/cp.png";
import brazilFlag from "./../img/brazilFlag.png";
import indiaImg from "./../img/icp.png";
import indiaFlag from "./../img/indiaFlag.png";
import philImg from "./../img/pcp.png";
import philFlag from "./../img/philFlag.png";
import closeIcon from "./../img/closeIcon.png";
import narrowIndex from "./../img/indexCardNarrow.webp";

class MenuController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItemFormVisible: false,
      editItemFormVisible: false,
      deleteWarningVisible: false,
      selectedItem: null,
      itemsList: [ { name: 'Arabica', origin: 'Colombia', roast: 'medium', description: 'Our Arabica beans produce the highest-quality coffee, smooth and sweet with complex and intricate flavor undertones that may include fruit, sugar or chocolate. They will usually contain just enough acidity and very little bitterness.', price: 15, quantity: 130, notification: '', id: v4() }, { name: 'Robusta', origin: 'Brazil', roast: 'dark', description: 'Robusta coffee is stronger with a heavier body. It has a slight-bitter taste, but still smooth and robust with a fragrant aroma. It\'s deep flavor profile stands up well to creamer, milk, sugar, and other added ingredients.', price: 14, quantity: 130, notification: "", id: v4() }, { name: 'Liberica', origin: 'Phillipines', roast: 'light', description: 'A less caffeinated bean, with a nutty bold taste, and a floral aroma. It\'s unique profile is suited to those looking for a lighter cup of coffee, but enjoy the unique flavor notes this been produces. ', price: 17, quantity: 130, notification: "", id: v4() }, { name: 'Excelsa', origin: 'India', roast: 'light', description: 'Our excelsa beans have a tart, fruity flavor for a light roast, but with additional notes that are more like those you\'d find in a dark roast. This exceptional bean is a rare treat, many feel it produces the tastiest of cup of coffee.', price: 21, quantity: 130, notification: "", id: v4() } ],
      countryList: [ 
                  {origin: 'Colombia', flag: colFlag, cpImg: colImg, cpImgNo: colImgNo}, 
                  {origin: 'Brazil', flag: brazilFlag, cpImg: brazilImg, cpImgNo: colImgNo},
                  {origin: 'India', flag: indiaFlag, cpImg: indiaImg, cpImgNo: colImgNo},
                  {origin: 'Phillipines', flag: philFlag, cpImg: philImg, cpImgNo: colImgNo} ]
    };
  }

  handleClick = () => {
    console.log("we made it")
    this.setState(prevState => ({ 
      newItemFormVisible: !prevState.newItemFormVisible 
    }));
  }

  handleEditClick = () => {
    this.setState({
      editItemFormVisible: true
    });
  }

  handleAddingNewItem = (newItem) => {
    const newItemsList = this.state.itemsList.concat(newItem);
    this.setState({
      itemsList: newItemsList,
      newItemFormVisible: false
    });
  }

  handleChangingSelectedItem = (itemId) => {
    const newSelectedItem = this.state.itemsList.filter(item => item.id === itemId)[0];
    this.setState({
      selectedItem: newSelectedItem
    });
  }

  handleReturningToList = () => {
    this.setState({
      selectedItem: null,
      editItemFormVisible: false
    });
  }

  handleCancelingEditForm = () => {
    this.setState({
      editItemFormVisible: false
    });
  }

  handleCancelingDelete = () => {
    this.setState({
      deleteWarningVisible: false
    })
  }

  handleDeletingWarning = () => {
    this.setState({
      deleteWarningVisible: true
    });
  }

  handleDeletingItem = (itemId) => {
    const newItemsList = this.state.itemsList.filter(item => item.id !== itemId);
    this.setState({
      itemsList: newItemsList,
      selectedItem: null,
      deleteWarningVisible: false
    });
  }

  handleEditingItem = (editedItem) => {
    const newItemsList = [...this.state.itemsList];
    const index = this.state.itemsList.indexOf(this.state.selectedItem);
    newItemsList.splice(index, 1, editedItem);
    const currentItem = newItemsList[index];

    this.setState({
      itemsList: newItemsList,
      selectedItem: currentItem,
      editItemFormVisible: false
    });
  }

  handleBuyingClick = (quantityPurchased) => {
    console.log(quantityPurchased);
    const purchasedItem = this.state.itemsList.filter(item => item.id === this.state.selectedItem.id)[0];
    purchasedItem.quantity -= quantityPurchased;
    const newItemsList = [...this.state.itemsList];
    const index = this.state.itemsList.indexOf(this.state.selectedItem);
    newItemsList.splice(index, 1, purchasedItem);

    purchasedItem.notification = (purchasedItem.quantity === 0) ? "OUT OF STOCK" :
    (purchasedItem.quantity <= 10) ? "ALMOST SOLD OUT!" : "" ;

    this.setState({
      itemsList: newItemsList,
      selectedItem: null
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="appContainer">
          <div className="leftPage">
            <div className="menuIconContainer">
              <svg className="menuIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none">
                <path d="M0 13V10.8333H20V13H0ZM0 7.58333V5.41667H20V7.58333H0ZM0 2.16667V0H20V2.16667H0Z" fill="#343434"/>
              </svg>
            </div>
          </div>
          <div className="centerPage"> 
            <Header widgetAreaComponent=
              { <InventoryWidget itemsList={ this.state.itemsList } 
                                 onAddBeanClick={ this.handleClick } />
              }
            /> 
          </div>
          <div className="centerPageBottom">
            <React.Fragment>
              <ItemsList itemsList={ this.state.itemsList } 
                        onItemSelection={ this.handleChangingSelectedItem } 
                        countryList={ this.state.countryList } />

            </React.Fragment>
          </div>
          {
            this.state.deleteWarningVisible ?
              <React.Fragment>
                <div className="container-details">
                  <div className="deleteWarning">
                    <p className="deleteWarningText">Are you sure you want to delete {this.state.selectedItem.name}? </p>
                    <div className="deleteWdgButtons">
                      <button type="submit" className="cancelButton" onClick={this.handleCancelingDelete}><span className="buttonText">Cancel</span></button>
                      <button type="submit" className="deleteButton" onClick={() => this.handleDeletingItem(this.state.selectedItem.id)}><span className="buttonTextSolid">Delete Bean</span></button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            :
            this.state.editItemFormVisible ?
              <React.Fragment>
                <div className="container-details">
                  <EditItemForm item={ this.state.selectedItem }
                                countryList={ this.state.countryList }
                                onEditingItem={ this.handleEditingItem } 
                                onClickingCancel={ this.handleCancelingEditForm } />
                
                </div>
              </React.Fragment>
            :
            this.state.selectedItem !== null ?
              <React.Fragment>
              
                <div className="container-details">
                  <div className="detBtn"> 
                    <img src={closeIcon} onClick={ this.handleReturningToList } />
                  </div>
                  <ItemDetail item={ this.state.selectedItem }
                              countryList={ this.state.countryList }
                              onClickingDelete={ this.handleDeletingItem }
                              onClickingEdit={ this.handleEditClick } 
                              onBuyingItem={ this.handleBuyingClick } 
                              onQuantityCreation={ this.handleBuyingClick } />
                  <div className="indexEditWidget">
                    <img src={narrowIndex} className="indexNarrow" />
                    <div className="editWidgetContainer">
                      <h2 className="editWdgHeader">admin actions</h2>
                      <div className="editWidgetActions">
                        <h3 className="widgetLink" id="editLinkA" onClick={this.handleEditClick}>+ edit details</h3>
                        <h3 className="widgetLink" id="editLinkB" onClick={this.handleDeletingWarning}><a>- delete bean</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            :
            this.state.newItemFormVisible ?
              <React.Fragment>
                <div className="form">
                <div className="returnButton">
                    <button onClick={ this.handleClick }>Return to Bean List</button>
                  </div>
                  <NewItemForm onNewItemCreation={ this.handleAddingNewItem } />
                </div>
              </React.Fragment>
            : null
          }
          <div className="rightPage">
            <div className="cartContainer">
              <h3 className="cart">cart</h3>
              <div className="cartCountContainer">
                <svg className="cartCircle" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#343434"/>
                </svg>
                <h3 className="cartCount">0</h3>
            </div>
            </div>
          </div>
          <div className="footer">
            <h4 className="footerText">Crafted with care, from earth to cup</h4>
          </div>
        </div>
      </React.Fragment>
    );
  }  
}

export default MenuController;
