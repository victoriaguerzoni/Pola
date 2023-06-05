import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc,doc } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseconfig'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState((null))
  const {itemid} = useParams();

  useEffect (()=>{
     const docRef=doc(db,'productos',itemid)
     getDoc(docRef)
     .then(response=>{
      const data=response.data()
      const productsAdapted={id:response.id, ...data}
      setProduct(productsAdapted)

    })
  },[itemid])

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer