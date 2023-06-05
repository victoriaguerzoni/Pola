import React, { useContext, useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import Item from './Item';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({item}) => {
  const {addItem}=useContext(CartContext)
  const [quantifyAdded, setQuantifyAdded]=useState(0)

  const onAdd=(quantify) =>{
    setQuantifyAdded(quantifyAdded-quantify)
    addItem(item, quantify)
  }
  
  useEffect(()=>{
    setQuantifyAdded(item.stock)
  })
  return (
    <>
          <div key={item.id} className="card mb-2">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.pictureURL} className="card-img-top" alt="..."/>
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <h3 className="card-text">$ {item.price}</h3>
                    <p className="card-text"><small className="text-muted">stock: {item.stock}</small></p>
                    {quantifyAdded>0?(<link to='/cart'>finalizar compra</link>):(<ItemCount inicial={1}stock={5} onAdd={onAdd}/>)}
                  </div>
                </div>
            </div>
          </div>

    </>
  )
}

export default ItemDetail