import React, { useState } from 'react';

const ItemCount = ({stock,inicial,onAdd}) => {
  const [counter, setCounter]=useState (1);
  
  const sumarProducto=()=>counter<stock && setCounter(counter+1)
     
  const restarProducto=()=>counter>inicial && setCounter(counter-1)

 
  return (
    <div className="container">
        <div>
            <div className="col">
                <button type="button" className="btn btn-primary" onClick={restarProducto}>-</button>
                <button type="button" className="btn btn-primary">{counter}</button>
                <button type="button" className="btn btn-primary" onClick={sumarProducto}>+</button>
            </div>
            <div className="col">
                <button  type="button" className="btn btn-warning"onClick={()=>onAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCount