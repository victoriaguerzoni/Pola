import React from 'react'
import './app.css'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import NavBar from './Components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi tienda online"/>}></Route>
        <Route path='/category/:categoryId'element={<ItemListContainer/>}></Route>
        <Route path='/item/:itemid'element={<ItemDetailContainer/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}
 
export default App
