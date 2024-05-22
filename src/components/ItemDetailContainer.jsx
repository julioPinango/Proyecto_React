import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail-container">
      <h2>{product.title}</h2>
      <p>Precio: ${product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
}
