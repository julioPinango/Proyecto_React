// src/components/CartWidget.js
import React from 'react';
import cartIcon from '../assets/cart-icon.png'; // Ajusta la ruta según la ubicación de tu imagen
import '../styles/CartWidget.css';

export default function CartWidget({ itemCount }) {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Carrito de Compras" />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
}
