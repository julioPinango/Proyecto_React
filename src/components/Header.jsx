import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import lightmodeLogo from "../img/LOGOLM.png";
import darkmodeLogo from "../img/LOGODM.png";
import lightmodenombre from "../img/SmartMarketLightMode.png";
import darkmodeNombre from "../img/SmartMarketDarkMode.png";
import ButtonComponent from "./Button";
import CartWidget from "./CartWidgetComponente";
import SearchComponente from './SearchComponente';

const Header = ({ toggleDarkMode, darkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0); // Estado para el conteo de ítems en el carrito

    const handleMouseEnter = () => {
        setMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header ${darkMode ? "dark-mode" : "light-mode"} py-3`}>
            <nav className="nav nav-pills ml-auto d-flex align-items-center w-100">
                <div className="container d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex align-items-center">
                        <Link to="/" className="text-decoration-none logo-container d-flex align-items-center">
                            <img src={darkMode ? darkmodeLogo : lightmodeLogo} alt="Logo" className="logo" />
                            <img src={darkMode ? darkmodeNombre : lightmodenombre} alt="Nombre del Proyecto" className="nombre-img ml-2" />
                        </Link>
                    </div>
                    <div className="d-flex align-items-center">
                        <ul className="nav-menu d-flex align-items-center">
                            <li>
                                <CartWidget itemCount={cartItemCount} />
                            </li>
                            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <ButtonComponent nombre="Menú" color="black" />
                                {menuOpen && (
                                    <ul className="submenu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <li>
                                            <Link to="/">
                                                <ButtonComponent nombre="Inicio" color="blue" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/productos">
                                                <ButtonComponent nombre="Productos" color="blue" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/MisCompras">
                                                <ButtonComponent nombre="Mis Compras" color="blue" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Contacto">
                                                <ButtonComponent nombre="Contacto" color="blue" />
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <SearchComponente />
                            </li>
                        </ul>
                        <button onClick={toggleDarkMode} className="toggle-dark-mode-btn">
                            {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;


