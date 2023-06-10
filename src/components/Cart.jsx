import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, cartTotal,priceTotal, removeItem, clear}= useContext(CartContext)

  return (
    <div className='table-responsive'>
        <table className=' table align-middle'>
            <thead className='m-5'>                
                <tr className='table-warning'>
                    <th className='table-warning'>Producto</th>
                    <th className='table-warning'>Cantidad</th>
                    <th className='table-warning'>Precio</th>
                    <th className='table-warning'>Eliminar</th>
                    <th className='table-warning'>Precio Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(item=>(
                    <tr className='table-warning' key={item.id}>
                        <td>{item.title}</td>
                        <td>{cartTotal()}</td>
                        <td>{item.price}</td>
                        <td><button className='btn btn-warning' onClick={()=>{removeItem(item.id)}}>🗑️</button></td>
                        <td></td>
                    </tr>   
                ))}
                <tr className='table-primary'>
                    <td colSpan={1}>Detalle de compra</td>
                    <td>{cartTotal()}</td>
                    <td>${priceTotal()}</td>
                    <td><button className='btn btn-warning' onClick={()=>{clear()}}>🗑️</button></td>
                    <td><button className='btn btn-success'><Link to='/checkout'>finalizar compra</Link></button></td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default Cart