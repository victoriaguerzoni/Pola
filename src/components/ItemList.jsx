import React from 'react';
import Item from './Item';


const ItemList = ({items}) => {

  return (
    <div className="containerCard card-group aline-items-center">
      {items.map((item, id) =>(
        <Item 
        key={id}
        category={item.category}
        title={item.title} 
        id={item.id}
        description={item.description}
        price={item.price}
        stock={item.stock}
        pictureURL={item.pictureURL}/>
      ))}
    </div>
  )
}

export default ItemList