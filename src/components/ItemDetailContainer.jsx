
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getProductById} from '../asyncmock/Productos'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState((null))
  const id = useParams ().id;

  useEffect (()=>{
      getProductById('12')
      .then(response=>{
          setProduct(response)
      })
      .catch (error=> {
          console.log(error)
      })
  },[id])

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer