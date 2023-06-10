import React, { useState } from 'react'
import CheckoutForm from './CheckoutForm'
import { ventasData } from '../services/firebase/ventasData'

const Checkout = () => {
  
  const [orderId,setOrder]=useState("")
  const venta=(data)=>{
    ventasData(data).then(orderId=>{
      setOrder(orderId);
    })
    
  }
  console.log(orderId)

  return (
    <div><CheckoutForm onSend={venta}/></div>
  )
}

export default Checkout