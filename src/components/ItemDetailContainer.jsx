import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [prod,setProd]=useState(null)
  const{itemId}= useParams()
  useEffect(()=>{
    getProdById(itemId)
    .then(response=>{
      setProd(response)
    })
    .catch(error=>{
      console.log(error)
    })
  }),[itemId]



return(
  <div>
  <ItemDetail {...prod}/>
  </div>
)}
export default ItemDetailContainer