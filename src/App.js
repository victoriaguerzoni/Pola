import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a mi libreria online"}/>
    </>
  )
}

export default App
