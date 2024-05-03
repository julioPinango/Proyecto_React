import ButtonComponent from "./Button";
import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <ul>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ButtonComponent nombre="Menú" color="black" />
          {menuOpen && (
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li>
                <ButtonComponent nombre="Inicio" color="Blue" />
              </li>
              <li>
                <ButtonComponent nombre="Categorías" color="blue" />
              </li>
              <li>
                <ButtonComponent nombre="Mis Compras" color="blue" />
              </li>
              <li>
                <ButtonComponent nombre="Contactos" color="blue" />
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}


