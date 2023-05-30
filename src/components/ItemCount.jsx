import React, { useState } from 'react';

const ItemCount = ({stock,inicial}) => {
  const [counter, setCounter]=useState (1);
  const [stockCounter,setStockCounter]=useState(stock)

  const sumarProducto=()=>counter<stock && setCounter(counter+1)
     
  const restarProducto=()=>counter>inicial && setCounter(counter-1)

  const onAdd=()=>{
    if(stockCounter>=counter){
    setStockCounter(stockCounter-counter);}
    console.log("agregastes "+counter+" producto al carrito")    
    }
  return (
    <div className="container">
        <div>
            <div className="col">
                <button type="button" className="btn btn-primary" onClick={restarProducto}>-</button>
                <button type="button" className="btn btn-primary">{counter}</button>
                <button type="button" className="btn btn-primary" onClick={sumarProducto}>+</button>
            </div>
            <div className="col">
                <button  type="button" className="btn btn-warning"onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCount