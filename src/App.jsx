import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'
import TituloPirncipal from './components/TItuloPrincipal'
import NavBar from './components/NavBar'
import ContadorComponente from './components/ContadorComponente'
import ItemListContainer from './components/ItemListContainerComponente'


function App() {

  return (
    <>
      <NavBar/>
      <TituloPirncipal/>   
      <ItemListContainer/>        
    </>
  )
}

export default App
