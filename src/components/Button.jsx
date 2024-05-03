export default function ButtonComponent({nombre, color}){
    const estilo={
        backgroundColor:color,
        color:"white"
    }
    return <button style={estilo}>{nombre}</button>
}