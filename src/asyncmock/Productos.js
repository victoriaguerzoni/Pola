import locionHidratante from '../img/locionhidratante.jpeg'
export const items=[

    {
        "id":12,
        "category": "cosmetica natural",
        "subcategory": "cuidado facial",
        "title":"locion hidratante y descongestiva",
        "price":1800,
        "description":"lkslñklkñlk",
        "pictureURL":locionHidratante,
        "stock":0
    },
 
    {"id":1,
      "category": "cosmetica natural",
      "subcategory": "cuidado facial",
      "title":"locion hidratante y descongestiva",
      "price":1200,
      "description":"KiC9_L39P4CFQAAAAAdAAAAABAE",
      "pictureURL":locionHidratante,
      "stock":0
      },
      {
        "id":13,
        "category": "cosmetica natural",
        "subcategory": "cuidado facial",
        "title":"locion hidratante y descongestiva",
        "price":1100,
        "description":"lkslñklkñlk",
        "pictureURL":locionHidratante,
        "stock":6
      },
      {
        "id":2,
        "category": "cosmetica natural",
        "subcategory": "cuidado facial",
        "title":"locion hidratante y descongestiva",
        "price":1500,
        "description":"lkslñklkñlk",
        "pictureURL":locionHidratante,
        "stock":10
      }
  
]

export const getProductById = (productid) => {
  return new Promise ((resolve)=> {
      setTimeout (()=> {
          resolve (items.find(prod => prod.id===productid))
      },500)
  })

}
