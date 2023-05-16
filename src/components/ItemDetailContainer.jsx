import React, { useEffect } from 'react'
import ItemList from './ItemList'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

return(
  <div>
  <ItemList/>
  <ItemDetail/>
  </div>
)}
export default ItemDetailContainer