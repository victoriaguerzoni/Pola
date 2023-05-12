import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  const items=
  [
    {"id":1,
    "category": "cosmetica natural",
    "subcategory": "cuidado facial",
    "title":"locion hidratante y descongestiva",
    "price":1800,
    "description":"lkslñklkñlk",
    "pictureURL":"data:image/jpeg;base64,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",
    "stock":0,
    },
    {
      "id":13,
      "category": "cosmetica natural",
      "subcategory": "cuidado facial",
      "title":"locion hidratante y descongestiva",
      "price":1800,
      "description":"lkslñklkñlk",
      "pictureURL":"",
      "stock":6,
    },
    {
      "id":2,
      "category": "cosmetica natural",
      "subcategory": "cuidado facial",
      "title":"locion hidratante y descongestiva",
      "price":1800,
      "description":"lkslñklkñlk",
      "pictureURL":"",
      "stock":10,
    }

  ]
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
        <ItemList/>
        
    </section>
  )
}

export default ItemListContainer