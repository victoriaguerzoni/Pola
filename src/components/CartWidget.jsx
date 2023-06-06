import React from 'react'
import { Link } from 'react-router-dom'


const CartWidget = () => {
  return (
    <>
        <button type="button" className="btn btn-secondary"><Link to='/cart'>🛒</Link>
           <span className="badge bg-secondary"></span>
        </button>
    </>
  )
}

export default CartWidget