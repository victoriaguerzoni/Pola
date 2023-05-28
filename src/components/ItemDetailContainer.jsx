
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getProductById} from '../asyncmock/Productos'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState((null))
  const {itemid} = useParams();

  useEffect (()=>{
      getProductById(itemid)
      .then(response=>{
          setProduct(response)
      })
      .catch (error=> {
          console.log(error)
      })
  },[itemid])

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer