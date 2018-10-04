import React from 'react';
import './App.css';

class ItemList extends React.Component {
  render() {
    const list = [
      {     name:"Cereales con chocolate",
            description:"Cereales rellenos de chocolate",
            quantity:2,
            category:"Cereales",
            price:5
       },
       {    name:"Hamburguesa con queso",
            description:"Hamburguesa rica y saludable",
            quantity:1,
            category:"Fast-food",
            price:15
         },
          {
            name:"Agua mineral",
            description:"Agua de un charco del Himalaya",
            quantity:2,
            category:"Bebida",
            price:5
          },
       {    name:"Coca-cola",
            description:"Coca-cola",
            quantity:5,
            category:"Bebida",
            price:7
         }
    ];
 return (
      <div className="ItemList">
        <ul className="item-list">
          {list.map(
            function(item){
              return (
                <li className={item.name}>
                  {item.name} {item.description} {item.quantity} {item.category} {item.price}
                </li>
              );
            }
          )}
        </ul>
      </div>
  );
  }
}

export default ItemList;
