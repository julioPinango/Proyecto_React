import './App.css'
import Home from './components/navigation/Home'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainerComponente'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactView from './components/navigation/ContactView'
import MisComprasView from './components/navigation/MisComprasView'
import SingleProduct from './components/navigation/SingleProduct';
import Header from './components/Header';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/productos' element={<ItemListContainer/>} />
          <Route exact path='/producto/:prodID' element={<SingleProduct/>} />
          <Route exact path='/MisCompras' element={<MisComprasView/>} />
          <Route exact path='/Contacto' element={<ContactView/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
