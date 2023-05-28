import locionHidratante from '../img/locionHidratanteydescongestiva.jpeg'
import aguaMicelar from '../img/aguaMicelar.jpeg'
import emulsiondeLimpieza from '../img/emulsiondeLimpieza.jpeg'
import serumContornoOjos from '../img/serumContornoOjos.jpg'
import labialconAcidoHialuronico from '../img/labialConAcidoHialuronico.jpg'
import paletaCrayon from '../img/paleta crayon.jpg'
import shampooSolido from '../img/shampooSolido.jpg'
export const items=[

    {
        "id":12,
        "category":"Cuidado facial",
        "title":"locion hidratante y descongestiva",
        "price":1800,
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "pictureURL":locionHidratante,
        "stock":5
    },
    {
      "id":18,
      "category":"Cuidado facial",
      "title":"Agua Micelar",
      "price":1800,
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "pictureURL":aguaMicelar,
      "stock":5
  },
 
    {"id":19,
      "category":"Cuidado facial",
      "title":"Emulsión de limpieza",
      "price":1200,
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "pictureURL":emulsiondeLimpieza,
      "stock":10
      },
      {
        "id":13,
        "category":"Cuidado facial",
        "title":"Serum contorno de ojos",
        "price":1100,
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "pictureURL":serumContornoOjos,
        "stock":6
      },
      {
        "id":2,
        "category":"Maquillaje",
        "title":"Labial con ácido Hialuronico",
        "price":1500,
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "pictureURL":labialconAcidoHialuronico,
        "stock":10
      },
      {
        "id":22,
        "category":"Maquillaje",
        "title":"Paleta Crayon",
        "price":5500,
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "pictureURL":paletaCrayon,
        "stock":10
      },
      {
        "id":32,
        "category":"Cuidado capilar",
        "title":"Shampoo sólido",
        "price":500,
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "pictureURL":shampooSolido,
        "stock":10
      },
  
]
export const getProductByCatedory = (categoryid)=>{
  return new Promise ((resolve)=>{
    resolve (items.find(prod=>prod.category===categoryid))
  })
}
export const getProductById = (productid) => {
  return new Promise ((resolve)=> {
      setTimeout (()=> {
          resolve (items.find(prod => prod.id===parseInt(productid)))
      },500)
  })

}

