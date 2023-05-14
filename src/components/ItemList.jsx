import React from 'react';
import Item from './Item';
import {items} from '../JS/Productos'

const ItemList = () => {

  return (
    <div className="row col-md-12 m-3 ">
      {items.map((item, id) =>(
        <Item 
        key={id}
        category={item.category}
        subcategory={item.subcategory}
        title={item.title} 
        id={item.id}
        description={item.description}
        price={item.price}
        stock={item.stock}/>
      ))}
    </div>
  )
}

export default ItemList