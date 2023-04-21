import React from "react";
import Header from './Header';
import EditItemForm from "./EditItemForm";
import ItemDetail from "./ItemDetail";
import NewItemForm from "./NewItemForm";
import ItemsList from "./ItemsList";
// import Inventory from "./Inventory";
import { v4 } from 'uuid';

class MenuController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItemFormVisible: false,
      editItemFormVisible: false,
      selectedItem: null,
      itemsList: [ { name: 'Arabica', origin: 'Colombia', roast: 'medium', description: 'Our Arabica beans produce the highest-quality coffee, smooth and sweet with complex and intricate flavor undertones that may include fruit, sugar or chocolate. They will usually contain just enough acidity and very little bitterness.', price: 15, quantity: 130, id: v4() }, { name: 'Robusta', origin: 'Brazil', roast: 'dark', description: 'Robusta coffee is stronger with a heavier body. It has a slight-bitter taste, but still smooth and robust with a fragrant aroma. It\'s deep flavor profile stands up well to creamer, milk, sugar, and other added ingredients. When used to make Italian espresson, the beans produce a rich and thick crema.', price: 14, quantity: 130, id: v4() }, { name: 'Liberica', origin: 'Phillipines', roast: 'light', description: 'A less caffeinated bean, with a nutty bold taste, and a floral aroma. It\'s unique profile is suited to those looking for a lighter cup of coffee, but enjoy the unique flavor notes this been produces. ', price: 17, quantity: 130, id: v4() }, { name: 'Excelsa', origin: 'India', roast: 'light', description: 'Our excelsa beans have a tart, fruity flavor for a light roast, but with additional notes that are more like those you\'d find in a dark roast. This exceptional bean is a rare treat, many feel it produces the tastiest of cup of coffee.', price: 21, quantity: 130, id: v4() } ]
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ 
      newItemFormVisible: !prevState.newItemFormVisible 
    }));
  }

  handleAddingNewItem = (newItem) => {
    const newItemsList = this.state.itemsList.concat(newItem);
    this.setState({
      itemsList: newItemsList,
      newItemFormVisible: false
    });
  }

  render() {

    return (
      <React.Fragment>
        <Header />
        { 
        this.state.editItemFormVisible ?
          <React.Fragment>
            <EditItemForm />
          </React.Fragment>
        :
        this.state.selectedItem !== null ?
          <React.Fragment>
            <ItemDetail />
          </React.Fragment>
        :
        this.state.newItemFormVisible ?
          <React.Fragment>
            <NewItemForm onNewItemCreation={ this.handleAddingNewItem } />
            <button onClick={ this.handleClick }>Return to Bean List</button>
          </React.Fragment>
        :
          <React.Fragment>
            <ItemsList itemsList={ this.state.itemsList } />
            <button onClick={ this.handleClick }>Add New Bean</button>
          </React.Fragment>
        }
      </React.Fragment>
    );
  }  
}

export default MenuController;
