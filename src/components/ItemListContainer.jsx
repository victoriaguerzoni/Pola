import ItemList from './ItemList'
import { items, getProductByCatedory, getProductById } from '../asyncmock/Productos';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemListContainer = ({greeting}) => {
  const [prods,setProds]= useState();
  const {categoryId}=useParams()

  useEffect(()=>{
    const asyncFunc = categoryId? getProductByCatedory : getProductById
    asyncFunc(categoryId)
    .then(response=>{
      setProds(response)
    })
    .catch (error=>{
      console.log(error)
    })
  })
 
  const getItem=()=>{
    return new Promise((resolve, reject)=>{
      if(items.length===0){
        reject (new Error ("no hay productos para mostrar"));
      }
      setTimeout(()=>{
        resolve (items);
      },2000);
    });
  };

  async function mostrarProd() {
    try{
      const productosMostrados=await getItem();
      console.log (productosMostrados);
  
    }catch(err){
      console.log (err);
    }
  }
  mostrarProd();

  return (
    <section>
        <span>{greeting}</span>
        <ItemList prods={prods} />
        
    </section>
  )
}

export default ItemListContainer