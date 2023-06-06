import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {cart, cartTotal,priceTotal, removeItem}= useContext(CartContext)

  return (
    <div>
        <table>
            <thead className='m-5'>
                
                <tr>
                    <th>Producto</th>
                    <th>cantidad</th>
                    <th>precio</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(item=>(
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.quantify}</td>
                        <td>${cartTotal()}</td>
                        <td><button onClick={()=>{removeItem(item.id)}}></button></td>
                    </tr>
                ))}
                <tr>
                    <td>${priceTotal()}</td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default Cart