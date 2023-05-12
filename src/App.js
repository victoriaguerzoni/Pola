import React from 'react'
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
        <Route path='/category/:id'element={<ItemListContainer/>}></Route>
        <Route path='/item/:id'element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
 
export default App
