import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

export const NavBar = () => { 
    return ( <div>
        <div className="my-3">
        <NavLink to='/'><img src= 'https://i.ibb.co/BrtG6Qw/logo.png' alt = 'logo' className='logo' /></NavLink>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/'>Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/category/DosPartes'>Dos partes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/category/CuatroPartes'>Cuatro partes</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link azul"><CartWidget /></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    );
}

export default NavBar;