export default function ButtonComponent({nombre, color}){
    const estilo={
        backgroundColor:color,
        color:"white"
    }
    const handleClick = () => {
        console.log(`estas en la seccion de ${nombre}`)
    };
    return <button onClick={handleClick} style={estilo}>{nombre}</button>
}