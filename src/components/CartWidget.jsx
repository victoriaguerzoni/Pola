import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const CartWidget = () => {
  const {cartTotal}=useContext(CartContext)
  return (
    <>
        <button type="button" className="btn btn-secondary"><Link to='/cart'>🛒</Link>
           <span className="badge bg-secondary">{cartTotal()}</span>
        </button>
    </>
  )
}

export default CartWidget