import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { query, collection, where, getDocs } from 'firebase/firestore';
import {db} from '../services/firebase/firebaseconfig'

const ItemListContainer = ({greeting}) => {
  const [prods,setProds]= useState([]);
  const {categoryId}=useParams()

  useEffect (()=>{
    const collectionRef= categoryId
    ?query(collection(db,'productos'), where ('category',"==", categoryId))
    : collection (db, 'productos')

    getDocs(collectionRef)
      .then (response=>{
        const productsAdapted=response.docs.map((doc) => {
          const data = doc.data()
          return {id:doc.id,...data}
        })
        setProds(productsAdapted)
      })
      .catch(error=>{
      console.log (error)
      })
  },[categoryId])

  return (
    <section>
        <h1 className="text-center m-2">{greeting}</h1>
        <ItemList items={prods} />
        
    </section>
  )
}

export default ItemListContainer