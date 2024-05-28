// src/components/NavBar.js
import React, { useState } from 'react';
import ButtonComponent from "./Button";
import CartWidget from "./CartWidgetComponente";
import '../styles/NavBar.css';
import SearchComponente from './SearchComponente';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // Estado para el conteo de ítems en el carrito

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <CartWidget itemCount={cartItemCount} />
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ButtonComponent nombre="Menú" color="black" />
          {menuOpen && (
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li>
                <Link to={'/'}>
                <ButtonComponent nombre="Inicio" color="blue" />
                </Link>
              </li>
              <li>
                <Link to={'/productos'}>
                <ButtonComponent nombre="Productos" color="blue" />
                </Link>
              </li>
              <li>
                <Link to={'/MisCompras'}>
                <ButtonComponent nombre="Mis Compras" color="blue" />
                </Link>
              </li>
              <li>
                <Link to={'/Contacto'}>
                <ButtonComponent nombre="Contacto" color="blue" />
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <SearchComponente/>
        </li>
      </ul>
    </nav>
  );
}

