import React from 'react';
import { useEffect, useState } from "react";
import '../styles/ItemListContainer.css';
import ItemCard from './ItemCard';

const items = [
    { id: 1, title: 'Producto 1', description: 'Descripción del Producto 1', price: 100, stock: 5 },
    { id: 2, title: 'Producto 2', description: 'Descripción del Producto 2', price: 200, stock: 5 },
    { id: 3, title: 'Producto 3', description: 'Descripción del Producto 3', price: 350, stock: 5 },
    { id: 4, title: 'Producto 4', description: 'Descripción del Producto 4', price: 400, stock: 5 },
    { id: 5, title: 'Producto 5', description: 'Descripción del Producto 5', price: 450, stock: 5 },
    { id: 6, title: 'Producto 6', description: 'Descripción del Producto 6', price: 500, stock: 5 },
];

export default function ItemListContainer() {

    const [product, setProducts] = useState([]);

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=10')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProducts(datos.results)
            })
            .catch(error => console.log(error))
    },[])

    return (
        <div className="item-list-container">
            <h2>Productos</h2>
            <section>
                {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </section>
            <h2>Lista de Prooductos Importados</h2>
            <section>
                {product.map((product) => (
                    <ItemCard key={product.id} item={product} />
                ))}
            </section>
        </div>
    );
}
