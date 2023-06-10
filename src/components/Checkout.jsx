import React from 'react'
import CheckoutForm from './CheckoutForm'
import { ventasData } from '../services/firebase/ventasData'

const Checkout = () => {
  const venta=(data)=>{
    ventasData(data)

  }
  return (
    <div><CheckoutForm onSend={venta}/></div>
  )
}

export default Checkout