import { useState, useEffect } from "react";
import Header from "../Header";
import '../../styles/Home.css';
import '../../styles/ItemListContainer.css';
import ItemCard from '../ItemCard';
const items = [
    { id: 1, title: 'Oferta 1', description: 'Descripción del Producto 1', price: 100, stock: 5 },
    { id: 2, title: 'Oferta 2', description: 'Descripción del Producto 2', price: 200, stock: 5 },
    { id: 3, title: 'Oferta 3', description: 'Descripción del Producto 3', price: 350, stock: 5 },
    { id: 4, title: 'Oferta 4', description: 'Descripción del Producto 4', price: 400, stock: 5 },
];

export default function Home() {

    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode);
            return newMode;
        });
    };

    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    }, [darkMode]);

    return (
        <>
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <h2>MI E-Commerce</h2>
                <div className="item-list-container">
                    <h2>Ofertas y Artículos Nuevos</h2>
                    <h2>Productos</h2>
                    <section>
                        {items.map((item) => (
                            <ItemCard key={item.id} item={item} />
                        ))}
                    </section>
                    <p>¡No te pierdas nuestras ofertas exclusivas y los artículos más recientes en nuestra tienda!</p>
                    <ul>
                        <li>Descuento del 50% en la colección de verano</li>
                        <li>Nuevas llegadas: Gadgets tecnológicos</li>
                        <li>Promoción de 2x1 en calzado deportivo</li>
                    </ul>
                </div>
            </div>
        </>
    );
}