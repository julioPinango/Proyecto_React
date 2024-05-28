const products = [
    { id: 1, title: 'Producto 1', description: 'Descripción del Producto 1', price: 100, stock: 5 },
    { id: 2, title: 'Producto 2', description: 'Descripción del Producto 2', price: 200, stock: 5 },
    { id: 3, title: 'Producto 3', description: 'Descripción del Producto 3', price: 350, stock: 5 },
    { id: 4, title: 'Producto 4', description: 'Descripción del Producto 4', price: 400, stock: 5 },
    { id: 5, title: 'Producto 5', description: 'Descripción del Producto 5', price: 450, stock: 5 },
    { id: 6, title: 'Producto 6', description: 'Descripción del Producto 6', price: 500, stock: 5 },
    { id: 7, title: 'Oferta 1', description: 'Descripción del Producto 7', price: 100, stock: 5 },
    { id: 8, title: 'Oferta 2', description: 'Descripción del Producto 8', price: 200, stock: 5 },
    { id: 9, title: 'Oferta 3', description: 'Descripción del Producto 9', price: 350, stock: 5 },
    { id: 10, title: 'Oferta 4', description: 'Descripción del Producto 10', price: 400, stock: 5 },
];


export const getData = async (URL) => {
    try {
        const respuesta = await fetch(URL);
        if (!respuesta.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
};

export const getProduct = (id) => {
    return (products.find((prod) => prod.id == id));
};