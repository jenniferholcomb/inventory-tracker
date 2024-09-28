import React from "react";
import Header from './Header';
import EditItemForm from "./EditItemForm";
import ItemDetail from "./ItemDetail";
import NewItemForm from "./NewItemForm";
import ItemsList from "./ItemsList";
import InventoryWidget from "./InventoryWidget";
import { v4 } from 'uuid';

import award1 from "./../img/steward.png";
import award2 from "./../img/leagueAward.png";
import award3 from "./../img/bioAward.png";

import colImg from "./../img/colombiaImg.png";
import colFlag from "./../img/colombiaFlag.png";
import brazilImg from "./../img/cp.png";
import brazilFlag from "./../img/brazilFlag.png";
import indiaImg from "./../img/icp.png";
import indiaFlag from "./../img/indiaFlag.png";
import philImg from "./../img/pcp.png";
import philFlag from "./../img/philFlag.png";

class MenuController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItemFormVisible: false,
      editItemFormVisible: false,
      selectedItem: null,
      itemsList: [ { name: 'Arabica', origin: 'Colombia', roast: 'medium', description: 'Our Arabica beans produce the highest-quality coffee, smooth and sweet with complex and intricate flavor undertones that may include fruit, sugar or chocolate. They will usually contain just enough acidity and very little bitterness.', price: 15, quantity: 130, notification: '', id: v4() }, { name: 'Robusta', origin: 'Brazil', roast: 'dark', description: 'Robusta coffee is stronger with a heavier body. It has a slight-bitter taste, but still smooth and robust with a fragrant aroma. It\'s deep flavor profile stands up well to creamer, milk, sugar, and other added ingredients.', price: 14, quantity: 130, notification: "", id: v4() }, { name: 'Liberica', origin: 'Phillipines', roast: 'light', description: 'A less caffeinated bean, with a nutty bold taste, and a floral aroma. It\'s unique profile is suited to those looking for a lighter cup of coffee, but enjoy the unique flavor notes this been produces. ', price: 17, quantity: 130, notification: "", id: v4() }, { name: 'Excelsa', origin: 'India', roast: 'light', description: 'Our excelsa beans have a tart, fruity flavor for a light roast, but with additional notes that are more like those you\'d find in a dark roast. This exceptional bean is a rare treat, many feel it produces the tastiest of cup of coffee.', price: 21, quantity: 130, notification: "", id: v4() } ],
      countryList: [ 
                  {origin: 'Colombia', flag: colFlag, cpImg: colImg}, 
                  {origin: 'Brazil', flag: brazilFlag, cpImg: brazilImg},
                  {origin: 'India', flag: indiaFlag, cpImg: indiaImg},
                  {origin: 'Phillipines', flag: philFlag, cpImg: philImg} ]
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

  handleDeletingItem = (itemId) => {
    console.log(this.state.itemsList);
    const newItemsList = this.state.itemsList.filter(item => item.id !== itemId);
    this.setState({
      itemsList: newItemsList,
      selectedItem: null
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
            {/* <img className="aw3" src={award3} alt="fictional award, the Bio Award" />
            <img className="aw2" src={award2} alt="fictional award from League of Farmers" />
            <img className="aw1" src={award1} alt="fictional award from Bio-Farmers of America" /> */}
          </div>
          <div className="centerPage"> 
            <Header widgetAreaComponent=
              { <InventoryWidget itemsList={ this.state.itemsList } 
                                 onAddBeanClick={ this.handleClick } />
              }
            /> 
          </div>
            {
            this.state.editItemFormVisible ?
              <React.Fragment>
                <div className="form">
                  <div className="returnButton">
                    <button onClick={ this.handleReturningToList }>Return to Bean List</button>
                  </div>
                  <EditItemForm item={ this.state.selectedItem }
                                onEditingItem={ this.handleEditingItem } />
                </div>
              </React.Fragment>
            :
            this.state.selectedItem !== null ?
              <React.Fragment>
                
                <div className="container-details">
                <div className="detBtn"> 
                  <button onClick={ this.handleReturningToList }>Return to Bean List</button>
                </div>
                  <ItemDetail item={ this.state.selectedItem }
                              onClickingDelete={ this.handleDeletingItem }
                              onClickingEdit={ this.handleEditClick } 
                              onBuyingItem={ this.handleBuyingClick } 
                              onQuantityCreation={ this.handleBuyingClick } />
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
            :
            <div className="centerPageBottom">
              <React.Fragment>
                <ItemsList itemsList={ this.state.itemsList } 
                          onItemSelection={ this.handleChangingSelectedItem } 
                          countryList={ this.state.countryList } />

              </React.Fragment>
            </div>
            }
          <div className="rightPage">

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
