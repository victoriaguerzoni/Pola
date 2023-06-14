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
    <div>
      {!orderId ?
      <div>
      <CheckoutForm onSend={venta}/>
      </div>:
      <div>
        <h3 className='text-center'>felicitaciones por su compra!!</h3>
        <h1 className='text-center'>numero de pedido:{orderId}</h1>
      </div>}
      
    </div>
  )
}

export default Checkout