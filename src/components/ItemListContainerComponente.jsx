// src/components/ItemListContainer.js
import React from 'react';
import '../styles/ItemList.css';
import ButtonComponent from './Button';
import ContadorComponente from './ContadorComponente';

const items = [
    { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', price: 100, stock:5 },
    { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', price: 200, stock:5 },
    { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3', price: 350, stock:5 },
    { id: 4, name: 'Producto 4', description: 'Descripción del Producto 4', price: 400, stock:5 },
    { id: 5, name: 'Producto 5', description: 'Descripción del Producto 5', price: 450, stock:5 },
    { id: 6, name: 'Producto 6', description: 'Descripción del Producto 6', price: 500, stock:5  },
];

export default function ItemListContainer() {
    return (
    <div className="item-list-container">
        <h2>Productos</h2>
        <ul>
            {items.map((item) => (
                <li key={item.id} className="item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Precio: ${item.price}</p>
                <ContadorComponente stock={item.stock} />
                <p><ButtonComponent nombre="Agregar Al Carrito" color="blue" /></p>
                </li>
            ))}
        </ul>
    </div>
    );
}


