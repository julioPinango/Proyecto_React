import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'
import TituloPirncipal from './components/TItuloPrincipal'
import NavBar from './components/NavBar'
import ContadorComponente from './components/ContadorComponente'
import ItemListContainer from './components/ItemListContainerComponente'
import ProductList from './components/ProductList';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
    <>
      <NavBar/>
      <TituloPirncipal/>   
      <ItemListContainer/>
      <ProductList/>      
    </>
  )
}

export default App
