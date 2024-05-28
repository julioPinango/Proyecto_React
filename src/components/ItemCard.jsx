import React from 'react';
import ButtonComponent from './Button';
import ContadorComponente from './ContadorComponente';
import '../styles/ItemCard.css'; 
import { Link } from 'react-router-dom';

export default function ItemCard({ item }) {
    const { title, price} = item;
    return (
        <>
            <article className="item-card">
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <Link to={`/producto/${item.id}`}>
            <p><ButtonComponent nombre="Ver Detalles" color="blue" /></p>
            </Link>
            </article>
        </>
    );
}
