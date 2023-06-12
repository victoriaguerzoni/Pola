import React, { useState } from 'react'

const CheckoutForm = ({onSend}) => {

   
    const [fields, setFields]=useState({
        name:"",
        lastName:"",
        cel:"",
        email:"",
    })
  
  console.log("mostrando datos del Usuario:", fields)
  const handleSubmit=(e)=>{
    e.preventDefault()
    onSend(fields);
    console.log ("su orden se esta procesando", fields)
       
  }
  
  
  return (   
    <>             
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <h1>Datos del Comprador</h1>
            <form onSubmit={handleSubmit} id='vaciarform'className="row p-4 text-center needs-validation" >
                <div>
                    <label className="form-label"></label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Nombre" value={fields.name} onChange={(e)=>setFields((prevState)=>({...prevState, name: e.target.value}))} required/>
                    <div className="valid-feedback">
                        campo valido!
                    </div>
                </div>
                <div>
                    <label className="form-label"></label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Apellido" value={fields.lastName} onChange={(e)=>setFields((prevState)=>({...prevState, lastName: e.target.value}))} required/>
                    <div className="valid-feedback">
                        campo valido!
                    </div>
                </div>
                <div>
                    <label className="form-label"></label>
                    <input type="number" className="form-control" id="validationCustom03" placeholder="1234567890" value={fields.cel}  onChange={(e)=>setFields((prevState)=>({...prevState, cel: e.target.value}))} required/>
                    <div className="valid-feedback">
                        campo valido!
                    </div>
                </div>
                <div>
                    <label className="form-label"></label>
                    <input type="email" className="form-control" id="validationCustom04" placeholder="user@mail.com" value={fields.email} onChange={(e)=>setFields((prevState)=>({...prevState, email: e.target.value}))} required/>
                    <div className="valid-feedback">
                        campo valido!
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Enviar pedido</button>
                </div>
            </form>
        </div>

    </>    
  )
}

export default CheckoutForm