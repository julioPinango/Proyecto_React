import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../asyncMock";
import ItemCardDetail from "../ItemCardDetails";

export default function SingleProduct() {
    const [product, setProduct]= useState({});
    const { prodID } = useParams();
    useEffect(() => {
        setProduct(getProduct(prodID))
    },[])
    return (
        <>
        <ItemCardDetail item={product} />
        </>
    );
}