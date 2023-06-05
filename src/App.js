import React from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContextProvider from './context/CartContext'



const App = () => {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi tienda online"/>}></Route>
        <Route path='/category/:categoryId'element={<ItemListContainer/>}></Route>
        <Route path='/item/:itemid'element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route> 
      </Routes>
    </CartContextProvider>
    </BrowserRouter>
  )
}
 
export default App
