import React, { useEffect } from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
 
  const getItem=({items})=>{
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
        <ItemList/>
        
    </section>
  )
}

export default ItemListContainer