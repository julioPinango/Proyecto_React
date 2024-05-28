import ContadorComponente from './ContadorComponente';
import '../styles/ItemCard.css'; 
import ButtonComponent from './Button';

export default function ItemCardDetail({ item }) {
    const { title, description, price, stock = 10 } = item;
    return (
        <>
            <article className="item-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <p>Stock: {item.stock} Unidades</p>
            <ContadorComponente stock={item.stock} />
            <p><ButtonComponent nombre="Agregar Al Carrito" color="blue" /></p>
            </article>
        </>
    );
}