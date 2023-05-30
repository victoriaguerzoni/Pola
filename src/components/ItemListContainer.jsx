import ItemList from './ItemList'
import { items} from '../asyncmock/Productos';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemListContainer = ({greeting}) => {
  const [prods,setProds]= useState([]);
  const {categoryId}=useParams()

  const getProds = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(items)
      }, 500)
    })
  }

  useEffect (()=>{
    if(categoryId) {
      const byCategory = async () => {
        try {
          const res = await getProds()
          const info = res.filter(e => e.category === categoryId)
          setProds(info)
        } catch (error) {
          console.log(error);
        }
      }
      byCategory();
        console.log('rastreando por categoria',prods);
    } else {
      const all = async () => {
        try {
          const res = await getProds()
          setProds(res)
        } catch (error) {
          console.log(error);
        }
      }
      all();
    }
},[categoryId])

  return (
    <section>
        <span>{greeting}</span>
        <ItemList items={prods} />
        
    </section>
  )
}

export default ItemListContainer