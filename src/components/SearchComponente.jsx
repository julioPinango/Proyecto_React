import '../styles/Search.css';
import { useEffect, useRef } from 'react';

export default function SearchComponente(){
    const referenciaInput = useRef(null)

    useEffect(() => {
        console.log('Efecto funcionando en el onMount')
        referenciaInput.current.focus()
    })
    
    return(<>
        <section>
            <input type='text' placeholder='¿Buscas algo?' ref={referenciaInput}></input>
            <button>🔎</button>
        </section>
    </>);
}