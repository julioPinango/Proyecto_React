import React from 'react';
import '../../styles/MisCompras.css';

export default function MisCompras() {
    return (
        <div>
            <h2>Mis Compras</h2>
            <p>Consulta el historial de tus compras y el estado de tus pedidos.</p>
            <ul>
                <li>Pedido #12345 - Enviado</li>
                <li>Pedido #67890 - En preparación</li>
                <li>Pedido #54321 - Entregado</li>
            </ul>
        </div>
    );
}
