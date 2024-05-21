import { useRef, useState } from "react";


export default function ContadorComponente ({stock}){
    const [contador, setContador]=useState(0);
    const clicks = useRef(0);

    const handleClickSumar = () => {
        if (contador >= stock){
            alert('NO HAY STOCK PARA ESTE PRODUCTO');
        }
        else{
            setContador(contador + 1);
        }
        clicks.current++
        console.log('Quedan:'+ (stock-contador-1)+' de este producto')
        console.log('Contador de Clicks: '+ clicks.current)
    }
    const handleClickRestar = () => {
        if (contador<=0) {
            setContador(0)
            console.log('Quedan:'+ (stock)+' de este producto')
        }
        else{
            setContador(contador - 1);
            console.log('Quedan:'+ (stock-contador+1)+' de este producto')
        }
        clicks.current++
    }
    return (
    <>
        <button onClick={handleClickRestar}>-</button>
        {contador}
        <button onClick={handleClickSumar}>+</button>
    </>
    )
}