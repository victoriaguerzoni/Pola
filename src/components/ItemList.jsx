import React from 'react';
import Item from './Item';
import items from '../JSON/Productos.json';


const ItemList = ({items}) => {
  
  return (
    <div className="row col-md-12 m-3 ">
      {items.map(item => <Item key={item.id} item={item} />)}
    </div>
  )
}

export default ItemList