import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TituloPirncipal from './components/TItuloPrincipal'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <TituloPirncipal/>            
    </>
  )
}

export default App
