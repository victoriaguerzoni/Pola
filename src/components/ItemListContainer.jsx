import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  return (
    <section>
        <span>{greeting}</span>
        <ItemList/>
        
    </section>
  )
}

export default ItemListContainer