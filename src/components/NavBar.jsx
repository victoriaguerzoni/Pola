import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import logo from'../img/logo.jpeg'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand"><img src={logo} alt="logo"width="30" height="30" className="d-inline-block align-top"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
              <li className="nav-item dropdown">
                <NavLink to={'/category/categoryId'}className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to={'/category/Cuidado_facial'}>Cuidado facial</Link></li>
                  <li><Link className="dropdown-item" to={'/category/Maquillaje'}>Maquillaje</Link></li> 
                  <li><Link className="dropdown-item" to={'/category/Cuidado_capilar'}>Cuidado capilar</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link disabled" tabIndex="-1" aria-disabled="true">Contactos</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget/>
      </nav> 
    </>
  )
}

export default NavBar