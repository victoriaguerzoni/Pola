import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {cart, cartTotal,priceTotal, clear, removeItem}= useContext(CartContext)

  return (
    <div>
        <table>
            <thead>
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
                        <td>{item.price*item.quantify}</td>
                        <td><button onClick={()=>{removeItem(item.id)}}></button></td>
                    </tr>

                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Cart