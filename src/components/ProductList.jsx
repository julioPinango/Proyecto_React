import { useEffect, useState } from "react";
import ButtonComponent from "./Button";
import ContadorComponente from "./ContadorComponente";
import '../styles/ProductList.css';


export default function ProductList(){
    const [product, setProducts] = useState([]);

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=10')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProducts(datos.results)
            })
            .catch(error => console.log(error))
    },[])

    return(
        <>
            <h2>Lista de Prooductos Importados</h2>
            <ul>
                {product.map((product) => (
                <li key={product.id} className="item">
                <h3>{product.title}</h3>
                <p>Precio: ${product.price}</p>
                <ContadorComponente stock= '10' />
                <p><ButtonComponent nombre="Agregar Al Carrito" color="blue" /></p>
                </li>
            ))}
            <ul></ul></ul>
        </>
    );
}