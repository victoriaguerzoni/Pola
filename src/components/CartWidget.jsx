import React from 'react'
import { Link } from 'react-router-dom'
import {quantify} from './ItemDetail'
const CartWidget = () => {
  return (
    <>
        <button type="button" className="btn btn-secondary"><Link to='/cart'> 🛒 </Link>
           <span className="badge bg-secondary">{quantify}</span>
        </button>
    </>
  )
}

export default CartWidget